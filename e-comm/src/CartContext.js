import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        cartItems: action.payload,
      };
    case 'ADD_TO_CART':
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.title === item.title);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.title === existItem.title ? { ...x, quantity: x.quantity + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });
  const { token } = useContext(AuthContext);
  const apiBaseUrl = 'https://crudcrud.com/api/BFvJEXahSt62yk_k_7G7o3GElcnbsRIKvDcd2at9SoPPWT0GDA';
  
  const sanitizeEmail = (email) => email.replace(/[@.]/g, '');

  useEffect(() => {
    if (token) {
      const userEmail = 'user@example.com'; // Get this from token or other logic
      const sanitizedEmail = sanitizeEmail(userEmail);
      
      axios.get(`${apiBaseUrl}/cart${sanitizedEmail}`)
        .then((response) => {
          dispatch({ type: 'SET_CART_ITEMS', payload: response.data });
        })
        .catch((error) => console.error('Error fetching cart items:', error));
    }
  }, [token]);

  const addToCart = async (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });

    const sanitizedEmail = sanitizeEmail('user@example.com'); // Replace with actual user email logic
    try {
      await axios.post(`${apiBaseUrl}/cart${sanitizedEmail}`, item);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeFromCart = async (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });

    // Handle item removal from CrudCrud here (Optional)
  };

  return (
    <CartContext.Provider value={{ state, dispatch, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
