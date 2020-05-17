import axios from "axios";

export default axios.create({
    baseURL: "https://reqres.in/api/", // external server api
    headers: {
        "Content-type": "application/json"
    }
});
