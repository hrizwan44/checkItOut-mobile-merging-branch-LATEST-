import axios from "axios";
const baseURL = "YOUR_BACKEND_URL";

const API = axios.create({
  baseURL,
  timeout: 60000,
});

export default API;

