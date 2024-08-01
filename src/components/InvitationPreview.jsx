// src/components/InvitationPreview.jsx

import React, { forwardRef } from "react";
import { Paper, Typography, Box } from "@mui/material";

// Importing images
import background1 from "../assets/bg1_optimized.jpg";
import background2 from "../assets/bg2_optimized.jpg";

const InvitationPreview = forwardRef(({ formData }, ref) => {
  const {
    background,
    date,
    checkInTime,
    endTime,
    celebration,
    contact,
    firstName,
    lastName,
    phone,
    email,
  } = formData;

  const backgroundImages = {
    background1,
    background2,
  };

  const width = 600; // Width of the preview
  const aspectRatio = 1.414; // A4 aspect ratio (height:width)
  const height = width * aspectRatio; // Calculate height based on aspect ratio

  return (
    <Paper
      ref={ref}
      sx={{
        width: `${width}px`, // Set the width of the preview
        height: `${height}px`, // Set the height based on the A4 aspect ratio
        p: 2,
        mt: 2,
        backgroundImage: `url(${backgroundImages[background]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      elevation={3}
    >
      <Box
        sx={{
          backdropFilter: "blur(5px)",
          p: 2,
          borderRadius: 1,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <Typography variant="h4" component="div" gutterBottom>
          {celebration || "Your Event Title"}
        </Typography>
        <Typography variant="body1">
          Hosted by: {firstName} {lastName}
        </Typography>
        <Typography variant="body1">Date: {date}</Typography>
        <Typography variant="body1">
          Time: {checkInTime} - {endTime}
        </Typography>
        <Typography variant="body1">
          Contact: {contact} ({phone}, {email})
        </Typography>
      </Box>
    </Paper>
  );
});

export default InvitationPreview;
