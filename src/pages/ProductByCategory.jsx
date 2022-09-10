import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import IsLoading from "../components/IsLoading";
import { endpoint } from "../utils/fetchApi";
import capitalize from "../utils/firstCapitalize";
import FORMAT_RUPIAH from "../utils/FORMAT_RUPIAH";

const ProductByCategory = () => {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(null);

    const getProductByCategory = async () => {
        try {
            setLoading(IsLoading(true));
            const response = await axios.get(
                `${endpoint.getProductByCategory}/${categoryName}`
            );
            setProducts(response.data.products);
            setLoading(IsLoading(false));
        } catch (error) {
            console.log(error);
            setLoading(IsLoading(false));
        }
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
            {loading}
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
                                {item.title}
                            </div>

                            <div className="bycategory__price fw600">
                                {FORMAT_RUPIAH(item.price * 14000)}
                            </div>
                        </div>

                        <div>
                            <Button
                                text="Tambah"
                                style="btn-secondary"
                                onClick={() => onDetailProduct(item.id)}
                            />
                        </div>
                    </section>
                ))}
            </main>
        </>
    );
};

export default ProductByCategory;
