import { Button, Container, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutoScrollCarousel from "../common/swiper/AutoScrollCarousel";
import { ParticlesCode } from "../common/particles/particles";
import { useState } from "react";
import { cloneDeep } from "lodash";

const MainView = ({ setProductStoreFunc, dataProducts }) => {
  return (
    <Container
      maxWidth
      style={{
        background: "#1b2838",
        padding: "4rem 2rem",
      }}
    >
      <ParticlesCode />
      <Grid
        container
        md={12}
        // justifyItems={"center"}
        // alignItems={"center"}
        // style={{ background: "" }}
        // gap={"1rem"}
        gap={"10rem"}
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        <Grid
          item
          md={10}
          style={{
            margin: "auto",
            borderRadius: "10px",
            padding: "10px",
            background: "rgb(128 128 128 / 13%)",
          }}
        >
          <AutoScrollCarousel />
          <Typography
            variant="h4"
            align="center"
            style={{ margin: "0.5rem", fontWeight: "bold" }}
          >
            ¡Descubre juegos raros y exclusivos a precios increíbles! 🎮🔥
          </Typography>
        </Grid>

        {/* second section list */}
        <Grid item md={12}>
          <Typography
            variant="h4"
            align="center"
            textAlign={"center"}
            style={{ margin: "0.5rem", fontWeight: "bold" }}
          >
            Lo más destacado
          </Typography>
        </Grid>
        <Grid
          item
          md={10}
          container
          alignItems={"center"}
          justifyContent={"center"}
          gap={"4rem"}
          style={{
            margin: "auto",
            borderRadius: "10px",
            padding: "10px",
            // background: "rgb(128 128 128 / 13%)",
            background: "",
          }}
          data-aos="fade-right"
        >
          {dataProducts.map((game) => {
            return (
              <Grid item container md={3} key={game.id} data-aos="fade-right">
                <Grid
                  item
                  container
                  md={12}
                  height={""}
                  direction={""}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bgcolor={"rgb(128 128 128 / 13%)"}
                  borderRadius={"10px"}
                  padding={"1rem"}
                  gap={"1rem"}
                >
                  <Grid item container justifyContent={"center"}>
                    <Grid item>
                      <img
                        src={game.img}
                        width={"100%"}
                        height={"300px"}
                        style={{ borderRadius: "10px", objectFit: "cover" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" textAlign={"center"}>
                      {game.nameTitle}
                    </Typography>
                    <br />
                    <Typography variant="body1" textAlign={"justify"}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Minima et quisquam, consequatur expedita quasi numquam
                      provident velit hic corporis temporibus beatae rerum aut,
                      maiores debitis totam architecto excepturi, quos dolorum?
                    </Typography>
                    <br />
                    <Typography variant="h3" textAlign={"center"}>
                      $ {game.cashValue.toLocaleString("es-CO")}
                    </Typography>
                  </Grid>

                  {/* Input para cantidad */}
                  {/* <Grid item>
                    <TextField
                      type="number"
                      value={quantity}
                      onChange={handleChange}
                      inputProps={{ min: 1 }}
                      sx={{ width: "80px", textAlign: "center" }}
                      size="small"
                    />
                  </Grid> */}

                  <Grid item>
                    <Button
                      onClick={setProductStoreFunc(game)}
                      variant="contained"
                      color="primary"
                      startIcon={<ShoppingCartIcon />}
                      sx={{ mt: 1 }}
                    >
                      Añadir al carrito
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainView;
