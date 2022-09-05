import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
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

    const addToCart = async () => {
        try {
            const response = await axios("https://dummyjson.com/carts/add", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify({
                    userId: 1,
                    products: [
                        {
                            id: 1,
                            quantity: 1,
                        },
                        {
                            id: 50,
                            quantity: 2,
                        },
                    ],
                }),
            });
            console.log(response);
            Swal.fire({
                icon: "success",
                title: "Produk berhasil ditambahkan",
                text: "",
                footer: '<a href="http://127.0.0.1:5173/carts">Lihat keranjang Anda</a>',
            });
        } catch (error) {
            console.log(error);
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
                                Rp. {item.price * 1000}
                            </div>
                        </div>

                        <div>
                            <Button
                                text="Tambah"
                                style="btn-secondary"
                                onClick={addToCart}
                            />
                        </div>
                    </section>
                ))}
            </main>
        </>
    );
};

export default ProductByCategory;
