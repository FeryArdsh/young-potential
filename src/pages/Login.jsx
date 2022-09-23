import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cuate from "../assets/cuate.png";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Auth from "../services/api/Auth";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onLogin = async ({ username, password }, e) => {
        try {
            e.preventDefault();
            await Auth.login(username, password);
            await Swal.fire("Login Berhasil!", "", "success");
            navigate("/");
        } catch (error) {
            if (error.response.data.message === "Invalid credentials") {
                await Swal.fire(
                    "Opss..",
                    "Username atau Password Salah!",
                    "error"
                );
            }
            console.log(error);
        }
    };

    const authGoogle = async (e) => {
        try {
            e.preventDefault();
            const displayName = await Auth.loginGoogle();
            if (displayName) {
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="login d-flex flex-column align-items-center">
            <img className="mx-auto my-5" src={cuate} alt="" />

            <h4 className="mb-0 fw-bold login__title">Hai, fren!</h4>
            <p>Selamat Datang di Aplikasi WoiShop</p>
            <form className="login__form" onSubmit={handleSubmit(onLogin)}>
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
            <div className="fw600 login__choice">Atau Login Melalui</div>

            <Button
                onClick={authGoogle}
                text="Google"
                style="btn-secondary p-3 text-black"
            />
            <div className="fw400 login__text">
                Belum punya akun? Daftar <Link to="/register">Di Sini</Link>
            </div>
            <section className="fw400 login__text mt-0">
                Dengan masuk atau mendaftar, kamu menyetujui Ketentuan Layanan
                dan Kebijakan Privasi
            </section>
        </main>
    );
};

export default Login;
