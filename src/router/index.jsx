import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../pages/Category";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProductByCategory from "../pages/ProductByCategory";
import Register from "../pages/Register";
import Verifikasi from "../pages/Verifikasi";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verifikasi" element={<Verifikasi />} />
            <Route
                path="category/:categoryName"
                element={<ProductByCategory />}
            />
            <Route
                path="detail-product/:idProduct"
                element={<DetailProduct />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
