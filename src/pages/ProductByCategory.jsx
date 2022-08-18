import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { endpoint } from "../utils/fetchApi";

const ProductByCategory = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    const getProductByCategory = async () => {
        try {
            const response = await axios.get(
                `${endpoint.getProductByCategory}/${id}`
            );
            setProducts(response.data.products);
        } catch (error) {}
    };

    useEffect(() => {
        getProductByCategory();
    }, []);

    console.log(products);
    return (
        <>
            <Header />
            {products?.map((item) => (
                <div key={item.id}>
                    <div className="img__bycategory">
                        <img src={item.images[0]} alt="" />
                    </div>
                    {item.title}
                </div>
            ))}
        </>
    );
};

export default ProductByCategory;
