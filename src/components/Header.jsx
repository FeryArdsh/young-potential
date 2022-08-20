import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ title }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="header d-flex align-items-center justify-content-between my-3">
                <div className="d-flex align-items-center">
                    <button onClick={() => navigate(-1)} className="icon__back">
                        <i className="bi bi-arrow-left-short"></i>
                    </button>
                    <h6 className="fw600 d-inline m-0">{title}</h6>
                </div>
                <div>
                    <button className="icon__search">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
