import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const getLocalCartItem = () => {
    let localCartItem = localStorage.getItem("Cart Item");
    // if (localCartItem === []) {
    //     return [];
    // } else {
    //     return JSON.parse(localCartItem)
    // }
    const parsedData = JSON.parse(localCartItem);
    if (!Array.isArray(parsedData)) return [];
    return parsedData;
}

const initialState = {
    cart: getLocalCartItem(),
    total_item: "",
    total_amount: "",
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { amount, product } })
    }

    // Increment and Decrement Item
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    }
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    // Add cart Item in localStorage
    useEffect(() => {
        localStorage.setItem("Cart Item", JSON.stringify(state.cart))
    }, [state.cart])


    return <CartContext.Provider value={{ ...state, addToCart, removeItem, setDecrease, setIncrease }}>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }