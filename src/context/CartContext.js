import { cartReducer } from "../reducers/cartReducer";

const { createContext, useContext, useReducer } = require("react");

const cartInitialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  function addToCart(product) {
    const updatedList = state.cartList.concat(product);
    const updateTotalPrice = state.total + product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: { products: updatedList, total: updateTotalPrice },
    });
  }
  function removeFromCart(product) {
    const updatedList = state.cartList.filter((item) => item.id !== product.id);
    const updateTotalPrice = state.total - product.price;
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { products: updatedList, total: updateTotalPrice },
    });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART", payload: { products: [], total: 0 } });
  }

 

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
