import React, { useState } from "react";
import loadingGif from "../assets/loading.gif";
const IsLoading = (data) => {
    return (
        <>
            {data && (
                <div className="text-center mb-3">
                    <img src={loadingGif} alt="Loading..." />{" "}
                </div>
            )}
        </>
    );
};

export default IsLoading;
