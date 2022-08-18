import React from "react";

const Layout = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="layout">{props.children}</div>
        </div>
    );
};

export default Layout;
