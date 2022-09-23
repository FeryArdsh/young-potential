const LOCAL_STORAGE = {
    saveDataUser(data) {
        return localStorage.setItem("user", JSON.stringify(data));
    },
    getDataUser() {
        return JSON.parse(localStorage.getItem("user"));
    },
    removeDataUser() {
        return localStorage.removeItem("user");
    },
};

export default LOCAL_STORAGE;
