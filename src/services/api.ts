import axios from "axios";

export const api = axios.create({
    baseURL: "http://161.35.102.170:5556",
});
