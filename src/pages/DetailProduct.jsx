import React, { useEffect, useState } from "react";
import { endpoint } from "../utils/fetchApi";
import axios from "axios";
import Button from "../components/Button";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import capitalize from "../utils/firstCapitalize";
import Swal from "sweetalert2";
import { addProduct } from "../services/redux/Cart";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";

const DetailProduct = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { idProduct } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `${endpoint.getDetailProduct}/${idProduct}`
            );
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const addToCart = () => {
        const product = data;
        product.quantity = 1;
        dispatch(addProduct(product));
        Swal.fire({
            title: "Berhasil Ditambahkan",
            icon: "success",
            text: "Lihat keranjang Anda?",
            showCancelButton: true,
            cancelButtonText: "Nanti",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya",
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/carts");
            }
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header title="Detail Produk" />
            {isLoading && (
                <div className="text-center">
                    <img src={loadingGif} alt="Loading..." />{" "}
                </div>
            )}
            {data && (
                <main className="p-1 detail__product">
                    <img
                        src={data.images[0]}
                        alt={data.title}
                        className="img-fluid"
                    />
                    <div className="detail__product__category mb-3 mt-5">
                        <span>{capitalize(data.category)}</span>
                    </div>
                    <div>
                        <div className="fw600-fs14 d-block">{data.title}</div>
                        <div className="fw600-fs14">
                            Rp. {data.price * 1000}
                        </div>
                    </div>
                    <section className="mt-5 mb-3">
                        <div className="fw600-fs14 d-block">
                            Deskripsi Produk
                        </div>
                        <span className="detail__product__description">
                            {data.description}
                        </span>
                    </section>
                    <Button
                        text="Tambah Pesanan"
                        style="btn-primary"
                        onClick={addToCart}
                    />
                </main>
            )}
        </>
    );
};

export default DetailProduct;
