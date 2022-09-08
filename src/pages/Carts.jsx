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
import { useSelector } from "react-redux";

const Carts = () => {
    const { register } = useForm();
    const idCart = localStorage.getItem("id");

    const cart = useSelector((state) => state.cart);

    // Get Product From Redux Cart //
    const getProducts = cart.products.map((product) => {
        return {
            id: product.id,
            quantity: product.quantity,
        };
    });

    // Add New Carts in Button Buat Pesanan //
    const addNewCarts = async (e) => {
        try {
            e.preventDefault();
            const response = await axios("https://dummyjson.com/carts/add", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify({
                    userId: idCart,
                    products: getProducts,
                }),
            });
            Swal.fire("Berhasil ditambahkan", "", "success");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main>
            <Header title="Keranjang" />
            <form onSubmit={addNewCarts}>
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
                <div className="mt-3">
                    {cart.products.map((product) => (
                        <Order
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))}
                </div>
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
                    <h6 className="fw500 fs14 d-inline m-0">
                        Total Pembayaran
                    </h6>
                    <span className="fw500 fs14">Rp. 12.000</span>
                </section>
                <Button
                    text="Buat Pesanan"
                    style="btn-primary mt-3"
                    type="submit"
                />
            </form>
        </main>
    );
};

export default Carts;
