const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "SET_API_DATA":
            const { Products } = action.payload;
            const featureData = Products.filter((product) => product.featured);
            const mobile = featureData.filter((product) => product.category === "mobile");
            const laptop = featureData.filter((product) => product.category === "moniter" || product.category === "laptop");
            // console.log(featureData.category === "moniter");
            const printer = featureData.filter((product) => product.category === "printer" || product.category === "camera");
            return {
                ...state,
                isLoading: false,
                products: Products,
                featureProducts: featureData,
                featureMobile: mobile,
                featureLaptop_Moniter: laptop,
                featurePrinter: printer,
            };

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload.Products[0],
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
};

export default productReducer;