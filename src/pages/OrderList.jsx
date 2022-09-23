import React from "react";
import Header from "../components/Header";
import TransactionCard from "../components/TransactionCard";

const OrderList = () => {
    return (
        <main>
            <Header title="Daftar Pesanan" />
            <div className="transaction__select d-flex justify-content-around">
                <span className="fw600 fs12 px-2 pb-2 cursor-pointer transaction__select__active">
                    Transaksi Berlangsung
                </span>
                <span className="fw600 fs12 px-2 pb-2 cursor-pointer">
                    Riwayat Pemesanan
                </span>
            </div>
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
        </main>
    );
};

export default OrderList;
