import { ArrowForward } from "@mui/icons-material";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Slider from "./Slider";

const Hero = () => {
  return (
    <Container
      sx={{  position:"relative",width:"100%",  display: "flex", alignItems: "center", height: "500px", }}
    >
<Slider/>

      <Box  sx={{display:{xs:"none", md:"flex"},flexDirection:"column",justifyContent:"center",  height:"100%", alignItems:"center",  transform:"translateY(8%)", top:"50%"}} >
        <Box sx={{ position: "relative", height: "180px", minWidth: "140px" }}>
          <img
            src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312063/cld-sample-5.jpg"
            alt="shoes picture"
            style={{ width: "240px" , height: "180px"}}
          />

          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              display: "flex",
              transform: "translateY(-50%)",
              left:30
            }}
          >
            <Typography
              variant="caption"
              color="initial"
              sx={{ color: "#283445", fontSize: "18px" }}
            >
              New Arrival
            </Typography>
            <Typography variant="h6" sx={{ color: "#283445" }}>
              Summer{" "}
            </Typography>
            <Typography variant="h6" sx={{ color: "#283445" }}>
              SALE 20% OFF{" "}
            </Typography>

            <Link
              sx={{
                color: "#283445",
                display: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": { color: "#D23F57", cursor: "pointer" },
              }}
            >
              shop now
              <ArrowForward sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>

        <Box
          sx={{ width: "240px", height: "180px", mt: 2, position: "relative" }}
        >
          <img
            src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1706307139/How-to-Choose-a-Laptop-August-2023-Gear_zpuuhc.jpg"
            alt="computer picture"
            style={{ width: "240px",  }}
          />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              display: "flex",
              transform: "translateY(-50%)",
              left:30
            }}
          >
            <Typography
              variant="caption"
              color="initial"
              sx={{ color: "white", fontSize: "18px" }}
            >
Gaming 4K
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              Desktops & Laptops
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              SALE 10% OFF
            </Typography>

            <Link
              sx={{
                color: "#283445",
                display: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": { color: "#D23F57", cursor: "pointer" },
              }}
            >
              shop now
              <ArrowForward sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
