import React, { useEffect, useState } from "react";
import { endpoint } from "../utils/fetchApi";
import axios from "axios";

const DetailProduct = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(`${endpoint.getDetailProduct}/2`);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(data);
    return (
        <>
            <div className="bg-danger">
                <h1 className="text-center">Detail Product</h1>
            </div>
        </>
    );
};

export default DetailProduct;
