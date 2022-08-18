import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header d-flex align-items-center justify-content-between my-3">
                <div className="d-flex align-items-center">
                    <Link to="/" className="icon__back">
                        <i className="bi bi-arrow-left-short"></i>
                    </Link>
                    <h6 className="fw600 d-inline m-0">Detail Toko</h6>
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
