import React from "react";
import google from "../assets/google.png";

const Button = ({ text, style, onClick }) => {
    const icon = (icon) => {
        if (icon === "Google") {
            return (
                <div className="me-2 d-inline">
                    <img src={google} alt="" />
                </div>
            );
        } else {
            return null;
        }
    };
    return (
        <>
            <button onClick={onClick} className={`fw600 ${style}`}>
                {icon(text)}
                {text}
            </button>
        </>
    );
};

export default Button;
