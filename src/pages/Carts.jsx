import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Order from "../components/Order";
import RadioBtn from "../components/RadioBtn";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Carts = () => {
    const [cart, setCart] = useState({});
    const { register } = useForm();
    const idCart = localStorage.getItem("id");

    const getSingleCart = async () => {
        try {
            const response = await axios.get(
                `https://dummyjson.com/carts/${idCart}`
            );
            setCart(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCarts = async () => {
        try {
            const response = await axios(
                `https://dummyjson.com/carts/${idCart}`,
                {
                    method: "DELETE",
                }
            );
            Swal.fire("Berhasil dihapus", "", "success");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleCart();
    }, []);

    return (
        <main>
            <Header title="Keranjang" />
            <section>
                <h6 className="fw600">Pilih Metode Pengiriman</h6>
                <RadioBtn name="Pickup / Diambil" id="pickup" />
                <RadioBtn name="Express / Kirim Cepat" id="express" />
                <RadioBtn name="09:00 - 11:00" id="sesi1" />
                <RadioBtn name="12:00 - 16:00" id="sesi2" />
                <RadioBtn name="18:00 - 20:00" id="sesi3" />
            </section>

            <section className="d-flex justify-content-between align-items-center mt-5 border-bottom pb-2">
                <h6 className="fw600 d-inline m-0">Pesanan</h6>
                <Link to="/category" className="text-decoration-none">
                    <span className="pesanan__tambah fw600">
                        + Tambah Pesanan
                    </span>
                </Link>
            </section>
            {cart && <p>Ini keranjang dengan id {cart.id}</p>}
            <div className="mt-3">
                {cart.products?.map((product) => (
                    <Order
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        quantity={product.quantity}
                    />
                ))}
            </div>
            <button
                onClick={deleteCarts}
                type="button"
                className="btn btn-outline-danger btn-sm"
            >
                Delete Carts
            </button>
            <section className="d-flex justify-content-between align-items-center mt-5">
                <h6 className="fw600-fs14 d-inline m-0">Total Harga</h6>
                <span className="fw600-fs14">Rp. 12.000</span>
            </section>

            <section className="d-flex justify-content-between align-items-center mt-4 border-bottom pb-2">
                <h6 className="fw600 d-inline m-0">Tambahkan Catatan</h6>
            </section>

            <Input
                type="text"
                text="Masukkan catatan di sini"
                icon="bi bi-pencil-square"
                name="catatan"
                register={register}
            />

            <section className="d-flex justify-content-between align-items-center mt-5">
                <h6 className="fw500 fs14 d-inline m-0">Total Pembayaran</h6>
                <span className="fw500 fs14">Rp. 12.000</span>
            </section>
            <Button text="Buat Pesanan" style="btn-primary mt-3" />
        </main>
    );
};

export default Carts;
