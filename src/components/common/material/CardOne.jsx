import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const cardData = [
  {
    title: 'Pintura Exterior',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:
      'https://www.pagegear.co/es/img-hYwxDgIhEEVvQ8lfTSypLGy9wkRmWczATFhWPL4kxtrq5b38fDfC6bwsbvtiFAtRS65Zd6zcGueqb2-UODE1_1CYUO1ZhHb8MtwacJ9ym3IVPSLGGNh6EVhi_Hk8TJQi-MW1z9HFPy19AA.jpeg?185009672'
  },
  {
    title: 'Pintura Interior',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/19313_02/w=800,h=800,fit=pad'
  },
  {
    title: 'Pintura Lavable',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image:
      'https://www.mndelgolfo.com/blog/wp-content/uploads/2021/07/Como-aplicar-correctamente-una-pintura-lavable.jpg'
  },
  {
    title: 'Cintas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://www.trayma.es/wp-content/uploads/2018/07/TYM_1150_cinta_adhesiva_enmascarar_papel.jpg'
  },
  {
    title: 'Rodillos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://pintumax3.es/img/cms/rodillos.jpeg'
  }
];

export default function CardList() {
  return (
    <Grid container spacing={5}>
      {cardData.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }} elevation={10}>
            <CardMedia component="img" alt={card.title} height="240px" image={card.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 4, // Número de líneas antes del truncado
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => alert('active')}
                variant="contained"
                color="primary"
                size="small"
                style={{ margin: '1rem auto' }}
              >
                Añadir al carrito
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
