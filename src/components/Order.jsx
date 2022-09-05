import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Order = ({ id, title, price, quantity }) => {
    const [count, setCount] = useState(quantity);

    const increase = () => {
        setCount((count) => count + 1);
        updateProduct();
        console.log(id);
    };

    const decrease = () => {
        if (count > 0) {
            setCount((count) => count - 1);
            updateProduct();
        }
    };

    const updateProduct = async () => {
        try {
            const response = await axios("https://dummyjson.com/carts/2", {
                method: "put",
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify({
                    products: [
                        {
                            id: id,
                            quantity: count,
                        },
                    ],
                }),
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="order d-flex justify-content-between align-items-center my-5">
            <div>
                <button className="order__delete">
                    <i className="bi bi-x-circle-fill"></i>
                </button>
            </div>
            <div className="container order__title">
                {title}
                <h6 className="fw600 m-0">Rp. {price}</h6>
            </div>
            <div className="ms-3 align-self-end d-flex justify-content-center">
                <span className="order__btn d-inline-block">
                    <Button
                        text="-"
                        style="btn-secondary p-0 fs13"
                        onClick={decrease}
                    />
                </span>
                <span className="fw-semibold mx-3">{count}</span>
                <span className="order__btn d-inline-block">
                    <Button
                        text="+"
                        style="btn-primary p-0 fs13"
                        onClick={increase}
                    />
                </span>
            </div>
        </section>
    );
};

export default Order;
