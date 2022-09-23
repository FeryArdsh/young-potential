import axios from "axios";
import API_ENDPOINT from "../../config/API_ENDPOINT";

const Cart = {
    async addNewCart(userId, getProducts) {
        const response = await axios(API_ENDPOINT.CART.ADD_NEW, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({
                userId,
                products: getProducts,
            }),
        });
        return response;
    },
};

export default Cart;
