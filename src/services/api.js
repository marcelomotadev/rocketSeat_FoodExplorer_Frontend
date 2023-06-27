import axios from "axios";

export const api = axios.create({
    // baseURL: "rocketseatfoodexplorerbackend.up.railway.app"
    baseURL: "https://foodexplorer-api-kdd6.onrender.com"
    // baseURL: "http://localhost:3333"
});