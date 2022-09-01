import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { endpoint } from "../utils/fetchApi";
import capitalize from "../utils/firstCapitalize";

const ProductByCategory = () => {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();
    const navigate = useNavigate();

    const getProductByCategory = async () => {
        try {
            const response = await axios.get(
                `${endpoint.getProductByCategory}/${categoryName}`
            );
            setProducts(response.data.products);
        } catch (error) {}
    };

    useEffect(() => {
        getProductByCategory();
    }, []);

    const onDetailProduct = (id) => {
        navigate(`/detail-product/${id}`);
    };

    return (
        <>
            <Header title={capitalize(categoryName)} />
            <main className="d-flex flex-wrap">
                {products?.map((item) => (
                    <section
                        key={item.id}
                        className="bycategory__container mx-auto"
                    >
                        <div
                            className="bycategory"
                            onClick={() => onDetailProduct(item.id)}
                        >
                            <div className="bycategory__img">
                                <img
                                    src={item.images[0]}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="bycategory__title__container">
                                {/* <span className="bycategory__title fw400"> */}
                                {item.title}
                                {/* </span> */}
                            </div>

                            <div className="bycategory__price fw600">
                                Rp. {item.price * 1000}
                            </div>
                        </div>

                        <div>
                            <Button text="Tambah" style="btn-secondary" />
                        </div>
                    </section>
                ))}
            </main>
        </>
    );
};

export default ProductByCategory;
