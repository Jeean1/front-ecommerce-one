import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../models/rootStore';
import { useNavigate } from 'react-router-dom';

import MainView from '../view/MainView';

const MainViewModel = observer(() => {
  const [user, setUser] = useState(''); // Estado para el usuario
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const store = useStore();
  const authStore = store.authStore;
  const productStore = store.productStore;
  const navigate = useNavigate();

  async function generateLog() {
    await authStore.login(user, password);
  }

  const setProductStoreFunc = item => {
    return () => {
      productStore.setSelectedProduct(item);
      navigate(`/game/detail/${item.id}`);
    };
  };

  return (
    <MainView
      user={user}
      setUser={setUser}
      password={password}
      setPassword={setPassword}
      generateLog={generateLog}
      setProductStoreFunc={setProductStoreFunc}
    />
  );
});

export default MainViewModel;
