import axios from "axios";
import API_ENDPOINT from "../../config/API_ENDPOINT";

const Product = {
    async getListCategory() {
        const response = await axios.get(API_ENDPOINT.PRODUCT.LIST_CATEGORY);
        return response;
    },

    async getProductByCategory(categoryName) {
        const response = await axios.get(
            `${API_ENDPOINT.PRODUCT.BY_CATEGORY}/${categoryName}`
        );
        return response;
    },

    async getDetailProduct(idProduct) {
        const response = await axios.get(
            `${API_ENDPOINT.PRODUCT.BASE_PRODUCT}/${idProduct}`
        );
        return response;
    },
};

export default Product;
