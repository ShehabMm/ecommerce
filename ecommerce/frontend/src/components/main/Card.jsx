import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Rating, Stack } from '@mui/material';
import { AddShoppingCartOutlined } from '@mui/icons-material';
import Dialogue from './Dialogue';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MediaCard() {




  const [yes, setyes] = useState(true);
useEffect(()=>{

const products = axios.get("http://localhost:1337/api/products").then (()=>{
return data.data

})


}, [])

console.log(products)
  return (
    <Container sx={{mt:5}}>
    <Stack direction="row" sx={{gap:5, alignItems:"center", flexWrap:"wrap", justifyContent:"center"}}> 
  
  {["aa", "bb", "cc", "dd"].map((item)=>{


return(    <Card key={item} sx={{ maxWidth: 333, mt:5 }}>
  <CardMedia
    sx={{ height: 277 }}
    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
    title="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
  <CardActions sx={{justifyContent:"space-between"}}>
    <Button onClick={()=>{

      {yes? (<Dialogue/>):null}

    }}    sx={{textTransform:"capitalize"}} size="large">
    <AddShoppingCartOutlined sx={{mr:1}}/>
    <Dialogue/>
    </Button>
<Rating name="read-only" precision={0.5} value={4.5 } readOnly />        
  </CardActions>
</Card>                      )

  })}
  

    </Stack>
    </Container>
  );
}