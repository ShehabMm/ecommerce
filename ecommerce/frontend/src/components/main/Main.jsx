import { Box, Container, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { check } from "../../Redux/counterSlice";
import { all } from "../../Redux/counterSlice";
import { woall } from "../../Redux/counterSlice";

import "./main.css";
import Scrollup from "./scrollup";
const Main = () => {


  
  const [alignment, setAlignment] = useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


const {filterUser} = useSelector((state)=>state.counterSlice)
console.log(filterUser)


const dispatch = useDispatch()

  return (
    <Container
      id="up"
      sx={{
        position: "relative",
        height: "20vh",
        mt: 4,
        display: "flex",
        gap: 5,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h6" color="initial">
          Selected Products
        </Typography>
        <Typography variant="body1" color="initial">
          All our new arrivals in an exclusive brand selection
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 5,
          width: { xs: "100%", md: "40%" },
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton onClick={()=>dispatch(all())}  sx={{ ml: 2, mr: 2 }} value="web">
            All Products
          </ToggleButton>
          <ToggleButton  onClick={()=>dispatch(check())}    sx={{ ml: 2, mr: 2 }} value="android">
            Men category
          </ToggleButton>
          <ToggleButton  onClick={()=>dispatch(woall())}  value="ios">Women category</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ height: "100vh" }}> </Box>
      <Scrollup />
    </Container>
  );
};

export default Main;
