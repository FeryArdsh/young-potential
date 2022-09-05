import React from "react";
import iconPickup from "../assets/icon-pickup.png";
import logo from "../assets/logo.png";
import logoPending from "../assets/logo-pending.png";

const RadioBtn = ({ name, id }) => {
    const icon = (id) => {
        if (id === "pickup") {
            return iconPickup;
        } else if (id === "express") {
            return logo;
        } else {
            return logoPending;
        }
    };
    return (
        <>
            <div className="radio form-check form-check-reverse container p-3 pe-3 d-flex justify-content-between align-items-center">
                <label
                    className="form-check-label fw600-fs14 radio__lable"
                    htmlFor={id}
                >
                    <span className="radio__icon d-inline-block text-center p-1 me-3">
                        <img src={icon(id)} alt="" className="img-fluid" />
                    </span>
                    <span>{name}</span>
                </label>

                <input
                    className="radio__input"
                    type="radio"
                    name="delivery"
                    id={id}
                />
            </div>
        </>
    );
};

export default RadioBtn;
