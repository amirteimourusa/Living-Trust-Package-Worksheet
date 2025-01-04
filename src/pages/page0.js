import React from "react";
const Page1 = () => {
  return (
    <div className="page-frame">
      <div>
        {/* Header */}
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          <span class="first-letter">T</span>HE{" "}
          <span class="first-letter">K</span>
          AYLOR <span class="first-letter">L</span>AW{" "}
          <span class="first-letter">F</span>IRM
        </h1>

        {/* Horizontal line */}
        <hr
          style={{
            borderTop: "2px solid #1964b4",
            width: "65%",
            margin: "20px auto",
          }}
        />

        {/* Subheading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "22px",
            marginBottom: "20px",
            color: "#1964b4", // Apply the blue color
            fontWeight: "bold", // Optional: Makes the text bold
            lineHeight: "1.6", // Adds more vertical spacing for readability
          }}
        >
          <span className="first-letter">E</span>STATE{" "}
          <span className="first-letter">P</span>LANNING,{" "}
          <span className="first-letter">F</span>INANCIAL &{" "}
          <span className="first-letter">W</span>EALTH <br />
          <span className="first-letter">P</span>ROFESSIONALS
        </h2>

        {/* Website */}
        <p
          style={{
            textAlign: "center",
            color: "#1964b4",
            marginBottom: "30px",
            fontSize: "20px",
          }}
        >
          www.KaylorLawGroup.com <br />
          Offices throughout California
        </p>

        {/* Horizontal line */}
        <hr
          style={{
            borderTop: "2px solid #1964b4",
            width: "50%",
            margin: "20px auto",
          }}
        />

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "60px",
            marginBottom: "100px",
            color: "#1964b4",
          }}
        >
          Living Trust Package <br />
          Worksheet
        </h2>

        {/* Confidentiality Notice */}
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: "25px",
            color: "#1964b4",
          }}
        >
          [Confidential & Attorney-Client Privilege]
        </p>

        {/* Instruction */}
        <p
          style={{
            marginBottom: "20px",
            fontSize: "20px",
            textAlign: "center",
            color: "#1964b4",
            fontWeight: "bold",
          }}
        >
          Upon completion, you may mail this document or fax it to my <br />
          private computer so that your privacy is ensured
          <br /> Fax Number: (949) 715-1145
        </p>

        {/* Mailing Address */}
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            marginBottom: "10px",
            color: "#1964b4",
            fontWeight: "bold",
          }}
        >
          If mailing, please send to:
        </p>
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            color: "#1964b4",
          }}
        >
          The Kaylor Law Firm
          <br />
          14 Monarch Bay Plaza
          <br />
          Ste 492
          <br />
          Monarch Beach, CA 92629
        </p>
      </div>
    </div>
  );
};

export default Page1;
