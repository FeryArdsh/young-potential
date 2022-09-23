import React from "react";
import { Routes, Route } from "react-router-dom";
import Carts from "../pages/Carts";
import Category from "../pages/Category";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import OrderList from "../pages/OrderList";
import ProductByCategory from "../pages/ProductByCategory";
import Register from "../pages/Register";
import Tips from "../pages/Tips";
import Verifikasi from "../pages/Verifikasi";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verifikasi" element={<Verifikasi />} />
            <Route path="carts" element={<Carts />} />
            <Route path="tips" element={<Tips />} />
            <Route path="order-list" element={<OrderList />} />
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
