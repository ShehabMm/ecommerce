import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Rating, Stack } from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import Dialogue from "./Dialogue";
import { useEffect, useState } from "react";
import axios from "axios";
import Buttons from "./buttons";

export default function MediaCard() {

  const [products, setproducts] = useState([]);

  const getData = async () => {
    const pro = await axios
      // @ts-ignore
      .get(`${import.meta.env.VITE_BASEURL}/api/products?populate=*`)
      .then((res) => {
        setproducts(res.data.data);
        console.log(res.data.data[0].attributes.productImg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [yes, setyes] = useState(true);
  useEffect(() => {
    getData();
    console.log(products);
  }, []);


  const filteration = ()=>{

    console.log("gg")
  }

  
  
  
  
    
  
  return (
    <Container sx={{ mt: 5,  }}>
      <Button  onClick={filteration } variant="text" color="primary">
        do it 
      </Button>
      <Stack
        direction="row"
        sx={{
          gap: 5,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >

        {products.map((item) => {
          if (products) {
            return (
              <Card  key={item} sx={{ maxWidth: 333, mt: 5 }}>
                <CardMedia
                  sx={{ height: 277,"&:hover":{cursor:"pointer", rotate:"10deg", transform:"scale(1.1)", transition:"0.3s "} }}
                  // @ts-ignore 
                  image={`${import.meta.env.VITE_BASEURL}${
                    item.attributes.productImg.data[1].attributes.url
                  }`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.attributes.productTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDescription}{" "}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productPrice} ${" "}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      {
                        yes ? <Dialogue /> : null;
                      }
                    }}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} />
                    <Dialogue />
                  </Button>
                  <Rating
                    name="read-only"
                    precision={0.5}
                    value={item.attributes.productRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          }
        })}

<Buttons/>
      </Stack>
    </Container>
  );
}
