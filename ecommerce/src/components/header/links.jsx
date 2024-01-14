import Typography from '@mui/material/Typography'
import { ExpandMore } from '@mui/icons-material';
import {  IconButton, Stack } from '@mui/material';

const Links = () => {
  return (
    <Stack direction="row"  sx={{":hover":{cursor:"pointer"}}}>
      <Typography variant="body1" color="initial" sx={{mr:1}}>Home</Typography>
      <ExpandMore />
    </Stack>


  );
}

export default Links;
