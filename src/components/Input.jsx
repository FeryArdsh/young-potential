import React from "react";

const Input = ({ icon, text, name, type, handleChange, value }) => {
    return (
        <>
            <div className="position-relative mb-3">
                <i className={`${icon} input__icon`}></i>
                <input
                    type={type}
                    name={name}
                    id={name}
                    className="input"
                    required
                    value={value}
                    onChange={handleChange}
                />
                <label className="ms-5 input__label fw400" htmlFor="noTlp">
                    {text}
                </label>
            </div>
        </>
    );
};

export default Input;
