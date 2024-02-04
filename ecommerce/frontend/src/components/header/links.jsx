import Typography from "@mui/material/Typography";
import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
} from "@mui/material";
import KeyboardArrowRightOutlined from "@mui/icons-material/KeyboardArrowRightOutlined";

// eslint-disable-next-line react/prop-types
const Links = ({name}) => {
  return (
    <Stack
      direction="row"
      sx={{
        ":hover .pap": { display: "block", cursor: "pointer" },
        ":hover":{cursor:"pointer"},

        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" color="initial" sx={{ mr: 1 }}>
        {name}
      </Typography>
      <ExpandMore />

      <Box
        className="pap"
        sx={{
          position: "absolute",
          top: "100%",
          width: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
          zIndex:2
        }}
      >
        <Paper className="pap" sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List sx={{".MuiTypography-root":{fontSize:"13px"}}}>
              <ListItem   disablePadding>
                <ListItemButton>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem  sx={{":hover":{".box":{display:"block"}} ,   position:"relative"}}  disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Products" />
                  <KeyboardArrowRightOutlined />

                </ListItemButton>
<Box className="box" sx={{position:"absolute",top:"0", left:"100%", display:"none" }}>
<Paper sx={{ml:1, minWidth:"150px"}}>
                  <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Add Products" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Edit Products" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
  
</Paper>
</Box>

              </ListItem>
        
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Orders" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Stack>
  );
};

export default Links;
