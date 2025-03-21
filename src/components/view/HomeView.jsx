import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

const HomeView = ({ user, password, setUser, setPassword, generateLog }) => {
  return (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper elevation={5} style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
        <Grid container justifyContent="center" alignItems="center" md={8} style={{ background: '' }} padding={'1rem'}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="h3" align="center">
                Login
              </Typography>
            </Grid>
            <Grid item style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} margin={'1rem'}>
              <Typography variant="h6" align="center">
                User
              </Typography>
              <TextField size="small" value={user} onChange={e => setUser(e.target.value)} />
            </Grid>
            <Grid item style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} margin={'1rem'}>
              <Typography variant="h6" align="center">
                Password
              </Typography>
              <TextField type="password" size="small" value={password} onChange={e => setPassword(e.target.value)} />
            </Grid>
            <Grid container justifyContent={'center'} margin={'1rem'}>
              <Button style={{ background: 'gray', color: 'white' }} onClick={generateLog}>
                Generate
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default HomeView;
