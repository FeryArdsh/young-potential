import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import cuate from "../assets/cuate.png";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import useForm from "../hooks/useForm";
import { endpoint } from "../utils/fetchApi";

const Login = () => {
    const navigate = useNavigate();

    const { values, handleChange, handleSubmit } = useForm(login);

    async function login() {
        try {
            const response = await axios(endpoint.sign_in, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                data: {
                    username: values.username,
                    password: values.password,
                },
            });
            localStorage.setItem("firstName", response.data.firstName);
            navigate("/");
            console.log(response.data.firstName);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
        <div className="login d-flex flex-column align-items-center">
            <img className="mx-auto my-5" src={cuate} alt="" />

            <h4 className="mb-0 fw-bold login__title">Hai, fren!</h4>
            <p>Selamat Datang di Aplikasi WoiShop</p>
            <form className="login__form" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    text="Username"
                    icon="bi bi-person"
                    name="username"
                    value={values.username || ""}
                    handleChange={handleChange}
                />
                <Input
                    type="password"
                    text="Password"
                    icon="bi bi-file-lock"
                    name="password"
                    value={values.password || ""}
                    handleChange={handleChange}
                />

                <Button text="Masuk" style="btn-primary p-3 mt-3" />
            </form>
            <span className="fw600 login__choice">Atau Login Melalui</span>
            <Button text="Google" style="btn-secondary p-3 text-black" />
            <span className="fw400 login__text">
                Belum punya akun? Daftar <Link to="/register">Di Sini</Link>
            </span>
            <span className="fw400 login__text mt-0">
                Dengan masuk atau mendaftar, kamu menyetujui Ketentuan Layanan
                dan Kebijakan Privasi
            </span>
        </div>
    );
};

export default Login;
