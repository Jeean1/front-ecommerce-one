import { Avatar, Grid, Typography } from "@mui/material";
import { useStore } from "../models/rootStore";

const Header = ({ children }) => {
  const store = useStore();

  return (
    <>
      <Grid container direction={"column"} style={{ background: "gray" }}>
        <Grid item container style={{ background: "" }} padding={"1rem"}>
          {/* <Typography variant="h6">Header</Typography> */}
          <Grid item md={6} style={{ background: "" }}>
            <Grid item md={6} style={{ background: "" }}>
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
          <Grid item md={6} container padding={"0 1rem"}>
            <Grid
              item
              container
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={"0.5rem"}
            >
              <Avatar />
              <Typography>Administradora #1 </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>{children}</Grid>
    </>
  );
};

export default Header;
