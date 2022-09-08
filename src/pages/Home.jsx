import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/Button";
import LOCAL_STORAGE from "../services/localStorage";

const Home = () => {
    const [name, setName] = useState("");
    const logout = () => {
        LOCAL_STORAGE.removeNameUser();
        LOCAL_STORAGE.removeIdUser();
        setName(LOCAL_STORAGE.getNameUser());
        Swal.fire("Berhasil Logout", "", "success");
    };
    useEffect(() => {
        setName(LOCAL_STORAGE.getNameUser());
    }, []);

    return (
        <>
            <h1>Home</h1>
            {name ? (
                <h3 className="text-success">Welcome Back {name}!!!</h3>
            ) : (
                <h3 className="text-danger">Kamu belum login !!!</h3>
            )}

            <div>
                <Link to="category">See Category</Link>
            </div>
            {name && (
                <div>
                    <Link to="carts">Keranjang</Link>
                </div>
            )}

            <div className="p-5">
                {name ? (
                    <Button
                        text="Logout"
                        style="btn-secondary mt-4"
                        onClick={logout}
                    />
                ) : (
                    <Link to="login">
                        <Button text="Login" style="btn-primary" />
                    </Link>
                )}
            </div>
        </>
    );
};

export default Home;
