import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from '@mui/material';
const Scrollup = () => {
const [hidden, sethidden] = useState(false);


  useEffect(()=>{
window.addEventListener("scroll", ()=>{
if (window.scrollY>300) {

  sethidden(true)

}else {

  sethidden(false)


}

})


  },[])
  return (
<> 
       

  <a href="#up"  style={{opacity:hidden?1:0, transition:"all 0.3s"}}> 
  <Box  sx={{"&:active":{bgcolor:"blue"},  "&:hover":{cursor:"pointer"}, p:2, borderRadius:"50%",opacity:1, transition:"0.3s",   bgcolor:"red", position:"fixed", right:50, bottom:50}}>
    <KeyboardArrowUpIcon sx={{fontSize:"30px", color:"white"}} />
  </Box>
  </a>


</>
  );

}

export default Scrollup;
