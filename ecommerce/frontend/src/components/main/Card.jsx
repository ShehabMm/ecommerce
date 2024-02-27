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
import Buttons from "./buttons";
import { useSelector, useDispatch } from "react-redux";
import { getdetails } from "../../Redux/counterSlice";


export default function Mediaca() {
  const  {user} = useSelector((state) => state.counterSlice);
  console.log(user)


  const { filterUser } = useSelector((state) => state.counterSlice);
  const [all, setall] = useState(false);
  console.log(filterUser);
  const dispatch = useDispatch();
  const [products, setproducts] = useState(user);
  const [yes, setyes] = useState(true);
  const [normal, setnormal] = useState(true);

  useEffect(() => {
    dispatch(getdetails());
    }, []);





  return (
    <Container sx={{ mt: 5 }}>
      <Stack
        direction="row"
        sx={{
          gap: 5,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
    
  
        {user.map((item) => {
          return (
            <Card key={item.id} sx={{ maxWidth: 333, mt: 5 }}>
              <CardMedia
                sx={{
                  height: 277,
                  "&:hover": {
                    cursor: "pointer",
                    rotate: "10deg",
                    transform: "scale(1.1)",
                    transition: "0.3s ",
                  },
                }}
                image={item.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
{item.details}        
    </Typography>

                <Typography variant="body2" color="text.secondary">
              {item.price} $
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
                  value={220}
                  readOnly
                />
              </CardActions>
            </Card>
          );
        })}

        <Buttons />
      
      </Stack>
    </Container>
  );
}
