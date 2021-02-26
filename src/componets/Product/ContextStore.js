// import React, { createContext, useContext, useState } from "react";
// import storeProducts from "../../data/storeProducts";

// export const StoreContext = createContext();

// function StoreProvider({ children }) {
//   const [store, setStore] = useState(storeProducts);
//   const [cart, setCart] = useState([]);

//   return (
//     <StoreContext.Provider value={{ store, setStore, cart, setCart }}>
//       {children}
//     </StoreContext.Provider>
//   );
// }

// export function useStoreContext() {
//   const context = useContext(StoreContext);
//   const { store, setStore, cart, setCart } = context;
//   return { store, setStore, cart, setCart };
// }

// export default StoreProvider;
