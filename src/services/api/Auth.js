import axios from "axios";
import API_ENDPOINT from "../../config/API_ENDPOINT";
import LOCAL_STORAGE from "../localStorage";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig";

const Auth = {
    async login(username, password) {
        const response = await axios(API_ENDPOINT.AUTH.SIGNIN, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: {
                username: username,
                password: password,
            },
        });
        const { firstName, id } = await response.data;
        const data = {
            id,
            firstName,
        };
        LOCAL_STORAGE.saveDataUser(data);
        return response;
    },

    async loginGoogle() {
        const provider = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, provider).then(
            (result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const { displayName } = result.user;
                const data = {
                    id: 12,
                    firstName: displayName,
                };
                LOCAL_STORAGE.saveDataUser(data);
                return displayName;
            }
        );
        return response;
    },

    logout() {
        LOCAL_STORAGE.removeDataUser();
    },
};

export default Auth;
