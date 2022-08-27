import React, { useState } from "react";

const Input = ({
    icon,
    text,
    type,
    name,
    register,
    thisRequired,
    isError,
    validation,
}) => {
    const [change, setChange] = useState("");

    // Isi Validation :

    // maxLength: {
    //     value: 2,
    //     message: "Tidak boleh kurang dari 2",
    // }

    return (
        <>
            <div className="position-relative mt-3">
                <i className={`${icon} input__icon`}></i>
                <input
                    type={type}
                    className={`input 
                    ${change && "input__float"} ${isError && "input__error"}`}
                    {...register(name, {
                        onChange: (e) => {
                            setChange(e.target.value);
                        },
                        required: thisRequired,
                        // Cara memasukkan validation sesuai obcejt
                    })}
                />
                <label className="ms-5 input__label fw400" htmlFor="noTlp">
                    {text}
                </label>
            </div>
        </>
    );
};

export default Input;
