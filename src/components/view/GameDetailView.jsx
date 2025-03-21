import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { ParticlesCode } from '../common/particles/Particles';
import { useNavigate } from 'react-router-dom';

const GameDetailView = ({ selectedProduct, goBackRoute, addProductToCart }) => {
  const history = useNavigate();
  return (
    <Container
      maxWidth
      style={{
        background: '#1b2838',
        padding: '4rem 2rem'
      }}
    >
      <ParticlesCode />
      <Grid container direction={'column'} justifyContent="center" gap={'1rem'}>
        <Grid item>
          <Button
            variant="text"
            sx={{
              border: '1px solid #FFF',
              color: '#FFF',
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '10px',
              '&:hover': { backgroundColor: '#474747', color: 'white' }
            }}
            onClick={goBackRoute}
          >
            {'<< Regresar'}
          </Button>
        </Grid>
        <Grid
          item
          container
          md={10}
          sm={12}
          sx={{
            backgroundColor: '#2a2a2a',
            borderRadius: '15px',
            padding: '3rem',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
          }}
          justifyContent="space-around"
          alignItems="center"
        >
          {/* Imagen del juego */}
          <Grid item xs={12} sm={6} md={5}>
            <img
              src={selectedProduct?.img}
              alt={selectedProduct?.nameTitle}
              style={{
                borderRadius: '15px',
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
              }}
            />
          </Grid>

          {/* Información del juego */}
          <Grid item xs={12} sm={6} md={5} container direction="column" spacing={3}>
            <Typography variant="h3" fontWeight="bold" align="center" color="white">
              {selectedProduct.nameTitle}
            </Typography>
            <br />
            <Typography variant="h4" fontWeight="bold" align="center" color="#FFD700">
              $ {selectedProduct?.cashValue?.toLocaleString('es-CO')}
            </Typography>
            <br />

            <Typography variant="body1" align="justify" color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, inventore impedit nemo dolorum aut fugit
              nobis recusandae facere itaque, laborum libero debitis eius similique optio? Distinctio ipsam architecto
              enim earum!
            </Typography>

            {/* Botones */}
            <Grid container justifyContent="center" gap={2}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  '&:hover': { backgroundColor: '#1e7e34' }
                }}
                onClick={() => addProductToCart()}
              >
                Añadir al carrito
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  '&:hover': { backgroundColor: '#474747', color: 'white' }
                }}
                onClick={() => history(-1)}
              >
                Regresar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GameDetailView;
