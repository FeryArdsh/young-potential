import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { decrease, increase, deleteProduct } from "../services/redux/Cart";
import FORMAT_RUPIAH from "../utils/FORMAT_RUPIAH";

const Order = ({ id, title, price, quantity }) => {
    const dispatch = useDispatch();

    const onIncrease = () => {
        console.log(id);
        dispatch(increase(id));
    };

    const onDecrease = () => {
        if (quantity > 0) {
            dispatch(decrease(id));
        }
    };

    const onDelete = () => {
        dispatch(deleteProduct(id));
    };

    return (
        <section className="order d-flex justify-content-between align-items-center my-5">
            <div>
                <button
                    onClick={onDelete}
                    type="button"
                    className="order__delete"
                >
                    <i className="bi bi-x-circle-fill"></i>
                </button>
            </div>
            <div className="container order__title">
                {title}
                <h6 className="fw600 m-0">{FORMAT_RUPIAH(price * 14000)}</h6>
            </div>
            <div className="ms-3 align-self-end d-flex justify-content-center">
                <span className="order__btn d-inline-block">
                    <Button
                        text="-"
                        style="btn-secondary p-0 fs13"
                        onClick={onDecrease}
                        type="button"
                    />
                </span>
                <span className="fw-semibold mx-3">{quantity}</span>
                <span className="order__btn d-inline-block">
                    <Button
                        text="+"
                        style="btn-primary p-0 fs13"
                        onClick={onIncrease}
                        type="button"
                    />
                </span>
            </div>
        </section>
    );
};

export default Order;
