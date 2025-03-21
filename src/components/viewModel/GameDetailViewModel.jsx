import { observer } from 'mobx-react-lite';
import GameDetailView from '../view/GameDetailView';
import Header from '../common/Header';
import { useStore } from '../models/rootStore';
import { cloneDeep } from 'lodash';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const GameDetailViewModel = observer(() => {
  const store = useStore();
  const { id } = useParams(); // Obtiene el ID de la URL
  const productStore = store.productStore;
  const authStore = store.authStore;
  const token = authStore.token;
  const selectedProduct = productStore.selectedProduct;
  const navigate = useNavigate();

  console.log(':::: Log desde Detail', cloneDeep(id));

  const goBackRoute = () => {
    navigate(-1);
  };

  const addProductToCart = async () => {
    const result = await authStore.validateSessionFunc();

    console.log(';;;;;;;; testing result', result);

    if (!token.auth_active) {
      return navigate('/login');
    }

    alert('añadiendo producto a carrito con sesión activa');
  };

  useEffect(() => {
    if (Object.keys(selectedProduct).length == 0) {
      navigate('/');
    }
  }, []);

  console.log(':::: testing token general', cloneDeep(token));
  return (
    <Header>
      <GameDetailView selectedProduct={selectedProduct} goBackRoute={goBackRoute} addProductToCart={addProductToCart} />
    </Header>
  );
});

export default GameDetailViewModel;
