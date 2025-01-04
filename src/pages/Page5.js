import React from "react";
import {
  containerStyle,
  sectionStyle,
  nameSectionStyle,
  labelStyle,
  inputContainerStyle,
  dobContainerStyle,
  textInputStyle,
} from "../Style";
import { useState } from "react";
const Page5 = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
  });

  const handleChange = (event, questionKey) => {
    setAnswers((prev) => ({
      ...prev,
      [questionKey]: event.target.value,
    }));
  };
  return (
    <div className="page-frame">
      <p
        style={{
          textAlign: "center",
          color: "black", // Fixed incorrect color value
          marginBottom: "-20px",
          fontSize: "20px",
          textDecoration: "underline", // Add underline
        }}
      >
        <strong>Names & Addresses of Proposed Beneficiaries</strong>
      </p>
      <p
        style={{
          textAlign: "center",
          color: "black", // Fixed incorrect color value
          marginBottom: "20px",
          fontSize: "20px",
        }}
      >
        (Please indicate percentage to be inherited for each beneficiary):{" "}
        <br /> Per Stirpees
      </p>

      <form>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>A.</label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>B.</label>
            <div style={dobContainerStyle}>
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

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <div style={dobContainerStyle}>
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

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <div style={dobContainerStyle}>
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

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <div style={dobContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>C.</label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>D.</label>
            <div style={dobContainerStyle}>
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

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <div style={dobContainerStyle}>
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

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <div style={dobContainerStyle}>
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

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <div style={dobContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={{ fontSize: "15px" }}>
          <p>
            Do you wish that your assets be distributed equally among your
            children?
          </p>
          <label style={{ marginRight: "15px" }}>
            <input
              type="radio"
              name="question1"
              value="Yes"
              checked={answers.question1 === "Yes"}
              onChange={(e) => handleChange(e, "question1")}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="No"
              checked={answers.question1 === "No"}
              onChange={(e) => handleChange(e, "question1")}
            />
            No
          </label>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={{ fontSize: "15px" }}>
              If not equally, then in what percentages?
            </label>
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
        <div style={{ fontSize: "15px" }}>
          <p>
            If one child predeceases you, do you wish that child's share to go
            to the surviving grandchildren, if any?
          </p>
          <label style={{ marginRight: "15px" }}>
            <input
              type="radio"
              name="question2"
              value="Yes"
              checked={answers.question2 === "Yes"}
              onChange={(e) => handleChange(e, "question2")}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="No"
              checked={answers.question2 === "No"}
              onChange={(e) => handleChange(e, "question2")}
            />
            No
          </label>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={{ fontSize: "15px" }}>If no, explain:</label>
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
            <label style={{ fontSize: "15px" }}>
              Any Special Instructions regarding particular Gifts to be
              inherited by particular Beneficiaries:
            </label>
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

export default Page5;
