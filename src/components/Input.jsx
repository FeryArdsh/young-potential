import React, { useState } from "react";

const Input = ({ icon, text, type, name, register, isError, validation }) => {
    const [change, setChange] = useState("");

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
                        ...validation,
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
