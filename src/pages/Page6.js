import React, { useState } from "react";
import {
  containerStyle,
  inputContainerStyle,
  nameSectionStyle,
  textInputStyle,
} from "../Style";

const Page6 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customOption, setCustomOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value !== "Other") {
      setCustomOption(""); // Clear custom input if another option is selected
    }
  };

  return (
    <div className="page-frame">
      <p>
        <strong>
          In what manner do you wish distributions to be made to beneficiaries?
          (Select only one).
        </strong>
        If none of the options below fulfill your desires please insert the
        manner in which you would like to see your Values passed to your Heirs
        and we will make every effort to accomplish your goals.
      </p>

      <div>
        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="distribution"
            value="Example 1"
            checked={selectedOption === "Example 1"}
            onChange={handleOptionChange}
          />
          Example 1: Lump sum at death.
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="distribution"
            value="Example 2"
            checked={selectedOption === "Example 2"}
            onChange={handleOptionChange}
          />
          Example 2: Trustee to provide for regular expenses (health, education,
          maintenance, support).
          <br />
          <span style={{ textIndent: "23px", display: "block" }}>
            Principal payments as follows:
          </span>
          <ul style={{ marginLeft: "20px" }}>
            <li>One third of the trust principal at age 25</li>
            <li>One third of the trust principal at age 30</li>
            <li>Balance of the trust principal at age 35</li>
          </ul>
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="distribution"
            value="Example 3"
            checked={selectedOption === "Example 3"}
            onChange={handleOptionChange}
          />
          Example 3: Trustee to provide for regular expenses, (health,
          education, maintenance and support). <br />
          <span style={{ textIndent: "23px", display: "block" }}>
            Principal payments as follows:
          </span>
          <ul style={{ marginLeft: "20px" }}>
            <li>One third of the trust principal at age 22</li>
            <li>
              One third of the trust principal at age 27, or , upon completion
              of a bachelors degree from an accredited institution of higher
              learning or upon the earning of a degree from an accredited
              vocational school, whichever occurs first
            </li>
            <li>Balance of the trust principal at age 30</li>
          </ul>
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="distribution"
            value="Example 4"
            checked={selectedOption === "Example 4"}
            onChange={handleOptionChange}
          />
          Example 4: Trustee to provide for regular expenses, (health,
          education, maintenance and support). <br />
          <span style={{ textIndent: "23px", display: "block" }}>
            Principal payments as follows:
          </span>
          <ul style={{ marginLeft: "20px" }}>
            <li>One third of trust principal at death of surviving trustor</li>
            <li>
              One third of trust principal in 2 years from death of surviving
              trustor
            </li>
            <li>
              Balance of trust principal in 5 years from the death of the
              surviving trustor
            </li>
          </ul>
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="distribution"
            value="Other"
            checked={selectedOption === "Other"}
            onChange={handleOptionChange}
          />
          Other: (Please indicate the values/ethics that you would like to be a
          motivating factor for your Beneficiaries, and we will make every
          attempt to customize a method to achieve your wishes):
        </label>
      </div>
      {selectedOption === "Other" && customOption && (
        <span>: {customOption}</span>
      )}
      <form>
        {" "}
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page6;
