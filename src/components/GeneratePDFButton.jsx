import React from "react";
import { Button } from "@mui/material";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const GeneratePDFButton = ({ elementRef, disabled }) => {
  const generatePDF = async () => {
    if (!elementRef.current) {
      console.error("Element not found");
      return;
    }

    try {
      const previewWidth = elementRef.current.offsetWidth;
      const previewHeight = elementRef.current.offsetHeight;

      alert(`Width: ${previewWidth}, Height: ${previewHeight}`); // Simple alert for testing

      const pdfWidthMm = 216;
      const pdfHeightMm = 279;
      const dpi = 300; // Higher DPI for better quality
      const mmToInches = 25.4;
      const pdfWidthPx = (pdfWidthMm / mmToInches) * dpi;
      const pdfHeightPx = (pdfHeightMm / mmToInches) * dpi;

      const scaleX = pdfWidthPx / previewWidth;
      const scaleY = pdfHeightPx / previewHeight;
      const scaleFactor = Math.min(scaleX, scaleY);

      const canvas = await html2canvas(elementRef.current, {
        scale: scaleFactor,
        useCORS: true,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [pdfWidthMm, pdfHeightMm],
      });

      const imgWidth = pdfWidthMm;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const yOffset = (pdfHeightMm - imgHeight) / 2;

      pdf.addImage(imgData, "JPEG", 0, yOffset, imgWidth, imgHeight);
      pdf.save("invitation.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <Button
      fullWidth
      size="large"
      variant="contained"
      color="secondary"
      disabled={disabled}
      onClick={generatePDF}
    >
      Download Invitation as PDF
    </Button>
  );
};

export default GeneratePDFButton;
