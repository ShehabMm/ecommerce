import { Box, Container } from "@mui/material";

const Hero = () => {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center" }}>
      <Box>Slider</Box>

      <Box>
        <Box>
          <img src="../assets/banner-17.jpg" alt="shoes picture" />
        </Box>
        <Box>
          
          <img src="../assets/banner-16.jpg" alt="computer picture" />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
