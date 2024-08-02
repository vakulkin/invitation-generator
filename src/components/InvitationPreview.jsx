// src/components/InvitationPreview.jsx

import React, { forwardRef, useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import "@fontsource/bebas-neue";

import background1 from "../assets/invitation-pattern-1.jpg";
import background2 from "../assets/invitation-pattern-2.jpg";
import background3 from "../assets/invitation-pattern-3.jpg";

// Base dimensions for U.S. Letter in pixels at 96 DPI
const LETTER_WIDTH_PX = 816; // 8.5 inches * 96 DPI
const LETTER_HEIGHT_PX = 1056; // 11 inches * 96 DPI
const BASE_FONT_SIZE_PX = 22;

const InvitationPreview = forwardRef(({ formData }, ref) => {
  const {
    background,
    date,
    checkInTime,
    endTime,
    celebration,
    place,
    firstName,
    lastName,
    phone,
    email,
  } = formData;

  const backgroundImages = {
    background1,
    background2,
    background3,
  };

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        const height = width * (LETTER_HEIGHT_PX / LETTER_WIDTH_PX);
        setDimensions({ width, height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [ref]);

  const fontSize = (BASE_FONT_SIZE_PX / LETTER_WIDTH_PX) * dimensions.width;

  const proportionalMargin = fontSize * 0.1;
  const proportionalMarginSmall = proportionalMargin * 0.5;
  const proportionalMarginLarge = proportionalMargin * 1.5;

  const baseTheme = useTheme();
  const previewTheme = createTheme(baseTheme, {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            lineHeight: 1,
            fontFamily: "Bebas Neue, sans-serif",
            color: baseTheme.palette.primary.main,
          },
          h1: {
            fontSize: fontSize * 2.2,
          },
          h2: {
            fontSize: fontSize * 1.2,
          },
          body1: {
            fontSize: fontSize,
          },
          body2: {
            fontSize: fontSize * 0.8,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={previewTheme}>
      <Paper
        ref={ref}
        sx={{
          position: "relative",
          width: "100%",
          height: dimensions.height,
          backgroundImage: `url(${backgroundImages[background]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: '"Bebas Neue", sans-serif',
        }}
        elevation={3}
      >
        <Box
          sx={{
            position: "absolute",
            top: "52%",
            left: "19%",
            width: "57%",
            height: "34%",
            overflow: "hidden",
          }}
        >
          <Typography variant="body1" noWrap sx={{ mb: proportionalMarginLarge }}>
            Please join us on{" "}
            {date ? dayjs(date).format("MM/DD/YYYY") : "mm/dd/yy"} for
          </Typography>
          <Typography
            variant="h1"
            color="secondary"
            noWrap
            sx={{ mb: proportionalMarginLarge  }}
          >
            {celebration || "Your Event Title"}
          </Typography>
          <Typography variant="body1" noWrap sx={{ mb: proportionalMarginLarge }}>
            Time: {checkInTime ? dayjs(checkInTime).format("hh:mm A") : "xx:xx"}{" "}
            - {endTime ? dayjs(endTime).format("hh:mm A") : "xx:xx"}
          </Typography>
          <Typography
            variant="h2"
            color="secondary"
            noWrap
          >
            {place.name || "Select place"}
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            noWrap
            sx={{ mb: proportionalMarginLarge }}
          >
            {place.desc || "Where you are celebrating"}
          </Typography>
          <Typography variant="body1" noWrap sx={{ mb: proportionalMargin }}>
            Please RSVP by contacting:
          </Typography>
          <Typography variant="body2" noWrap sx={{ mb: proportionalMarginSmall }}>
            {firstName || "Name"} {lastName || "Surname"} at
          </Typography>
          <Typography variant="body2" noWrap sx={{ mb: proportionalMarginSmall }}>
            Phone: {phone || "0000000000"}
          </Typography>
          <Typography variant="body2" noWrap sx={{ mb: proportionalMarginSmall }}>
            Email: {email || "your@email.com"}
          </Typography>
        </Box>
      </Paper>
    </ThemeProvider>
  );
});

export default InvitationPreview;
