import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AutoScrollCarousel from "../common/swiper/AutoScrollCarousel";

const MainView = ({ user, password, setUser, setPassword, generateLog }) => {
  const dataGames = [
    {
      id: 1,
      img: "https://media.spelunky.fyi/mods/logo/01G98XE7AMVFVWB8YJBDYBV7NZ/1659230428504170.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
    },
    {
      id: 2,
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202502/0418/f8791059d96fa61d08f5433476c4f3337655262411eda101.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
    },
    {
      id: 3,
      img: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
    },
    {
      id: 4,

      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/05/gta-v-arte-grande-2321051.jpg?tf=3840x",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
    },
    {
      id: 6,
      img: "https://i.ytimg.com/vi/5vuTtwk5b8E/hqdefault.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mini et quisquam, consequatur expedita quasi numquam provident velitic corporis temporibus beatae reruaut, maiores debitis totamarchitecto excepturi, quos dolorum?",
    },
  ];

  return (
    <Container maxWidth style={{ background: "#1b2838", padding: "4rem 2rem" }}>
      <Grid
        container
        md={12}
        // justifyItems={"center"}
        // alignItems={"center"}
        // style={{ background: "" }}
        // gap={"1rem"}
        gap={"10rem"}
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
          {dataGames.map((game) => {
            return (
              <Grid item md={3} key={game.id} data-aos="fade-right">
                <Box
                  width={"300px"}
                  height={"500px"}
                  bgcolor={"rgb(128 128 128 / 13%)"}
                  borderRadius={"10px"}
                  padding={"1rem"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={"1rem"}
                >
                  <img
                    src={game.img}
                    width={"80%"}
                    height={"300px"}
                    style={{ borderRadius: "10px", objectFit: "cover" }}
                  />
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minima et quisquam, consequatur expedita quasi numquam
                    provident velit hic corporis temporibus beatae rerum aut,
                    maiores debitis totam architecto excepturi, quos dolorum?
                  </Typography>

                  <a
                    href="/cotizaciones/crear"
                    style={{ borderBottom: "1px solid" }}
                  >
                    conoce más
                  </a>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainView;
