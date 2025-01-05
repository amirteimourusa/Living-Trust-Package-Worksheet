import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PDFExportButton = () => {
  const handleExport = async () => {
    const pages = document.querySelectorAll(".page-frame"); // Match your page class
    const pdf = new jsPDF("p", "pt", "letter"); // Letter size: 8.5 x 11 inches

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: 2, // Higher resolution
        useCORS: true, // Allow cross-origin images
        backgroundColor: "#ffffff", // Set background color to white
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.8); // JPEG for smaller size
      const imgWidth = 612; // Letter width in points
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      const xOffset = (612 - imgWidth) / 2; // Horizontal centering
      const yOffset = (792 - imgHeight) / 2; // Vertical centering (if needed)

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "JPEG", xOffset, yOffset, imgWidth, imgHeight);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      if (i > 0) {
        pdf.text(`Page ${i + 1} of ${pages.length}`, 306, 752, {
          align: "center",
        });
        pdf.text("THE KAYLOR LAW FIRM", 306, 762, { align: "center" });
        pdf.text("(949) 715-1144", 306, 772, { align: "center" });
      }
    }

    pdf.save("Living-Trust-Package-Worksheet.pdf");
  };

  return (
    <button
      onClick={handleExport}
      style={{
        display: "block",
        margin: "20px auto",
        padding: "10px 20px",
        backgroundColor: "#ff0000",
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
