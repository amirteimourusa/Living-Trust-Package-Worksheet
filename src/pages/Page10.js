import React from "react";
import { input14, input24, input34, labelStyle } from "../Style";

const Page10 = () => {
  return (
    <div className="page-frame">
      <h2 style={{ textAlign: "center" }}>
        The Kaylor Law Firm <br />
        Estate Planning <br />
        Financial Information Worksheet <br />
        [Confidential]
      </h2>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        Assets
      </h2>
      <h4>1. Real Property</h4>
      <p
        style={{
          textAlign: "center",
          fontSize: "17px",
          marginBottom: "10px",
          color: "#000",
          display: "flex",
          marginTop: "-30px",
          alignItems: "center",
        }}
      >
        <span style={{ marginLeft: "20px", marginRight: "165px" }}>
          Address/Description
        </span>
        <span style={{ marginLeft: "70px", marginRight: "90px" }}>
          How Title Held <br />
          (e.g. Joint Tenancy)
        </span>
        <span style={{ marginLeft: "-20px", marginRight: "0px" }}>
          Market Value
        </span>
      </p>
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
          <label style={{ ...labelStyle, marginRight: "-20px" }}>a.</label>
          <input type="text" style={input14} />
          <input type="text" style={{ ...input24, width: "170px" }} />
          <label style={{ ...labelStyle, marginRight: "-20px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>b.</label>
          <input type="text" style={input14} />
          <input type="text" style={{ ...input24, width: "170px" }} />
          <label style={{ ...labelStyle, marginRight: "-20px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>c.</label>
          <input type="text" style={input14} />
          <input type="text" style={{ ...input24, width: "170px" }} />
          <label style={{ ...labelStyle, marginRight: "-20px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>d.</label>
          <input type="text" style={input14} />
          <input type="text" style={{ ...input24, width: "170px" }} />
          <label style={{ ...labelStyle, marginRight: "-20px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <h2 style={{ textAlign: "center", fontSize: "19px" }}>
          PLEASE PROVIDE A PHOTOCOPY OF THE MOST RECENT DEED (Not Deed of Trust)
          FOR EACH PROPERTY LISTED, AND A PHOTOCOPY OF A RECENT PROPERTY TAX
          BILL FOR EACH. ALSO PROVIDE A PHOTOC
        </h2>
        <h4>2. Secured Notes (Money Owed to You)</h4>
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
          <label style={{ ...labelStyle, marginRight: "-20px" }}>a.</label>
          <input type="text" style={input14} />
          <input type="text" style={{ ...input24, width: "170px" }} />
          <label style={{ ...labelStyle, marginRight: "-20px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>b.</label>
          <input type="text" style={input14} />
          <input type="text" style={{ ...input24, width: "170px" }} />
          <label style={{ ...labelStyle, marginRight: "-20px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>c.</label>
          <input type="text" style={input14} />
          <input type="text" style={{ ...input24, width: "170px" }} />
          <label style={{ ...labelStyle, marginRight: "-20px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align inputs vertically
            gap: "25px", //Adds consistent spacing between inputs
            margin: "20px auto", // Centers the block
            marginTop: "-20px",
          }}
        >
          {/* Line with 4 input */}
          <label style={{ ...labelStyle, marginRight: "-20px" }}>d.</label>
          <input type="text" style={input14} />
          <input type="text" style={{ ...input24, width: "170px" }} />
          <label style={{ ...labelStyle, marginRight: "-20px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
        <h2 style={{ textAlign: "center", fontSize: "19px" }}>
          FOR SECURED NOTES (Money Owed to You) PROVIDE A PHOTOCOPY OF EACH NOTE
          AND THE DEED OF TRUST SECURING EACH NOTE.
        </h2>
        <h4>
          3. Please summarize the total value of the following: (Exact amounts
          not required. Estimates are just fine.)
        </h4>
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
              marginRight: "210px",
              fontWeight: "normal",
            }}
          >
            a. Limited Partnership(s)
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
              marginRight: "168px",
              fontWeight: "normal",
            }}
          >
            b. Stocks, Bonds and Securities
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
            style={{ ...labelStyle, marginRight: "68px", fontWeight: "normal" }}
          >
            c. Cash accounts (C.D.'s, Savings & Checking)
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
              marginRight: "241px",
              fontWeight: "normal",
            }}
          >
            d. Annuity Products
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
              marginRight: "173px",
              fontWeight: "normal",
            }}
          >
            e. Other Financial Instruments
          </label>
          <label style={{ ...labelStyle, marginRight: "-190px" }}>$</label>
          <input type="text" style={{ ...input34, width: "120px" }} />
        </div>
      </form>
    </div>
  );
};

export default Page10;
