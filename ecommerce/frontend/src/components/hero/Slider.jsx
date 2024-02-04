import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./stylesss.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Box, Button, Container, Stack } from "@mui/material";
import { Typography } from "@mui/material";

const Slider = () => {
const details = [{text:"MEN",  link:"https://res.cloudinary.com/dvytkrzaq/image/upload/v1706334825/banner-15_wz3hzx.jpg"}, {text:"WOMEN", link:""}]

  const [hidd, setHidd]=useState(true)
  return (
    <Container sx={{ minWidth: "500px", height: "500px", mt: 5 }}>
      <Swiper
      loop= {true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[ Pagination]}
        className="mySwiper"
      >

{details.map((item)=>{

return (               


  <SwiperSlide key={item.text}>


  <img
    style={{ position: "relative" }}
    src={item.link}
    alt=""
  />

  <Box
    sx={{
      position: "absolute",
      textAlign: {xs:"center", md:"left"},
      left: 100,
      lineHeight: "20px",
    }}
  >
    <Typography variant="h6" color="initial">
      LIFE STYLE COLLECTION
    </Typography>

    <Typography
      variant="h2"
      color="initial"
      sx={{ fontWeight: "bold" }}
    >
    {item.text}
    </Typography>

    <Stack direction="row" sx={{ gap: 1 }}>
      <Typography variant="h4" color="initial">
        SALE UP TO{" "}
      </Typography>

      <Typography variant="h4" color="error">
        30% OFF
      </Typography>
    </Stack>
    <Typography variant="body1" color="initial">
      Get Free Shipping On orders over 99.00$
    </Typography>
    <Button
      sx={{
        px: 5,
        py: 1,
        mt: 2,
        backgroundColor: "#222",
        boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
        color: "#fff",
        borderRadius: "1px",
        "&:hover": {
          bgcolor: "#151515",
          boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
        },
      }}
      variant="contained"
    >
      SHOP NOW
    </Button>
  </Box>
</SwiperSlide>


)



})}


      </Swiper>
    </Container>
  );
};

export default Slider;
