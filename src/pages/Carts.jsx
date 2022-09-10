import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Order from "../components/Order";
import RadioBtn from "../components/RadioBtn";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearProduct, totalPrice } from "../services/redux/Cart";
import FORMAT_RUPIAH from "../utils/FORMAT_RUPIAH";

const Carts = () => {
    const { register } = useForm();
    const [delivery, setDelivery] = useState("");
    const idCart = localStorage.getItem("id");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);

    const handleChangeDelivery = (e) => {
        setDelivery(e.target.value);
    };

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
            if (!delivery) {
                return Swal.fire(
                    "Gagal ditambahkan",
                    "Metode pengiriman belum dipilih",
                    "error"
                );
            }
            const response = await axios("https://dummyjson.com/carts/add", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify({
                    userId: idCart,
                    products: getProducts,
                }),
            });
            dispatch(clearProduct());
            Swal.fire("Berhasil ditambahkan", "", "success");
            navigate("/");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dispatch(totalPrice());
    }, [cart]);

    return (
        <main>
            <Header title="Keranjang" />
            <form onSubmit={addNewCarts}>
                <section>
                    <h6 className="fw600">Pilih Metode Pengiriman</h6>
                    <RadioBtn
                        name="Pickup / Diambil"
                        id="pickup"
                        handleChangeDelivery={handleChangeDelivery}
                    />
                    <RadioBtn
                        name="Express / Kirim Cepat"
                        id="express"
                        handleChangeDelivery={handleChangeDelivery}
                    />
                    <RadioBtn
                        name="09:00 - 11:00"
                        id="sesi1"
                        handleChangeDelivery={handleChangeDelivery}
                    />
                    <RadioBtn
                        name="12:00 - 16:00"
                        id="sesi2"
                        handleChangeDelivery={handleChangeDelivery}
                    />
                    <RadioBtn
                        name="18:00 - 20:00"
                        id="sesi3"
                        handleChangeDelivery={handleChangeDelivery}
                    />
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
                    <span className="fw600-fs14">
                        {FORMAT_RUPIAH(cart.total * 14000)}
                    </span>
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
                    <span className="fw500 fs14">
                        {FORMAT_RUPIAH(cart.total * 14000)}
                    </span>
                </section>
                {cart.products.length >= 1 ? (
                    <Button
                        text="Buat Pesanan"
                        style="btn-primary mt-3"
                        type="submit"
                    />
                ) : (
                    <button className="btn-primary mt-3" type="submit" disabled>
                        Buat Pesanan
                    </button>
                )}
            </form>
        </main>
    );
};

export default Carts;
