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
import DynamicInput from "../DynamicInput";

const Page1 = () => {
  return (
    <div className="page-frame">
      <h1>
        <span class="first-letter">T</span>HE{" "}
        <span class="first-letter">K</span>
        AYLOR <span class="first-letter">L</span>AW{" "}
        <span class="first-letter">F</span>IRM
      </h1>

      <h3>
        <span class="first-letter">L</span>IVING{" "}
        <span class="first-letter">T</span>RUST{" "}
        <span class="first-letter">P</span>ACKAGE <br></br>
        <span class="first-letter">I</span>NFORMATION{" "}
        <span class="first-letter">W</span>ORKSHEET
      </h3>
      <div class="centered" style={{ marginBottom: "40px", marginTop: "30px" }}>
        <h3 class="underlined">Personal Data</h3>
      </div>

      {/*Form Sttart here */}
      <form>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Name:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Date of Birth:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Spouse's Name:*/}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Spouse's Name:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Date of Birth:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>

        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Home Address:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Email:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <div style={dobContainerStyle}></div>
          </div>
        </div>

        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Home Phone:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Cell Phone:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Present/Past Occupation:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Spouse's:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>

        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Employer's Name and Address:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Spouse's:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>

        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Business Phone:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Spouse's:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>

        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Social Security #:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Spouse's:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>

        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Citizenship:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Spouse's:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>

        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Date and Place of Marriage:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Spouse's:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>

        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>Prior Marriages:</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <label style={labelStyle}>Spouse's:</label>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          {/* Name Section */}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>How Ended?</label>
            <div style={inputContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>

          {/* Date of Birth Section */}
          <div style={sectionStyle}>
            <div style={dobContainerStyle}>
              <DynamicInput inputStyle={textInputStyle} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page1;
