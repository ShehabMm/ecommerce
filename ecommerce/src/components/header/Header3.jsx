import { Container, Stack, useTheme, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ElectricBikeOutlinedIcon from '@mui/icons-material/ElectricBikeOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          backgroundColor: theme.palette.text.secondary,
          color: "white",
          width: "200px",
        }}
      >
        <DashboardIcon />
        <Button
          sx={{
            mr: 5,
            paddingLeft: 3,
            color: "white",
            gap: 5,
            alignItems: "center",
          }}
          size="small"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dashboard
          <KeyboardArrowRightOutlinedIcon />
        </Button>

        <Menu
      
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem  sx={{ display:"flex", justifyContent:"left",gap:2, width:"200px"}}onClick={handleClose}>
            <SportsEsportsOutlinedIcon/>Games</MenuItem>
          <MenuItem  sx={{ display:"flex", justifyContent:"left",gap:2, width:"200px"}} onClick={handleClose}>  <ElectricBikeOutlinedIcon/> Bikes</MenuItem>
          <MenuItem  sx={{ display:"flex", justifyContent:"left",gap:2, width:"200px"}} onClick={handleClose}>
            <LaptopChromebookOutlinedIcon/>
            Electronics</MenuItem>
          <MenuItem   sx={{ display:"flex", justifyContent:"left",gap:2, width:"200px"}}onClick={handleClose}>
            <MenuBookOutlinedIcon/>
            Books</MenuItem>

        </Menu>
      </Stack>

      <Stack>
      <IconButton  onClick={()=>{



      }} aria-label="menu" >
        
  
        <DehazeIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header3;
