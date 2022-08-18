import React, { useEffect, useState } from "react";
import { endpoint } from "../utils/fetchApi";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import Header from "../components/Header";
import categoryImg from "../assets/category.png";

const Category = () => {
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    const getListCategory = async () => {
        try {
            const response = await axios.get(endpoint.getListCategory);
            setCategory(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getListCategory();
    }, []);

    const handleClickCategory = (i) => {
        navigate(`${i}`);
    };

    console.log(category);
    return (
        <div>
            <Header />
            <h6 className="fw600 mb-4">Kategori Produk</h6>
            <div className="d-flex justify-content-between flex-wrap">
                {category?.map((cat, i) => (
                    <div
                        key={i}
                        onClick={() => handleClickCategory(cat)}
                        className="category__card fw400 text-center"
                    >
                        <div>
                            <img
                                className="category__img"
                                src={categoryImg}
                                alt="category"
                            />
                        </div>
                        <div>{cat}</div>
                    </div>
                ))}
            </div>
            <Button />
        </div>
    );
};

export default Category;
