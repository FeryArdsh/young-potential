import React from "react";

const Button = ({ text, style }) => {
    return (
        <>
            <button className={`fw600 ${style}`}>{text}</button>
        </>
    );
};

export default Button;
