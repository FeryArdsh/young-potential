import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onRegister = ({ name }) => {
        console.log(name);
    };

    return (
        <div>
            <Header title="Daftar Baru" />
            <form onSubmit={handleSubmit(onRegister)}>
                <Input
                    type="text"
                    text="Nama Lengkap"
                    icon="bi bi-person"
                    name="name"
                    register={register}
                    thisRequired={true}
                    isError={errors.name?.type}
                />
                <span className="fw400 fs10 err-color text-center d-block mt-2 mb-3">
                    {errors.name?.type === "required" &&
                        "Username Tidak Boleh Kosong"}
                </span>
                <Input
                    type="text"
                    text="Nomor Hp"
                    icon="bi bi-telephone"
                    name="tlp"
                    register={register}
                    thisRequired={true}
                    isError={errors.tlp?.type}
                />
                <span className="fw400 fs10 err-color text-center d-block mt-2 mb-3">
                    {errors.tlp?.type === "required" &&
                        "Username Tidak Boleh Kosong"}
                </span>
                <Input
                    type="text"
                    text="Kode Referal (Opsional)"
                    icon="bi bi-person-plus"
                    name="referal"
                    register={register}
                    thisRequired={true}
                    isError={errors.referal?.type}
                />
                <span className="fw400 fs10 err-color text-center d-block mt-2 mb-3">
                    {errors.referal?.type === "required" &&
                        "Username Tidak Boleh Kosong"}
                </span>
                <Button text="Daftar" style="btn-primary mt-5" />
            </form>
        </div>
    );
};

export default Register;
