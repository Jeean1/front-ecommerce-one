import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutoScrollCarousel from "../common/swiper/AutoScrollCarousel";
import { ParticlesCode } from "../common/particles/Particles";
import SwiperNavigationOne from "../common/swiper/SwiperNavigationOne";
import CardOne from "../common/material/CardOne";
import HeroSection from "../common/HeroPage";

const MainView = ({ setProductStoreFunc, dataProducts }) => {
  const dataDumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const dataDumbTwo = [
    { title: "Pinturas", image: "/images/paint.jpg" },
    { title: "Brochas y Rodillos", image: "/images/brushes.jpg" },
    { title: "Cintas y Protectores", image: "/images/tape.jpg" },
  ];

  return (
    <Grid container direction={"column"} justifyContent={"center"}>
      <Grid item margin={"1rem "}>
        <HeroSection />
      </Grid>

      <Grid
        md={12}
        container
        justifyContent={"center"}
        gap={"10rem"}
        margin={"4rem 0"}
      >
        {/* top products */}
        <Grid item container justifyContent={"center"} md={12} gap={"5rem"}>
          <Grid item>
            <Typography variant={"h3"} textAlign={"center"} color={"gray"}>
              Nuestros productos
            </Typography>
          </Grid>

          <Grid
            item
            container
            justifyContent={"center"}
            md={12}
            bgcolor={""}
          >
            {dataDumbTwo.map((category, b) => (
              <Grid item md={3} key={b}>
                <Card sx={{ maxWidth: 350, borderRadius: "0.5rem" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={category.image}
                    alt={category.title}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {category.title}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Ver productos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* autplay */}
        <Grid item container md={12} justifyContent={"center"}>
          <Grid item md={10}>
            <SwiperNavigationOne />
          </Grid>
        </Grid>
        {/* general products */}
        <Grid item container direction={""} md={10} gap="3rem" margin={""}>
          <Grid item>
            <Typography variant="h4" color={"gray"} fontWeight={"bold"}>
              Herramientas esenciales para un acabado impecable 🖌️✔️{" "}
            </Typography>
          </Grid>
          {/* container */}
          <Grid item container md={12}>
            <Grid
              item
              container
              md={12}
              justifyContent={"space-around"}
              gap={"2rem"}
              style={{ background: "" }}
            >
              {dataDumb.map((a, b) => (
                <Grid item key={`${b}A`}>
                  <CardOne />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainView;
