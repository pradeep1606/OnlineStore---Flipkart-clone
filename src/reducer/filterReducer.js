const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((currE) => currE.price)
            let maxPrice = Math.max(...priceArr)

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, price: maxPrice, maxPrice }
            }
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            }

        case "SORT_PRODUCT":
            let newSortProduct;
            const { filter_products, sorting_value } = state;
            let tempProduct = [...filter_products];

            const sortingProduct = (a, b) => {
                if (sorting_value === "low") {
                    return a.price - b.price;
                }
                if (sorting_value === "high") {
                    return b.price - a.price;
                }
            }

            newSortProduct = tempProduct.sort(sortingProduct);

            return {
                ...state,
                filter_products: newSortProduct,
            }

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "SEARCH_PRODUCT":
            let { all_products } = state;
            let tempSearchProduct = [...all_products];
            const { text, category, company, price } = state.filters;

            if (text) {
                tempSearchProduct = tempSearchProduct.filter((currElem) => {
                    return currElem.name.toLowerCase().includes(text);
                });
            }
            if (category !== "all") {
                tempSearchProduct = tempSearchProduct.filter((currElem) => {
                    return currElem.category === category;
                })
            }
            if (company !== "all") {
                tempSearchProduct = tempSearchProduct.filter((currElem) => {
                    return currElem.company === company;
                })
            }
            if (price) {
                tempSearchProduct = tempSearchProduct.filter((currElem) => currElem.price <= price)
            }

            return {
                ...state,
                filter_products: tempSearchProduct,
            }
        case "CLEAR_FILTER":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                }
            }

        default:
            return state;
    }
}

export default filterReducer;