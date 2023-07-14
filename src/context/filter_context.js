import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    sorting_value: '',
    filters: {
        text: "",
        category: "all",
        company: "all",
        price: 0,
        maxPrice: 0,
        minPrice: 0,
    }
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);


    // sorting funtion to get value of sort
    const sorting = (event) => {
        let user = event.target.id;
        dispatch({ type: "GET_SORT_VALUE", payload: user })
    }

    // clear the all filters
    const clearFilter = () => {
        dispatch({ type: "CLEAR_FILTER" });
    }

    // Sort and filter the products
    useEffect(() => {
        dispatch({ type: "SEARCH_PRODUCT" })
        dispatch({ type: "SORT_PRODUCT" })
    }, [products, state.sorting_value, state.filters]);

    // update filter value 
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }


    // load all product
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products]);


    return (
        <FilterContext.Provider value={{ ...state, sorting, updateFilterValue, clearFilter }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};