import React, { useEffect, useState } from "react";
import { endpoint } from "../utils/fetchApi";
import axios from "axios";
import Button from "../components/Button";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import capitalize from "../utils/firstCapitalize";

const DetailProduct = () => {
    const [data, setData] = useState(null);
    const { idProduct } = useParams();
    const getData = async () => {
        try {
            const response = await axios.get(
                `${endpoint.getDetailProduct}/${idProduct}`
            );
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(data);
    return (
        <>
            <Header title="Detail Produk" />
            {data && (
                <div className="p-1 detail__product">
                    <img
                        src={data.images[0]}
                        alt={data.title}
                        className="img-fluid"
                    />
                    <div className="detail__product__category mb-3 mt-5">
                        <span>{capitalize(data.category)}</span>
                    </div>
                    <div>
                        <span className="fw600-fs14 d-block">{data.title}</span>
                        <span className="fw600-fs14">
                            Rp. {data.price * 1000}
                        </span>
                    </div>
                    <div className="mt-5 mb-3">
                        <span className="fw600-fs14 d-block">
                            Deskripsi Produk
                        </span>
                        <span className="detail__product__description">
                            {data.description}
                        </span>
                    </div>
                    <Button text="Tambah Pesanan" style="btn-primary" />
                </div>
            )}
        </>
    );
};

export default DetailProduct;
