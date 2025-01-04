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
const Page4 = () => {
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
        <strong>MANAGEMENT OF YOUR ESTATE</strong>
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
        The person who manages your estate assets under a trust is called a
        trustee. The person who manages your estate assets under a will is
        called an executor. In order to provide for an orderly administration of
        your estate it is recommended that you appoint the same person or
        persons to act as trustee(s) and executor(s).
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
        Please be reminded that the trustee/executor can be an Attorney, Bank or
        Trust Company. When making this important decision it is often helpful
        to ensure that your successor trustees/executors have knowledge in areas
        of business or finance—but it is not required, your choice can always
        seek advice from professionals in those areas.
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
        List the persons you want to manage your estate. (Note: Because it is
        not always possible to confer, make decisions, or to be in the same
        location to sign documents, it is recommended that you give these
        individuals the power to act independently. At least two successors are
        recommended).
      </p>
      <p
        style={{
          textAlign: "left",
          color: "black", // Fixed incorrect color value
          marginBottom: "40px",
          fontSize: "17px",
          textIndent: "40px", // Indent the first sentence
        }}
      >
        If you are married it usually assumed that each spouse will serve as
        Trustee for the other spouse—if this is not applicable for your
        situation, please indicate this request.
      </p>
      <p
        style={{
          textAlign: "left",
          color: "black", // Fixed incorrect color value
          marginBottom: "25px",
          fontSize: "19px",
        }}
      >
        <strong>
          Proposed Successor Trustees/Executors for Financial Affairs:
        </strong>
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
        <div style={containerStyle}>
          {/* Spouse's Name:*/}
          <div style={nameSectionStyle}>
            <label style={labelStyle}>3 . Name:</label>
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
            <label style={labelStyle}>4 . Name:</label>
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
    </div>
  );
};

export default Page4;
