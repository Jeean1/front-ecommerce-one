import LoggedViewModel from '../components/viewModel/LoggedViewModel';
import { useStore } from '../components/models/rootStore';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

const Logged = () => {
  const store = useStore();
  const [cookies, ,] = useCookies('jwtToken');

  useEffect(() => {
    if (cookies.jwtToken) {
      store.authStore.setToken(cookies.jwtToken, cookies.jwtToken.expires);
    }
  }, [cookies.jwtToken, store.authStore]);

  return <LoggedViewModel />;
};

export default Logged;
