import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

const Register = () => {
    return (
        <div>
            <Header title="Daftar Baru" />
            <form className="mb-5">
                <Input text="Nama Lengkap" icon="bi bi-person" name="name" />
                <Input text="Nomor Hp" icon="bi bi-telephone" name="tlp" />
                <Input
                    text="Kode Referal (Opsional)"
                    icon="bi bi-person-plus"
                    name="referal"
                />
            </form>
            <Button text="Daftar" style="btn-primary mt-5" />
        </div>
    );
};

export default Register;
