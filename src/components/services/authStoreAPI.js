import axios from 'axios';
import { cloneDeep } from 'lodash';

export const loginAPI = async (email, password) => {
  const url = `http://localhost:4000/auth/ecommerce/login`;
  let result;

  await axios
    .post(
      url,
      {
        email,
        password
      },
      { withCredentials: true }
    )
    .then(function (response) {
      result = response;
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response.data.message);
      alert(error.response.data.message);
    });

  return result;
};

export const validateSession = async () => {
  try {
    const result = await axios.get('http://localhost:4000/private/auth/validate', {
      withCredentials: true // Necesario para enviar cookies HttpOnly
    });

    console.log(';;;; testing api', cloneDeep(result));

    //**
    // Modificar para qué reciba data en vez de un true quemado
    // validar y ajustar las otras  rutas que usan esta función
    //  */

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
