import React, { useState } from "react";
import {
  containerStyle,
  sectionStyle,
  nameSectionStyle,
  labelStyle,
  inputContainerStyle,
  dobContainerStyle,
  textInputStyle,
} from "../Style";
const Page7 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      alert(`You selected: ${selectedOption}`);
    } else {
      alert("Please select an option.");
    }
  };
  return (
    <div className="page-frame">
      <p
        style={{
          textAlign: "center",
          color: "black", // Fixed incorrect color value
          marginBottom: "20px",
          fontSize: "25px",
          textDecoration: "underline", // Add underline
        }}
      >
        <strong>AGENT(S) FOR YOUR HEALTH CARE DECISIONS</strong>
      </p>
      <p
        style={{
          textAlign: "left",
          color: "black", // Fixed incorrect color value
          marginBottom: "10px",
          fontSize: "17px",
          textIndent: "40px", // Indent the first sentence
        }}
      >
        Please list the persons (agents) you want to make your health care
        decisions in the event you are unable to do so. If Married we will
        assume your Spouse will act as your Primary Agent—if this is not the
        case please indicate whom you would like to act as your Primary Agent at
        line #1, then your Successor Agent at line #2. (Note: You may select the
        same people to act as agents that you have selected to manage your
        estate, etc.)
      </p>
      <form>
        <div style={containerStyle}>
          {/* Spouse's Name:*/}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>1 . Name:</label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Phone Number:</label>
            <div style={dobContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Address:</label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Relationship:</label>
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
            <div style={dobContainerStyle}></div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Spouse's Name:*/}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>2 . Name:</label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Phone Number:</label>
            <div style={dobContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Address:</label>
            <div style={inputContainerStyle}>
              <input type="text" style={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Relationship:</label>
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
            <div style={dobContainerStyle}></div>
          </div>
        </div>
      </form>
      <div>
        <p
          style={{
            textAlign: "center",
            color: "black", // Fixed incorrect color value
            marginBottom: "20px",
            marginTop: "40px",
            fontSize: "18px",
            textDecoration: "underline", // Add underline
          }}
        >
          <strong>
            Please select the level of life sustaining care that you desire
            (SELECT ONLY ONE).
          </strong>
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="radio"
              name="lifeSustainingCare"
              value="1"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            1. I do not want efforts made to prolong my life and I do not want
            life-sustaining treatment to be provided
            <br />
            or continued:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                A. If I am in an irreversible coma or persistent vegetative
                state; or
              </li>
              <li>
                B. If I am terminally ill and the application of life-sustaining
                procedures would serve only to artificially delay the moment of
                my death; or
              </li>
              <li>
                C. Under any other circumstances where the burden of the
                treatment outweigh the expected benefits.
              </li>
            </ul>
            I want my agent to consider the relief of suffering and the quality
            as well as the extent of the possible extension of my life in making
            decisions concerning lifesustaining treatment.
          </label>
          <br />
          <br />
          <label>
            <input
              type="radio"
              name="lifeSustainingCare"
              value="2"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            2. I want efforts made to prolong my life and I want life-sustaining
            treatment to be provided unless I am in a coma or persistent
            vegetative state, which my doctor reasonably believes to be
            irreversible. Once my doctor has concluded that I will remain
            unconscious for the rest of my life, I do not want life-sustaining
            treatment to be provided or continued.
          </label>
          <br />
          <br />
          <label>
            <input
              type="radio"
              name="lifeSustainingCare"
              value="3"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            3. I want efforts made to prolong my life and I want life-sustaining
            treatment to be provided even if I am in an irreversible coma or
            persistent vegetative state.
          </label>
        </form>
      </div>
    </div>
  );
};

export default Page7;
