import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import HomeView from '../view/HomeView';
import { useStore } from '../models/rootStore';
import { useNavigate } from 'react-router-dom';

const HomeViewModel = observer(() => {
  const [user, setUser] = useState(''); // Estado para el usuario
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const store = useStore();
  const authStore = store.authStore;
  const navigate = useNavigate();

  async function generateLog() {
    await authStore.login(user, password);
    navigate('/');
  }

  return (
    <HomeView user={user} setUser={setUser} password={password} setPassword={setPassword} generateLog={generateLog} />
  );
});

export default HomeViewModel;
