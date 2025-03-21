import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AutoScrollCarousel from '../common/swiper/AutoScrollCarousel';
import { ParticlesCode } from '../common/particles/Particles';
import SwiperNavigationOne from '../common/swiper/SwiperNavigationOne';
import CardOne from '../common/material/CardOne';
import HeroSection from '../common/HeroPage';

const MainView = ({ setProductStoreFunc, dataProducts }) => {
  const dataDumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const dataDumbTwo = [
    {
      title: 'Pinturas',
      image: 'https://pinturasdoal.com/wp-content/uploads/Featured-Estrategias-para-vender-mas-pintura-en-tu-tienda.jpg'
    },
    {
      title: 'Brochas y Rodillos',
      image: 'https://cdn2.hubspot.net/hubfs/6015546/brushes.jpg'
    },
    {
      title: 'Cintas y Protectores',
      image: 'https://http2.mlstatic.com/D_NQ_NP_940989-MCO74147833928_012024-O.webp'
    }
  ];

  return (
    <Grid container direction={'column'} justifyContent={'center'}>
      <Grid item margin={'1rem '}>
        <HeroSection />
      </Grid>

      <Grid md={12} container justifyContent={'center'} gap={'10rem'} margin={'4rem 0'}>
        {/* top products */}
        <Grid item container justifyContent={'center'} md={12} gap={'5rem'}>
          <Grid item>
            <Typography
              variant="h2"
              fontWeight="bold"
              color={'white'}
              sx={{
                textShadow: '1px 1px 5px rgba(255, 255, 255, 0.6)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                p: 1.5,
                borderRadius: '10px'
              }}
            >
              Nuestros productos
            </Typography>
          </Grid>

          <Grid item container justifyContent={'center'} md={12} bgcolor={''}>
            {dataDumbTwo.map((category, b) => (
              <Grid item md={3} key={b}>
                <Card sx={{ maxWidth: 350, borderRadius: '0.5rem' }}>
                  <CardMedia component="img" height="200" image={category.image} alt={category.title} />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {category.title}
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                      Ver productos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* autplay */}
        <Grid item container md={12} justifyContent={'center'}>
          <Grid item md={10}>
            <SwiperNavigationOne />
          </Grid>
        </Grid>
        {/* general products */}
        <Grid item container direction={''} md={10} gap="3rem" margin={''}>
          <Grid item container justifyContent={'center'}>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={'white'}
              sx={{
                textShadow: '1px 1px 5px rgba(255, 255, 255, 0.6)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                p: 1.5,
                borderRadius: '10px'
              }}
            >
              Nuestros productos
            </Typography>
          </Grid>
          {/* container */}
          <Grid item container md={12}>
            <Grid item container md={12} justifyContent={'space-around'} gap={'0rem'} style={{ background: '' }}>
              {/* {dataDumb.map((a, b) => (
                <Grid item key={`${b}A`}>
                  <CardOne />
                </Grid>
              ))} */}

              <CardOne />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainView;
