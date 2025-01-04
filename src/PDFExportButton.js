import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PDFExportButton = () => {
  const handleExport = async () => {
    // const userName = prompt("Please enter your name for the document:");
    // if (!userName) {
    //   alert("You must provide a name to save the document.");
    //   return;
    // }
    const pages = document.querySelectorAll(".page-frame");
    const pdf = new jsPDF("p", "pt", "letter");

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: 3, // Higher quality
        useCORS: true,
        backgroundColor: "#white", // White background
      });

      const imgData = canvas.toDataURL("image/png");

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, 612, 792);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);

      // Footer
      pdf.text(`Page ${i + 1}`, 306, 752, { align: "center" });
      pdf.text("THE KAYLOR LAW FIRM", 306, 762, { align: "center" });
      pdf.text("(949) 715-1144", 306, 772, { align: "center" });
    }

    //pdf.save(`${userName} Living Trust Package Worksheet.pdf`);
    pdf.save("Living Trust.pdf");
  };

  return (
    <button
      onClick={handleExport}
      style={{
        display: "block",
        margin: "20px auto",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Save as PDF
    </button>
  );
};

export default PDFExportButton;
