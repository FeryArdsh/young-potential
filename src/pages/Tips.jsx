import axios from "axios";
import React, { useEffect, useState } from "react";

const Tips = () => {
    const [allCarts, setAllCarts] = useState([]);
    const getAllCarts = async () => {
        const response = await axios.get("https://dummyjson.com/carts");
        setAllCarts(response.data.carts);
    };
    useEffect(() => {
        getAllCarts();
    }, []);

    console.log(allCarts);
    return <div></div>;
};

export default Tips;
