import {
  Container,
  Stack,
  useTheme,
  IconButton,
  Drawer,
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ElectricBikeOutlinedIcon from "@mui/icons-material/ElectricBikeOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Close } from "@mui/icons-material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Links from './links'
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

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "left",
              gap: 2,
              width: "200px",
            }}
            onClick={handleClose}
          >
            <SportsEsportsOutlinedIcon />
            Games
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "left",
              gap: 2,
              width: "200px",
              zIndex:50,
            }}
            onClick={handleClose}
          >
            {" "}
            <ElectricBikeOutlinedIcon /> Bikes
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "left",
              gap: 2,
              width: "200px",
            }}
            onClick={handleClose}
          >
            <LaptopChromebookOutlinedIcon />
            Electronics
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "left",
              gap: 2,
              width: "200px",
            }}
            onClick={handleClose}
          >
            <MenuBookOutlinedIcon />
            Books
          </MenuItem>
        </Menu>
      </Stack>

      {useMediaQuery("(min-width:1000px)") && ( 
      <> 
      <Links name={"Home"}/>
      <Links name={"Mega Menu"}/>
      <Links name={"Full screen menu"}/>
      <Links name={"Vendor's account"}/>
      <Links name={"Pages"}/>
      <Links name={"User's account"}/>


      </>)}


  

      <Stack>
        {useMediaQuery("(max-width:1000px)") && (
          <IconButton onClick={toggleDrawer("top", true)} aria-label="menu">
            <DehazeIcon />
          </IconButton>
        )}

        <Box>
          <Drawer
            sx={{
              ".MuiPaper-root .MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded MuiAccordion-gutters css-r3cmis-MuiPaper-root-MuiAccordion-root ":
                { height: "80vh" },
            }}
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
          >
            ddddddddddd
            <Box
              sx={{
                width: "300px",
                mx: "auto",
                textAlign: "right",
                mt: 6,
                pb: 2,
              }}
            >
              <IconButton
                sx={{
                  ":hover": {
                    rotate: "360deg",
                    transition: "all 0.3s",
                    color: "red",
                  },
                  mb: 2,
                }}
                onClick={toggleDrawer("top", false)}
              >
                <Close />
              </IconButton>

              {[
                { name: "Home", subname: ["link1", "link2"] },
                { name: "MegaMenu", subname: ["link1", "link2"] },
                { name: "Office", subname: ["link1", "link2"] },
              ].map((item) => {
                return (
                  <div
                    key={item.name}
                    style={{
                      maxHeight: "180px",
                      overflow: "hidden",
                      padding: 0,
                      margin: 0,
                      gap: 0,
                    }}
                  >
                    <Accordion sx={{ padding: 0, margin: 0 }}>
                      <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography sx={{ my: 0 }}>{item.name}</Typography>
                      </AccordionSummary>

                      <List sx={{ pt: 0, m: 0 }}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary={item.subname[0]} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary={item.subname[1]} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Accordion>
                  </div>
                );
              })}
            </Box>
          </Drawer>
        </Box>
      </Stack>
    </Container>
  );
};

export default Header3;
