import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import categoryImg from "../assets/category.png";
import capitalize from "../utils/firstCapitalize";
import toko from "../assets/toko.png";
import IsLoading from "../components/IsLoading";
import Product from "../services/api/Product";

const Category = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(IsLoading(true));
                const response = await Product.getListCategory();
                setCategory(response.data);
                setLoading(IsLoading(false));
            } catch (error) {
                console.log(error);
                setLoading(IsLoading(false));
            }
        };
        fetch();
    }, []);

    const handleClickCategory = (i) => {
        navigate(`${i}`);
    };

    return (
        <div>
            <Header title="Detail Toko" />
            <section className="category__toko container py-3 d-flex justify-content-between border-bottom border-5 border-secondary border-opacity-10 border-top">
                <div className="category__toko__img">
                    <div className="position-relative d-flex justify-content-center">
                        <img className="img-fluid" src={toko} alt="toko" />
                        <div className="rounded-pill py-1 category__toko__rating d-flex align-items-center justify-content-evenly position-absolute">
                            <i className="bi bi-heart-fill text-white"></i>
                            <span className="fw600">5.0</span>
                        </div>
                    </div>
                </div>

                <div className="category__toko__description">
                    <h6 className="fw600-fs14">Toko Semesta</h6>
                    <p className="category__toko__address">
                        Jl. Kasipah Raya No. 182, Jatingaleh, Kec. Candisari,
                        Kota Semarang
                    </p>
                    <div className="d-flex">
                        <button className="category__toko__button">
                            Express
                        </button>
                        <button className="category__toko__button">
                            09.00
                        </button>
                        <button className="category__toko__button">
                            16.00
                        </button>
                    </div>
                </div>
            </section>

            <h6 className="fw600 my-4">Kategori Produk</h6>
            {loading}
            <main className="d-flex justify-content-between flex-wrap">
                {category?.map((cat, i) => (
                    <section
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
                        <div>{capitalize(cat)}</div>
                    </section>
                ))}
            </main>
            <Button
                text="Jadikan Toko Favorite"
                style="btn-primary btn-shadow"
            />
        </div>
    );
};

export default Category;
