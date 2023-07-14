const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { amount, product } = action.payload;
        let existingProduct = state.cart.find((currItem) => currItem.id === product._id);
        if (existingProduct) {
            return {
                ...state,
            }
        } else {
            let cartProduct = {
                id: product._id,
                name: product.name,
                image: product.image[0],
                category: product.category,
                company: product.company,
                color: product.color,
                price: product.price,
                amount,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        }
    }

    // set decrement
    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((currElem) => {
            if (currElem.id === action.payload) {
                let decAmount = currElem.amount - 1;
                if (decAmount <= 0) {
                    decAmount = 1;
                }
                return {
                    ...currElem,
                    amount: decAmount,
                }
            } else {
                return currElem;
            }
        })
        return { ...state, cart: updatedProduct }
    }

    // set increment
    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((currElem) => {
            if (currElem.id === action.payload) {
                let incAmount = currElem.amount + 1;
                if (incAmount >= 5) {
                    incAmount = 5;
                }
                return {
                    ...currElem,
                    amount: incAmount,
                }
            } else {
                return currElem;
            }
        })
        return { ...state, cart: updatedProduct }
    }

    if (action.type === "REMOVE_ITEM") {
        let updateCart = state.cart.filter((currItem) => currItem.id !== action.payload);
        return {
            ...state,
            cart: updateCart,
        }
    }
    return state;
}

export default cartReducer
