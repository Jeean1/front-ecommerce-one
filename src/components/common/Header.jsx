import { Avatar, Grid, Typography } from "@mui/material";

const Header = ({ children }) => {
  return (
    <Grid container direction={"column"}>
      <Grid item container style={{ background: "" }} padding={"1rem"}>
        {/* <Typography variant="h6">Header</Typography> */}
        <Grid item md={6} style={{ background: "" }}>
          <Grid item md={6} style={{ background: "gray" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png"
              height={50}
            />
          </Grid>
        </Grid>
        <Grid
          item
          md={6}
          container
          // justifyContent={"flex-end"}
          style={{ background: "" }}
          padding={"0 1rem"}
        >
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
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default Header;
