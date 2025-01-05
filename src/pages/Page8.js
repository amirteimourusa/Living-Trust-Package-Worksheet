import React from "react";
import {
  containerStyle,
  dobContainerStyle,
  input24P8,
  input44P8,
  inputContainerStyle,
  labelStyle,
  nameSectionStyle,
  page8Div,
  sectionStyle,
  textInputStyle,
} from "../Style";

const Page8 = () => {
  return (
    <div className="page-frame">
      <p
        style={{
          textAlign: "center",
          color: "black", // Fixed incorrect color value
          marginBottom: "20px",
          fontSize: "20px",
          textDecoration: "underline", // Add underline
        }}
      >
        <strong>Individuals to Be Contacted Upon Incapacity or Death</strong>
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          marginBottom: "10px",
          color: "#000",
          display: "flex",

          alignItems: "center",
        }}
      >
        <span style={{ marginLeft: "230px" }}>Name</span>
        <span style={{ marginLeft: "205px" }}>Phone Number</span>
      </p>
      <form>
        <div style={page8Div}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Religious Representative:
            </label>
            <div style={inputContainerStyle}></div>
          </div>
          <input type="text" style={input24P8} />
          <input type="text" style={input44P8} />
        </div>
        <div style={page8Div}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Funeral Director:
            </label>
            <div style={inputContainerStyle}></div>
          </div>
          <input type="text" style={input24P8} />
          <input type="text" style={input44P8} />
        </div>
        <div style={page8Div}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Trustee of Living Trust:
            </label>
            <div style={inputContainerStyle}></div>
          </div>
          <input type="text" style={input24P8} />
          <input type="text" style={input44P8} />
        </div>
        <div style={page8Div}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Executor of Will:
            </label>
            <div style={inputContainerStyle}></div>
          </div>
          <input type="text" style={input24P8} />
          <input type="text" style={input44P8} />
        </div>
        <div style={page8Div}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Health Care Agent:
            </label>
            <div style={inputContainerStyle}></div>
          </div>
          <input type="text" style={input24P8} />
          <input type="text" style={input44P8} />
        </div>
        <div style={page8Div}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Asset Power Agent:
            </label>
            <div style={inputContainerStyle}></div>
          </div>
          <input type="text" style={input24P8} />
          <input type="text" style={input44P8} />
        </div>
        <div style={page8Div}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Attorney:
            </label>
            <div style={inputContainerStyle}></div>
          </div>
          <input type="text" style={input24P8} />
          <input type="text" style={input44P8} />
        </div>
        <div style={page8Div}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Financial Advisor:
            </label>
            <div style={inputContainerStyle}></div>
          </div>
          <input type="text" style={input24P8} />
          <input type="text" style={input44P8} />
        </div>
        <div style={page8Div}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Accountant:
            </label>
            <div style={inputContainerStyle}></div>
          </div>
          <input type="text" style={input24P8} />
          <input type="text" style={input44P8} />
        </div>
        <div style={page8Div}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Insurance Agent(s):
            </label>
            <div style={inputContainerStyle}></div>
          </div>
          <input type="text" style={input24P8} />
          <input type="text" style={input44P8} />
        </div>
        <p
          style={{
            textAlign: "center",
            color: "black", // Fixed incorrect color value
            marginBottom: "20px",
            fontSize: "20px",
            textDecoration: "underline", // Add underline
          }}
        >
          <strong>Location of Important Papers</strong>
        </p>
        <div style={containerStyle}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Safe Deposit Box #:
            </label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
          <div style={sectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Location:
            </label>
            <div style={dobContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Persons Authorized to Enter:
            </label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Contents:
            </label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Safe Deposit Box #:
            </label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
          <div style={sectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Location:
            </label>
            <div style={dobContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Persons Authorized to Enter:
            </label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Contents:
            </label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Safe Deposit Box #:
            </label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
          <div style={sectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Location:
            </label>
            <div style={dobContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Persons Authorized to Enter:
            </label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={nameSectionStyle}>
            <label style={{ ...labelStyle, fontWeight: "normal" }}>
              Contents:
            </label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page8;
