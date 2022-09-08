const LOCAL_STORAGE = {
    saveNameUser(firstName) {
        return localStorage.setItem("firstName", firstName);
    },
    saveIdUser(id) {
        return localStorage.setItem("id", id);
    },
    getNameUser() {
        return localStorage.getItem("firstName");
    },
    getidUser() {
        return localStorage.getItem("id");
    },
    removeNameUser() {
        return localStorage.removeItem("firstName");
    },
    removeIdUser() {
        return localStorage.removeItem("id");
    },
};

export default LOCAL_STORAGE;
