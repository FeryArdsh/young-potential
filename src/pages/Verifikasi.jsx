import React from "react";
import Header from "../components/Header";
import verifikasi from "../assets/verifikasi.png";
import Button from "../components/Button";
import useCustomForm from "../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Verifikasi = () => {
    const { handleSubmit } = useCustomForm(verif);
    const navigate = useNavigate();

    const inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {
                elmnt.target.form.elements[next].focus();
            }
        } else {
            const next = elmnt.target.tabIndex;
            if (next < 4) {
                elmnt.target.form.elements[next].focus();
            }
        }
    };

    function verif() {
        Swal.fire("Yeyy!!!", "Verifikasi Berhasil", "success");
        navigate("/login");
    }
    return (
        <>
            <Header title="Verifikasi OTP" />
            <main className="d-flex flex-column align-items-center pt-3">
                <img src={verifikasi} alt="verifikasi" />
                <h6 className="fw-bold mt-3">Verifikasi Kode OTP</h6>
                <div className="px-5 text-center">
                    <span className="fs14">
                        Masukkan nomor OTP yang telah kami kirim ke nomor Anda
                    </span>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className=" px-0 container-fluid mt-4"
                >
                    <section className="d-flex justify-content-between mb-5">
                        <input
                            className="input__otp"
                            tabIndex="1"
                            maxLength="1"
                            onKeyUp={(e) => inputfocus(e)}
                            type="text"
                            name="otp1"
                            id="1"
                            placeholder="-"
                        />
                        <input
                            className="input__otp"
                            tabIndex="2"
                            maxLength="1"
                            onKeyUp={(e) => inputfocus(e)}
                            type="text"
                            name="otp2"
                            id="2"
                            placeholder="-"
                        />
                        <input
                            className="input__otp"
                            tabIndex="3"
                            maxLength="1"
                            onKeyUp={(e) => inputfocus(e)}
                            type="text"
                            name="otp3"
                            id="3"
                            placeholder="-"
                        />
                        <input
                            className="input__otp"
                            tabIndex="4"
                            maxLength="1"
                            onKeyUp={(e) => inputfocus(e)}
                            type="text"
                            name="otp4"
                            id="4"
                            placeholder="-"
                        />
                    </section>
                    <Button text="Kirim" style="btn-primary mt-5" />
                </form>
            </main>
        </>
    );
};

export default Verifikasi;
