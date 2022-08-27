import { useState } from "react";

const useCustomForm = (callback) => {
    const [values, setValues] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    };

    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
    };
};

export default useCustomForm;
