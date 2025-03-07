import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { authStore } from "./authStore";
import { productStore } from "./productStore";

export function createRootStore() {
  return {
    authStore: authStore,
    productStore: productStore,
  };
}

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const rootStore = useLocalObservable(createRootStore);

  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore debe usarse dentro de un StoreProvider.");
  }
  return store;
};

// import React from "react";
// import { useLocalStore } from "mobx-react";
// import { authStore } from "./authStore";
// import { productStore } from "./productStore";

// export function createRootStore() {
//   return {
//     authStore,
//     productStore,
//   };
// }

// const storeContext = React.createContext(new createRootStore());

// export const StoreProvider = ({ children }) => {
//   const rootStore = useLocalStore(createRootStore);
//   return (
//     <storeContext.Provider value={rootStore}>{children}</storeContext.Provider>
//   );
// };

// export const useStore = () => {
//   const store = React.useContext(storeContext);
//   if (!store) {
//     // this is especially useful in TypeScript so you don't need to be checking for null all the time
//     throw new Error("useStore must be used within a StoreProvider.");
//   }
//   return store;
// };
