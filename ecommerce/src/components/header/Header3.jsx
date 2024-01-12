import { Container, Stack } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DehazeIcon from '@mui/icons-material/Dehaze';
const Header3 = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <Stack  direction="row" alignItems="center" sx={{backgroundColor:"#777", color:"white", width:"200px"}}> 
<DashboardIcon/>
<Button 
sx={{ mr:5     }}
size="small"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>


<KeyboardArrowRightOutlinedIcon/>
</Stack>

<Stack>
  <DehazeIcon/>
</Stack>
    </Container>
  );
}

export default Header3;
