import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Paper , Box, Stack } from '@mui/material';

const Dialogue = () => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box   >
          <React.Fragment  >
      <Button variant="outlined" onClick={handleClickOpen}>
        Add To Cart
      </Button>
      <BootstrapDialog
      sx={{".MuiPaper-root":{ minWidth:{xs:"100vw", md:"60vw"}, overflow:"hidden"  }}}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers         
>
        <Box sx={{ display:"flex",  width:"100%", height:"60vh", justifyContent:"space-between", flexDirection:{xs:"column", md:"row"}, }}>

        <Stack sx={{width:"30%", height:"100%", justifyContent:"center", alignItems:"center"}}>
<img style={{height:"60%", width:"100%"}} src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="" /></Stack>


<Stack sx={{display:"flex",justifyContent:"center", p:2,width:"70%", textAlign:{xs:"center", md:"left"}, gap:2, ml:2, alignSelf:"center"}}>

<Typography variant="h3" sx={{fontWeight:"bold"}} color="initial">Women Fashion</Typography>
<Typography variant="h5" sx={{fontWeight:"bold"}} color="error">12.99$</Typography>
<Typography variant="h6" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti debitis accusamus quidem aperiam in porro, voluptas voluptate inventore repellat nesciunt! Rem modi ea asperiores eum voluptates iste, eveniet quis aperiam nesciunt, animi eligendi dolores nihil natus. Pariatur, dolore aspernatur!</Typography>

<Stack sx={{flexDirection:{xs:"column", md:"row", }, alignSelf:"center"  }} gap={2}>

  {["aaa", "bbb", "ccc"].map(()=>{  

return(  
  <div key={Math.random()}>
  
  <img style={{width:"200px"}} src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="" />


  </div>
)


  })}
  </Stack>

<Button sx={{width:"20%"}} variant="contained" color="primary">
  Buy Now
</Button>
</Stack>
  
        </Box>
        

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>

    </Box>
  );
}

export default Dialogue;
