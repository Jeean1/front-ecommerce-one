import {
  Avatar,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useStore } from "../models/rootStore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

const Header = ({ children }) => {
  const store = useStore();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid
        container
        direction={"column"}
        style={{ background: "#474747", position: "fixed", zIndex: 9 }}
      >
        <Grid item container style={{ background: "" }} padding={"1rem"}>
          <Grid item md={6} style={{ background: "" }}>
            <Grid item md={12} style={{ background: "" }}>
              <Typography
                variant="h4"
                margin={"0.5rem 2rem"}
                fontWeight={"bolder"}
                color={"#f0f0f0"}
              >
                Pinturas del pacifico
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            md={6}
            container
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Grid item>
              <Grid item container>
                <IconButton color="primary" onClick={() => setOpen(true)}>
                  <ShoppingCartIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>

            <Grid item>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                gap={"0.5rem"}
              >
                <Avatar />
                <Typography>Cliente Name Test</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          <ListItem>
            <ListItemText primary="Carrito de Compras" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Producto 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Producto 2" />
          </ListItem>
          {/* Agrega más elementos aquí */}
        </List>
      </Drawer>
      <Grid item marginTop={"10rem"}>
        {children}
      </Grid>
    </>
  );
};

export default Header;
