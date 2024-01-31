import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import { Typography, IconButton } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

const Hero2 = () => {





  
  return (
    <Container  sx={{border:"2px solid red", width:"100%", mt:5, height:"100px"}}>
      
<Stack direction={"row"}> 




<Box>
<IconButton aria-label="iconButtom"   >
  <BoltIcon  className='bolt'  />
</IconButton >

  <Typography variant="body1" color="initial">Fast delivery</Typography>
  <Typography variant="body1" color="initial">Start form 10$</Typography>

</Box>




</Stack>

    </Container>
  );
}

export default Hero2;
