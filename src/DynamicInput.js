import React, { useRef } from "react";

const DynamicInput = ({ inputStyle }) => {
  const inputRef = useRef(null);
  const spanRef = useRef(null);

  const adjustInput = (input) => {
    // Update the span with the current text to measure its rendered width
    spanRef.current.textContent = input.value;

    // Restrict input if the text width exceeds the input's width
    while (spanRef.current.offsetWidth + 4 >= input.offsetWidth) {
      input.value = input.value.slice(0, -1); // Remove the last character
      spanRef.current.textContent = input.value; // Update the span text
    }
  };

  const handleInput = (e) => {
    adjustInput(e.target);
  };

  const handlePaste = (e) => {
    e.preventDefault(); // Prevent default paste behavior
    const pastedText = e.clipboardData.getData("text");
    const input = e.target;

    // Add the pasted text to the input value
    input.value += pastedText;
    adjustInput(input);
  };
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        ref={inputRef}
        type="text"
        style={inputStyle}
        onInput={handleInput}
        onPaste={handlePaste}
      />
      {/* Hidden span to measure text width */}
      <span
        ref={spanRef}
        style={{
          visibility: "hidden",
          position: "absolute",
          whiteSpace: "nowrap",
          fontSize: inputStyle.fontSize || "inherit",
          fontFamily: inputStyle.fontFamily || "inherit",
          letterSpacing: inputStyle.letterSpacing || "normal",
        }}
      />
    </div>
  );
};

export default DynamicInput;


