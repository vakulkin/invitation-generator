// src/components/GeneratePDFButton.jsx

import React from 'react';
import { Button } from '@mui/material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const GeneratePDFButton = ({ elementRef }) => {
  const generatePDF = async () => {
    if (!elementRef.current) {
      console.error('Element not found');
      return;
    }

    try {
      const canvas = await html2canvas(elementRef.current, {
        scale: 3,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = 216;
      const pdfHeight = 279;
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
      });

      const yOffset = (pdfHeight - imgHeight) / 2;
      
      pdf.addImage(imgData, 'PNG', 0, yOffset, imgWidth, imgHeight);
      pdf.save('invitation.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <Button fullWidth size="large" variant="contained" color="secondary" onClick={generatePDF}>
      Download Invitation as PDF
    </Button>
  );
};

export default GeneratePDFButton;
