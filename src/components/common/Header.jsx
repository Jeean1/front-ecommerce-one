import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography
} from '@mui/material';
import { useStore } from '../models/rootStore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { generalColorCompany } from '../../colorEmpresa';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';

const Header = ({ children }) => {
  const store = useStore();
  const [open, setOpen] = useState(false);

  return (
    <Grid container direction={'column'} overflow={'hidden'}>
      <Grid item sm={12} container direction={'column'} style={{ background: '#474747', position: 'fixed', zIndex: 9 }}>
        <Grid item container style={{ background: '' }} padding={'1rem'}>
          <Grid item md={6} style={{ background: '' }}>
            <Grid item md={12} style={{ background: '' }}>
              <Typography variant="h4" margin={'0.5rem 2rem'} fontWeight={'bolder'} color={'#f0f0f0'}>
                Pinturas del pacifico
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={6} container justifyContent={'flex-end'} alignItems={'center'} gap={'1rem'}>
            <Grid item>
              <Grid item container>
                <IconButton color="primary" onClick={() => setOpen(true)}>
                  <ShoppingCartIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container justifyContent={'center'} alignItems={'center'} gap={'0.5rem'}>
                <Avatar />
                <Typography>Cliente Name Test</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* list products */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          <ListItem>
            <Typography
              variant="h6"
              fontWeight="bold"
              color={'white'}
              sx={{
                textShadow: '1px 1px 5px rgba(255, 255, 255, 0.6)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                p: 1.5,
                borderRadius: '10px'
              }}
            >
              Carrito de compras
            </Typography>{' '}
          </ListItem>
          <ListItem button>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://pintumax3.es/img/cms/rodillos.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Kit de rodillos
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                  <Typography variant="h6" fontSize={'bold'} margin={'1rem 0'} color={'green'}>
                    $35.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>{' '}
          </ListItem>
          <ListItem button>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.trayma.es/wp-content/uploads/2018/07/TYM_1150_cinta_adhesiva_enmascarar_papel.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cinta
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                  <Typography variant="h6" fontSize={'bold'} margin={'1rem 0'} color={'green'}>
                    $10.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>{' '}
          </ListItem>
          {/* Agrega más elementos aquí */}
          <ListItem onClick={() => alert('Pedido agendado')}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="white"
              sx={{
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Más contraste con el fondo
                backgroundColor: 'rgba(70, 221, 50, 0.5)', // Fondo oscuro translúcido
                p: 1.5,
                borderRadius: '10px'
              }}
            >
              Agendar pedido
            </Typography>
          </ListItem>
        </List>
      </Drawer>

      {/* children */}
      <Grid item sm={12} marginTop={'10rem'}>
        {children}
      </Grid>

      {/* footer */}
      <Grid item md={12}>
        <Grid
          md={12}
          container
          justifyContent={'space-evenly'}
          // direction={'column'}
          // justifyContent={'space-evenly'}
          // alignItems={'center'}
          padding={'3rem'}
          minHeight={'500px'}
          // width={'100%'}
          bgcolor={generalColorCompany['uno']}
        >
          <Grid item md={5}>
            <Typography variant="h3" color={'#FFF'}>
              ¿Dónde estamos?
            </Typography>
            <Typography variant="h6" color={'#FFF'}>
              Nos encontramos en Cali. Realizamos entregas en toda la ciudad & nacional.
            </Typography>
            <Box mt={2}>
              <iframe
                src="https://maps.google.com/maps?q=Cali%20Colombia&z=11&output=embed"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: 8, height: '500px' }}
                allowFullScreen=""
                loading="lazy"
                title="cali-colombia-ubicacion"
              ></iframe>
            </Box>
          </Grid>
          <Grid item md={5}>
            <Box mt={1} display={'flex'} flexDirection={'column'} gap={'1rem'}>
              <Typography variant="h3" color={'#FFF'}>
                Nuestras redes sociales
              </Typography>

              <Grid container direction={'column'} alignItems={'flex-start'}>
                <IconButton href="https://www.instagram.com/ferroconstructoresdelpacifico_/" target="_blank">
                  <Instagram style={{ color: 'white', height: '100%', margin: '0 1rem' }} />
                  <Typography color={'#FFF'}>INSTAGRAM</Typography>
                </IconButton>
                <IconButton href="https://www.facebook.com/ferroconstructoresdelpacifico" target="_blank">
                  <Facebook style={{ color: 'white', height: '100%', margin: '0 1rem' }} />{' '}
                  <Typography color={'#FFF'}>FACEBOOK</Typography>
                </IconButton>
                <IconButton
                  href="https://api.whatsapp.com/send/?phone=573106399057&text=%22Hola%20me%20interesa%20comprar%22&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <WhatsApp style={{ color: 'white', height: '100%', margin: '0 1rem' }} />{' '}
                  <Typography color={'#FFF'}>WHATSAPP</Typography>
                </IconButton>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="h6" margin={1}>
        <a href="https://www.linkedin.com/in/jeanpol-giraldo/" target="_blank">
          Software creado por Roux Company
        </a>
      </Typography>
    </Grid>
  );
};

export default Header;
