import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import capitalize from "../utils/firstCapitalize";
import Swal from "sweetalert2";
import { addProduct } from "../services/redux/Cart";
import { useDispatch } from "react-redux";
import loadingGif from "../assets/loading.gif";
import FORMAT_RUPIAH from "../utils/FORMAT_RUPIAH";
import Product from "../services/api/Product";
import LOCAL_STORAGE from "../services/localStorage";

const DetailProduct = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { idProduct } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dataUser = LOCAL_STORAGE.getDataUser();

    useEffect(() => {
        const fetch = async () => {
            try {
                setIsLoading(true);
                const response = await Product.getDetailProduct(idProduct);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        fetch();
    }, []);

    const addToCart = () => {
        if (!dataUser) {
            return Swal.fire("Kamu belum login", "", "error").then(() => {
                navigate("/login");
            });
        }
        const product = data;
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
                            {FORMAT_RUPIAH(data.price * 14000)}
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
