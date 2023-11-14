import { createContext,useReducer,useContext} from "react";
import { productsData } from "../data/productsData.js";
import { shoppingAppReducer } from "../reducer/Reducer.js";
export const ShoppingApp = createContext();


const Context = ({ children }) => {
    const initialState = {
        products: productsData,
        cart: []
      }
      
      const [state,dispatch]= useReducer(shoppingAppReducer,initialState);
      //console.log(productsData);
      return (
        <ShoppingApp.Provider value={{state,dispatch}}>
            {children}
        </ShoppingApp.Provider>
      );
};
export const ShoppingAppState = () => {
  return useContext(ShoppingApp);
};


export default Context;




