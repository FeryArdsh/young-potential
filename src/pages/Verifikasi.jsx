import React from "react";
import Header from "../components/Header";
import verifikasi from "../assets/verifikasi.png";
import Button from "../components/Button";
import useCustomForm from "../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";

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
            console.log("next");

            const next = elmnt.target.tabIndex;
            if (next < 4) {
                elmnt.target.form.elements[next].focus();
            }
        }
    };

    function verif() {
        navigate("/login");
    }
    return (
        <div>
            <Header title="Verifikasi OTP" />
            <div className="d-flex flex-column align-items-center pt-3">
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
                    <div className="d-flex justify-content-between mb-5">
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
                    </div>
                    <Button text="Kirim" style="btn-primary mt-5" />
                </form>
            </div>
        </div>
    );
};

export default Verifikasi;
