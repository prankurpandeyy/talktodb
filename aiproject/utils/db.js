import axios from "axios";
const API_KEY = "674c7fc41a71a081f8a0f6f3";

const BASE_URL = "https://demosql-fdcb.restdb.io/rest/demo-data";

const restdbClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-apikey": API_KEY, // API key from .env.local
  },
});

export default restdbClient;
