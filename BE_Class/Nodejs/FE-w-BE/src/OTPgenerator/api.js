import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/"
});

export const requestOtp = (phone) => API.post("/request-otp", { phone });

export const verifyOtp = (otp) => API.post("/verify-otp", { otp });
