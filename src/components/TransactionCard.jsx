import React from "react";
import woishopTransaction from "../assets/woishopTransaction.png";

const TransactionCard = () => {
    return (
        <section className="transaction__card">
            <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                <img src={woishopTransaction} alt="woishop" />
                <span className="transaction__card__status fw600 rounded-pill">
                    Baru
                </span>
            </div>
            <div className="transaction__card__desc mt-3">
                <p className="fw400 fs14 mb-1">Total pesanan 4 produk</p>
                <h6 className="fw600 mt-1 text-dark">Rp. 12.000</h6>
                <p className="transaction__card__date m-0">
                    21 Apr 2021 . 13:30
                </p>
            </div>
        </section>
    );
};

export default TransactionCard;
