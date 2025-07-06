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
import { useEffect, useRef, useState } from 'react';
import { generalColorCompany } from '../../colorEmpresa';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import useIsMobile from '../../utils/isMobile';

const Header = ({ children }) => {
  const store = useStore();
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  // Nueva funcionalidad: ocultar header al hacer scroll
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 300) {
        setShowHeader(false); // scroll hacia abajo
      } else {
        setShowHeader(true); // scroll hacia arriba
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItems = [
    {
      title: 'Kit de rodillos',
      description: 'Rodillo ideal para pintar interiores con precisión y acabado uniforme.',
      price: '$35.000',
      image: 'https://pintumax3.es/img/cms/rodillos.jpeg'
    },
    {
      title: 'Cinta',
      description: 'Cinta de enmascarar para proteger superficies mientras pintas.',
      price: '$10.000',
      image: 'https://www.trayma.es/wp-content/uploads/2018/07/TYM_1150_cinta_adhesiva_enmascarar_papel.jpg'
    }
  ];

  return (
    <Grid container direction="column" overflow="hidden">
      {/* Header visible u oculto según scroll */}
      <Grid
        item
        container
        alignItems={'center'}
        style={{
          background: '#474747',
          position: 'fixed',
          zIndex: 9,
          top: showHeader ? 0 : '-100px',
          transition: 'top 0.3s ease-in-out',
          width: '100%'
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            textAlign={isMobile ? 'center' : 'left'}
            margin="0.5rem 2rem"
            fontWeight="bold"
            color="#f0f0f0"
          >
            Pinturas del Pacífico
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          container
          justifyContent={isMobile ? 'space-around' : 'flex-end'}
          alignItems={'center'}
          padding={'1rem'}
          gap={'1rem'}
        >
          <Avatar />
          <Typography color={'#F0F0F0'} fontWeight={'bold'}>
            Cliente Name Test
          </Typography>
          <IconButton color="primary" onClick={() => setOpen(true)}>
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>

      {/* Drawer - Carrito */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 300 }}>
          <ListItem>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="white"
              sx={{
                textShadow: '1px 1px 5px rgba(255, 255, 255, 0.6)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                p: 1.5,
                borderRadius: 2
              }}
            >
              Carrito de compras
            </Typography>
          </ListItem>

          {cartItems.map((item, index) => (
            <ListItem button key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="h6" color="green" marginTop={2}>
                      {item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ListItem>
          ))}

          <ListItem button onClick={() => alert('Pedido agendado')}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="white"
              sx={{
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                backgroundColor: 'rgba(70, 221, 50, 0.5)',
                p: 1.5,
                borderRadius: 2,
                width: '100%',
                textAlign: 'center'
              }}
            >
              Agendar pedido
            </Typography>
          </ListItem>
        </List>
      </Drawer>

      {/* Contenido principal */}
      <Grid item xs={12} marginTop="250px" padding={isMobile ? '1rem' : '0'} container justifyContent="center">
        {children}
      </Grid>

      {/* Footer */}
      <Grid item xs={12}>
        <Grid container justifyContent="space-evenly" padding={6} minHeight={500} bgcolor={generalColorCompany['uno']}>
          <Grid item md={5}>
            <Typography variant="h3" color="#FFF">
              ¿Dónde estamos?
            </Typography>
            <Typography variant="h6" color="#FFF">
              Nos encontramos en Cali. Realizamos entregas en toda la ciudad & nacional.
            </Typography>
            <Box mt={2}>
              <iframe
                src="https://maps.google.com/maps?q=Cali%20Colombia&z=11&output=embed"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: 8 }}
                allowFullScreen
                loading="lazy"
                title="cali-colombia-ubicacion"
              ></iframe>
            </Box>
          </Grid>

          <Grid item md={5}>
            <Box mt={1} display="flex" flexDirection="column" gap={2}>
              <Typography variant="h3" color="#FFF">
                Nuestras redes sociales
              </Typography>
              <Grid container direction="column" alignItems="flex-start">
                <IconButton href="https://www.instagram.com/ferroconstructoresdelpacifico_/" target="_blank">
                  <Instagram sx={{ color: 'white', marginRight: 2 }} />
                  <Typography color="#FFF">INSTAGRAM</Typography>
                </IconButton>
                <IconButton href="https://www.facebook.com/ferroconstructoresdelpacifico" target="_blank">
                  <Facebook sx={{ color: 'white', marginRight: 2 }} />
                  <Typography color="#FFF">FACEBOOK</Typography>
                </IconButton>
                <IconButton
                  href="https://api.whatsapp.com/send/?phone=573106399057&text=%22Hola%20me%20interesa%20comprar%22&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <WhatsApp sx={{ color: 'white', marginRight: 2 }} />
                  <Typography color="#FFF">WHATSAPP</Typography>
                </IconButton>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="h6" margin={1} align="center">
        <a href="https://www.linkedin.com/in/jeanpol-giraldo/" target="_blank" rel="noopener noreferrer">
          © {new Date().getFullYear()} Roux Soluciones. Todos los derechos reservados.
        </a>
      </Typography>
    </Grid>
  );
};

export default Header;
