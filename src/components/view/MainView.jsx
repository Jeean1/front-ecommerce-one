import { Card, Grid, Typography } from '@mui/material';
import CardOne from '../common/material/CardOne';
import { generalColorCompany } from '../../colorEmpresa';
import logoCompany from '../../../public/logo_compañia_ferroconstructores.jpg';

const MainView = () => {
  // FERROCONSTRUCTORES

  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
      <Grid md={12} container justifyContent={'center'}>
        <Grid item sm={12} md={4}>
          <Card
            elevation={5}
            sx={{
              bgcolor: generalColorCompany['uno'],
              borderRadius: '16px',
              p: 2,
              minHeight: '90%'
            }}
          >
            {/* Contenido */}
            <Grid
              container
              direction={'column'}
              justifyContent={'space-evenly'}
              alignItems={'center'}
              padding={'3rem'}
              height={'500px'}
              width={'100%'}
              bgcolor={generalColorCompany['uno']}
            >
              <Grid item></Grid>
              <Grid maxHeight={'300PX'} item>
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
            </Grid>
          </Card>
        </Grid>

        {/* general products */}
        <Grid item container direction={''} sm={12} md={8} gap="2rem" padding={'1rem'}>
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
              CATALOGO DE PRODUCTOS
            </Typography>
          </Grid>
          {/* container */}
          <Grid item container md={12}>
            <Grid item container md={12} justifyContent={'space-around'} gap={'0rem'} style={{ background: '' }}>
              <CardOne />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainView;
