import React from "react";
import google from "../assets/google.png";

const Button = ({ text, style }) => {
    const icon = (icon) => {
        if (icon === "Google") {
            return <img src={google} alt="" />;
        } else {
            return null;
        }
    };
    return (
        <>
            <button className={`fw600 ${style}`}>
                <div className="me-2 d-inline">{icon(text)}</div>
                {text}
            </button>
        </>
    );
};

export default Button;
