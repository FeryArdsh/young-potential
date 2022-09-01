import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onRegister = ({ name, tlp, referal }) => {
        console.log(name, tlp, referal);
        navigate("/verifikasi");
    };

    return (
        <main>
            <Header title="Daftar Baru" />
            <form onSubmit={handleSubmit(onRegister)}>
                <Input
                    type="text"
                    text="Nama Lengkap"
                    icon="bi bi-person"
                    name="name"
                    register={register}
                    validation={{
                        required: "Nama Tidak Boleh Kosong",
                    }}
                    isError={errors.name?.type}
                />
                {errors.name && (
                    <span className="fw400 fs10 err-color text-center d-block mt-2 mb-3">
                        {errors.name?.message}
                    </span>
                )}
                <Input
                    type="text"
                    text="Nomor Hp"
                    icon="bi bi-telephone"
                    name="tlp"
                    register={register}
                    validation={{
                        required: "No. Telepon Tidak Boleh Kosong",
                        pattern: {
                            value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9]{10})+$/i,
                            message: "No. Telepon Tidak Valid",
                        },
                    }}
                    isError={errors.tlp?.type}
                />
                {errors.tlp && (
                    <span className="fw400 fs10 err-color text-center d-block mt-2 mb-3">
                        {errors.tlp?.message}
                    </span>
                )}
                <Input
                    type="text"
                    text="Kode Referal (Opsional)"
                    icon="bi bi-person-plus"
                    name="referal"
                    register={register}
                    thisRequired={true}
                    isError={errors.referal?.type}
                />
                <Button text="Daftar" style="btn-primary mt-5" />
            </form>
        </main>
    );
};

export default Register;
