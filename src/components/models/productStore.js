import { cloneDeep } from 'lodash';
import { loginAPI } from '../services/authStoreAPI';

function createProductStore() {
  // note the use of this which refers to observable instance of the store
  return {
    selectedProduct: {},

    setSelectedProduct(product) {
      this.selectedProduct = product;
    },

    clear() {
      this.jwt = {};
    }
  };
}

export const productStore = new createProductStore();
