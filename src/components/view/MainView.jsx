import { Card, Grid, Typography } from '@mui/material';
import CardOne from '../common/material/CardOne';
import { generalColorCompany } from '../../colorEmpresa';
import logoCompany from '../../../public/logo_compañia_ferroconstructores.jpg';

const MainView = () => {
  // FERROCONSTRUCTORES

  return (
    <Grid container>
      <Grid md={12} container gap={'4rem'}>
        <Grid item sm={12} md={3}>
          <Card
            elevation={5}
            sx={{
              bgcolor: generalColorCompany['uno'],
              borderRadius: '16px',
              p: 2,
              // minHeight: '90%',
              height: '100%'
            }}
          >
            {/* Contenido */}
            <Grid
              container
              direction={'column'}
              // justifyContent={'space-evenly'}
              alignItems={'center'}
              minHeight={'500px'}
              bgcolor={generalColorCompany['uno']}
              spacing={6}
            >
              <Grid item maxHeight={'300PX'}>
                <img
                  src={logoCompany}
                  width={'100%'}
                  height={'100%'}
                  alt="compañia logo"
                  style={{ borderRadius: '50%' }}
                />
              </Grid>

              <Grid item>
                <Typography variant="h3" align="center" color={'white'} fontWeight={'bolder'}>
                  PINTURAS DEL PACIFICO
                </Typography>
              </Grid>

              {/* Texto informativo */}
              <Grid item container direction={'column'} gap={'1rem'}>
                <Typography variant="h4" fontWeight={'bold'} color={'#FFF'} textAlign={'justify'}>
                  Quienes somos:
                </Typography>
                <Typography variant="body1" fontWeight={''} color={'#FFF'} textAlign={'justify'}>
                  Pinturas del Pacífico es una empresa dedicada a la distribución de pinturas y productos
                  complementarios. Atendemos tanto a clientes minoristas como mayoristas desde hace 5 años. Envíos
                  nacionales.
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* general products */}
        <Grid item container sm={12} md={8} spacing={5} marginBottom={'3rem'}>
          <Grid item container justifyContent={'center'}>
            <Typography variant="h3" fontWeight="bold" color={''} padding={'0'} textAlign={'center'}>
              CATALOGO DE PRODUCTOS
            </Typography>
          </Grid>

          {/* container */}
          <Grid item container justifyContent={'center'} md={12}>
            <Grid item container md={12} justifyContent={'center'}>
              <CardOne />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainView;
