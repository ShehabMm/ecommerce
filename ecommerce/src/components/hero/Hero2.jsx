import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Typography, IconButton } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import HeatPumpIcon from "@mui/icons-material/HeatPump";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import PaymentIcon from "@mui/icons-material/Payment";

const Hero2 = () => {
  const details = [
    {
      firtsText: "Fast delivery",
      secondText: "Start from 10$",
      icon: <BoltIcon />,
    },
    {
      firtsText: "Money Guarantee",
      secondText: "7 Days Back",
      icon: <HeatPumpIcon />,
    },
    {
      firtsText: "365 Days",
      secondText: "For Free Return",
      icon: <PunchClockIcon />,
    },
    {
      firtsText: "Payment",
      secondText: "Secure System",
      icon: <PaymentIcon />,
    },
  ];

  return (
    <Container sx={{ width: "100%", mt: 5,  }}>
      <Stack direction={"row"} sx={{gap:3, width: "100%",  display: "flex", flexWrap: "Wrap", justifyContent:"center", alignItems:"center" }}>
        {details.map((item) => {
          return (
            <Box
              key={item.firtsText}
              sx={{
                display: "flex",
                alignItems: "center",
                border: "2px solid Black",
                bgcolor: "#777",
                height: "60px",
                flexWrap: "wrap",
                width:"250px",
                textAlign:"left"

              }}
            >
              <IconButton aria-label="iconButtom">{item.icon}</IconButton>
              <Stack padding={1}>
                <Typography variant="body1" color="white">
                  {item.firtsText}
                </Typography>
                <Typography variant="body1" color="initial">
                  {item.secondText}
                </Typography>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
};

export default Hero2;
