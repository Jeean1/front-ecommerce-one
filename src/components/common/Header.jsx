import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import { useStore } from '../models/rootStore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';

const Header = ({ children }) => {
  const store = useStore();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid container direction={'column'} style={{ background: '#474747', position: 'fixed', zIndex: 9 }}>
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
      <Grid item marginTop={'10rem'}>
        {children}
      </Grid>
    </>
  );
};

export default Header;
