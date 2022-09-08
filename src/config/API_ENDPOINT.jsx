import API_CONFIG from "./API_CONFIG";

const API_ENDPOINT = {
    AUTH: {
        SIGNIN: `${API_CONFIG.BASE_URL}/auth/login`,
    },
    PRODUCT: {
        BASE_PRODUCT: `${API_CONFIG.BASE_URL}/products`,
        LIST_CATEGORY: `${API_CONFIG.BASE_URL}/products/categories`,
        BY_CATEGORY: `${API_CONFIG.BASE_URL}/products/category`,
    },
    CART: {
        BASE_CART: `${API_CONFIG.BASE_URL}/carts`,
        ADD_NEW: `${API_CONFIG.BASE_URL}/carts/add`,
    },
};

export default API_ENDPOINT;
