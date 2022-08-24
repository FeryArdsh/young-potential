import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const name = localStorage.getItem("firstName");
    return (
        <>
            <h1>Home</h1>
            <h3 className="text-success">Welcome Back {name}!!!</h3>
            <Link to="category">See Category</Link>
        </>
    );
};

export default Home;
