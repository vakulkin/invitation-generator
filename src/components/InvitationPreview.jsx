// src/components/InvitationPreview.jsx

import React, { forwardRef } from "react";
import { Paper, Typography, Box } from "@mui/material";
import dayjs from "dayjs";

import background1 from "../assets/invitation-pattern-1.jpg";
import background2 from "../assets/invitation-pattern-2.jpg";
import background3 from "../assets/invitation-pattern-3.jpg";

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

  const width = 600;
  const aspectRatio = 1.294;
  const height = width * aspectRatio;

  return (
    <Paper
      ref={ref}
      sx={{
        position: "relative",
        maxwidth: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${backgroundImages[background]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      elevation={3}
    >
      <Box
        sx={{
          position: "absolute",
          top: 420,
          left: 130,
          width: 360,
          height: 260,
          // backgroundColor: "rgba(0, 0, 0, 0.6)",
          overflow: "hidden",
        }}
      >
        <Typography variant="body1" noWrap>
          Please join us on {date ? dayjs(date).format("MM/DD/YYYY") : "MM/DD/YYYY"} for
        </Typography>
        <Typography variant="body1" noWrap>
          {celebration || "Your Event Title"}
        </Typography>
        <Typography variant="body1" noWrap>
          Check In Time:{" "}
          {checkInTime ? dayjs(checkInTime).format("hh:mm A") : "xx:xx"}
        </Typography>
        <Typography variant="body1" noWrap>
          Party End Time: {endTime ? dayjs(endTime).format("hh:mm A") : "xx:xx"}
        </Typography>
        <Typography variant="body1" noWrap>
          Kanawha City
        </Typography>
        <Typography variant="body1" noWrap>
          419 58th St SE, Charlston, WV 25304
        </Typography>
        <Typography variant="body1" noWrap>
          Please RSVP by contacting:
        </Typography>
        <Typography variant="body1" noWrap>
          {firstName || "Name"} {lastName || "Surname"} at
        </Typography>
        <Typography variant="body1" noWrap>
          {phone || "0000000000"}
        </Typography>
        <Typography variant="body1" noWrap>
          {email || "your@email.com"}
        </Typography>
      </Box>
    </Paper>
  );
});

export default InvitationPreview;
