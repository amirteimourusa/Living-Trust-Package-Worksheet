import React from "react";
import { input14, input24, input34, labelStyle } from "../Style";

const Page11 = () => {
  return (
    <div className="page-frame">
      <h4>
        Are these assets owned jointly, separately or a combination of both?
      </h4>
      <div
        style={{
          display: "flex",
          alignItems: "center", // Align inputs vertically
          gap: "25px", //Adds consistent spacing between inputs
          margin: "20px auto", // Centers the block
          marginTop: "-20px",
        }}
      >
        <input type="text" style={input14} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center", // Align inputs vertically
          gap: "200px", //Adds consistent spacing between inputs
          margin: "20px auto", // Centers the block
          marginTop: "0px",
        }}
      >
        {/* Line with 4 input */}
        <label
          style={{
            ...labelStyle,
            marginRight: "0px",
            fontWeight: "normal",
          }}
        >
          4. Current Cash Value of Retirement Plan(s)-(not income)
        </label>
        <label style={{ ...labelStyle, marginRight: "-190px" }}>$</label>
        <input type="text" style={{ ...input34, width: "120px" }} />
      </div>

      <form>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-10px",
          }}
        >
          {/* Line with 4 input */}
          <label
            style={{
              ...labelStyle,
              marginRight: "-160px",
              fontWeight: "normal",
            }}
          >
            5. If You Are Self-Employed, Indicate Type of Business and Value:
            <br /> <br />
            (Sole Proprietor, Partnership, Corporation)
          </label>

          <input
            type="text"
            style={{
              ...input24,
              width: "170px",
              marginRight: "80px",
              marginTop: "20px",
            }}
          />
          <label
            style={{ ...labelStyle, marginRight: "-13px", marginTop: "20px" }}
          >
            $
          </label>
          <input
            type="text"
            style={{ ...input34, width: "120px", marginTop: "20px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-10px",
          }}
        >
          {/* Line with 4 input */}
          <label
            style={{
              ...labelStyle,
              marginRight: "-20px",
              fontWeight: "normal",
            }}
          >
            6. For Life Insurance, list policy information and Death Benefit
            value:
          </label>
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "17px",
            marginBottom: "10px",
            color: "#000",
            display: "flex",
            marginTop: "0px",
            alignItems: "center",
          }}
        >
          <span style={{ marginLeft: "40px", marginRight: "25px" }}>
            Ins. Company
          </span>
          <span style={{ marginLeft: "60px", marginRight: "90px" }}>
            Policy Owner
          </span>
          <span>Beneficiary</span>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "left", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "0px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>a.</label>
          <input type="text" style={{ ...input24, width: "150px" }} />
          <input type="text" style={{ ...input24, width: "150px" }} />
          <input
            type="text"
            style={{ ...input24, width: "150px", marginRight: "0px" }}
          />
          <label
            style={{ ...labelStyle, marginRight: "-20px", marginLeft: "27px" }}
          >
            $
          </label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "left", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>b.</label>
          <input type="text" style={{ ...input24, width: "150px" }} />
          <input type="text" style={{ ...input24, width: "150px" }} />
          <input
            type="text"
            style={{ ...input24, width: "150px", marginRight: "0px" }}
          />
          <label
            style={{ ...labelStyle, marginRight: "-20px", marginLeft: "27px" }}
          >
            $
          </label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "left", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>c.</label>
          <input type="text" style={{ ...input24, width: "150px" }} />
          <input type="text" style={{ ...input24, width: "150px" }} />
          <input
            type="text"
            style={{ ...input24, width: "150px", marginRight: "0px" }}
          />
          <label
            style={{ ...labelStyle, marginRight: "-20px", marginLeft: "27px" }}
          >
            $
          </label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "left", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>d.</label>
          <input type="text" style={{ ...input24, width: "150px" }} />
          <input type="text" style={{ ...input24, width: "150px" }} />
          <input
            type="text"
            style={{ ...input24, width: "150px", marginRight: "0px" }}
          />
          <label
            style={{ ...labelStyle, marginRight: "-20px", marginLeft: "27px" }}
          >
            $
          </label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "200px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "0px",
          }}
        >
          {/* Line with 4 input */}
          <label
            style={{
              ...labelStyle,
              marginRight: "45px",
              fontWeight: "normal",
              marginTop: "10px",
            }}
          >
            7. Estimate the Value of Your Personal Effects
            <br /> (Jewelry, Furnishings, Motor Vehicles, Boats, etc.)
          </label>
          <label style={{ ...labelStyle, marginRight: "-190px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "200px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label
            style={{
              ...labelStyle,
              marginRight: "50px",
              fontWeight: "normal",
              marginTop: "20px",
            }}
          >
            8. Gross Estate (Total of All Values Numbers 1-7)
          </label>
          <label style={{ ...labelStyle, marginRight: "-190px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "200px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label
            style={{
              ...labelStyle,
              marginRight: "180px",
              fontWeight: "normal",
              marginTop: "20px",
            }}
          >
            9. Total Debts and Liabilities
          </label>
          <label style={{ ...labelStyle, marginRight: "-190px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "200px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label
            style={{
              ...labelStyle,
              marginRight: "76px",
              fontWeight: "normal",
              marginTop: "20px",
            }}
          >
            10. Net Taxable Estate (Line 8 Minus Line 9)
          </label>
          <label style={{ ...labelStyle, marginRight: "-190px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <h4>
          I agree to allow representatives of the Estate Planning Team and it's
          affiliates to review my <br />
          information.
        </h4>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "0px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-10px",
          }}
        >
          {/* Line with 4 input */}
          <label
            style={{
              ...labelStyle,
              marginRight: "-600px",
              marginBottom: "20px",
            }}
          >
            To the best of my knowledge, all of the information included in this
            trust questionnaire is true and correct, <br />
            as of this date:
          </label>
          <input type="text" style={{ ...input24, width: "150px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "50px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>
            Signed: X
          </label>
          <input type="text" style={{ ...input34, width: "200px" }} />

          <label style={{ ...labelStyle, marginRight: "-20px" }}>X</label>
          <input type="text" style={{ ...input34, width: "200px" }} />
        </div>
      </form>
    </div>
  );
};

export default Page11;
