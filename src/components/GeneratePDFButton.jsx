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
      // Get the size of the HTML preview
      const previewWidth = elementRef.current.offsetWidth;
      const previewHeight = elementRef.current.offsetHeight;

      // Desired PDF size in mm (Letter size)
      const pdfWidthMm = 216;
      const pdfHeightMm = 279;

      // High DPI setting (e.g., 300 DPI)
      const dpi = 300; // Choose a DPI setting appropriate for print quality
      const mmToInches = 25.4; // Conversion factor from mm to inches
      const pdfWidthPx = (pdfWidthMm / mmToInches) * dpi;
      const pdfHeightPx = (pdfHeightMm / mmToInches) * dpi;

      // Calculate the scale factor for the canvas
      const scaleX = pdfWidthPx / previewWidth;
      const scaleY = pdfHeightPx / previewHeight;
      const scaleFactor = Math.min(scaleX, scaleY);

      // Render the HTML element to canvas with scaling
      const canvas = await html2canvas(elementRef.current, {
        scale: scaleFactor,
        useCORS: true,
        backgroundColor: null,
      });

      // Convert canvas to image data as JPEG with 1.0 quality
      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [pdfWidthMm, pdfHeightMm],
      });

      // Calculate image size in PDF based on scaled canvas
      const imgWidth = pdfWidthMm;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Center the image vertically on the PDF
      const yOffset = (pdfHeightMm - imgHeight) / 2;

      // Add image to PDF
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
      // disabled={disabled}
      onClick={generatePDF}
    >
      Download Invitation as PDF
    </Button>
  );
};

export default GeneratePDFButton;
