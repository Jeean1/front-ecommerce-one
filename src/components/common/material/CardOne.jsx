import { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  IconButton,
  Box,
  Dialog,
  Divider
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const cardData = [
  {
    title: 'Pintura Exterior',
    price: 45000,
    description: 'Pintura de alta resistencia para exteriores.',
    image:
      'https://www.pagegear.co/es/img-hYwxDgIhEEVvQ8lfTSypLGy9wkRmWczATFhWPL4kxtrq5b38fDfC6bwsbvtiFAtRS65Zd6zcGueqb2-UODE1_1CYUO1ZhHb8MtwacJ9ym3IVPSLGGNh6EVhi_Hk8TJQi-MW1z9HFPy19AA.jpeg?185009672'
  },
  {
    title: 'Pintura Interior',
    price: 38000,
    description: 'Acabado suave y elegante para interiores.',
    image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/19313_02/w=800,h=800,fit=pad'
  },
  {
    title: 'Pintura Lavable',
    price: 52000,
    description: 'Fácil de limpiar, ideal para hogares con niños.',
    image:
      'https://www.mndelgolfo.com/blog/wp-content/uploads/2021/07/Como-aplicar-correctamente-una-pintura-lavable.jpg'
  },
  {
    title: 'Cintas',
    price: 10000,
    description: 'Cinta de enmascarar para proteger superficies.',
    image: 'https://www.trayma.es/wp-content/uploads/2018/07/TYM_1150_cinta_adhesiva_enmascarar_papel.jpg'
  },
  {
    title: 'Rodillos',
    price: 25000,
    description: 'Rodillos de alta calidad para pintar con precisión.',
    image: 'https://pintumax3.es/img/cms/rodillos.jpeg'
  }
];

export default function CardList() {
  const [cart, setCart] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [productSelected, setProductSelected] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = card => {
    setProductSelected(card);
    setQuantity(1);
    setDialogOpen(true);
  };

  const handleConfirmAdd = () => {
    if (!productSelected) return;

    const existing = cart.find(item => item.title === productSelected.title);
    if (existing) {
      const updated = cart.map(item =>
        item.title === productSelected.title ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...productSelected, quantity }]);
    }

    setDialogOpen(false);
    setProductSelected(null);
  };

  const handleQuantityChange = delta => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <>
      {/* 💬 Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <Box display="flex" flexDirection="column" p={4} gap={2}>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Confirmar producto
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <CardMedia
                component="img"
                height="260"
                image={productSelected?.image}
                alt={productSelected?.title}
                style={{ borderRadius: 8 }}
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography variant="h6" fontWeight="bold">
                {productSelected?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {productSelected?.description}
              </Typography>

              <Typography variant="h6" color="green" mt={2}>
                ${productSelected?.price?.toLocaleString('es-CO')}
              </Typography>

              <Box display="flex" alignItems="center" gap={2} mt={2}>
                <Typography>Cantidad:</Typography>
                <IconButton onClick={() => handleQuantityChange(-1)}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{quantity}</Typography>
                <IconButton onClick={() => handleQuantityChange(1)}>
                  <AddIcon />
                </IconButton>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Button variant="contained" color="primary" onClick={handleConfirmAdd} fullWidth>
                CONFIRMAR AÑADIDO
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Dialog>

      {/* 🛍 Card List */}
      <Grid container spacing={5}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 345 }} elevation={10}>
              <CardMedia component="img" alt={card.title} height="240px" image={card.image} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {card.description}
                </Typography>
                <Typography variant="h6" color="green" mt={2} fontWeight="bold">
                  ${card.price.toLocaleString('es-CO')}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button onClick={() => handleAddToCart(card)} variant="contained" color="primary">
                  Añadir al carrito
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
