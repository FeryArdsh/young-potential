const FORMAT_RUPIAH = (nominal) => {
    const price = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(nominal);
    return price;
};

export default FORMAT_RUPIAH;
