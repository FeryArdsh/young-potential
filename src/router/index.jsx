import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../pages/Category";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductByCategory from "../pages/ProductByCategory";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="category/:id" element={<ProductByCategory />} />
            <Route path="detail-product" element={<DetailProduct />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
