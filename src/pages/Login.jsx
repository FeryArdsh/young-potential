import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cuate from "../assets/cuate.png";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { useForm } from "react-hook-form";
import { endpoint } from "../utils/fetchApi";
import Swal from "sweetalert2";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/FirebaseConfig";

const Login = () => {
    const navigate = useNavigate();
    const [errLogin, setErrLogin] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async ({ username, password }) => {
        try {
            const response = await axios(endpoint.sign_in, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                data: {
                    username: username,
                    password: password,
                },
            });
            localStorage.setItem("firstName", response.data.firstName);
            await Swal.fire("Login Berhasil!", "", "success");
            navigate("/");
        } catch (error) {
            console.log(error.response.data.message);
            if (error.response.data.message === "Invalid credentials") {
                setErrLogin("Username atau Password Salah");
            }
        }
    };

    const handleSignInGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            const user = result.user;
            localStorage.setItem("firstName", user.displayName);
            if (user) {
                navigate("/");
            }
        });
    };
    const authGoogle = () => {
        try {
            handleSignInGoogle();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login d-flex flex-column align-items-center">
            <img className="mx-auto my-5" src={cuate} alt="" />

            <h4 className="mb-0 fw-bold login__title">Hai, fren!</h4>
            <p>Selamat Datang di Aplikasi WoiShop</p>
            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                <p className="text-danger text-center">{errLogin}</p>
                <Input
                    type="text"
                    text="Username"
                    icon="bi bi-person"
                    name="username"
                    register={register}
                    validation={{
                        required: "Username Tidak Boleh Kosong",
                    }}
                    isError={errors.username?.type}
                />
                {errors.username && (
                    <span className="fw400 fs10 err-color text-center d-block mt-2 mb-3">
                        {errors.username?.message}
                    </span>
                )}

                <Input
                    type="password"
                    text="Password"
                    icon="bi bi-file-lock"
                    name="password"
                    register={register}
                    validation={{
                        required: "Password Tidak Boleh Kosong",
                    }}
                    isError={errors.password?.type}
                />
                {errors.password && (
                    <span className="fw400 fs10 err-color text-center d-block mt-2 mb-3">
                        {errors.password?.message}
                    </span>
                )}

                <Button text="Masuk" style="btn-primary p-3 mt-3" />
            </form>
            <span className="fw600 login__choice">Atau Login Melalui</span>

            <Button
                onClick={authGoogle}
                text="Google"
                style="btn-secondary p-3 text-black"
            />
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
