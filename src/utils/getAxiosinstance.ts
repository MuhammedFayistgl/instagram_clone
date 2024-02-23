import axios from "axios";

export const getAxiosinstance = axios.create({
  //baseURL: "https://instagram-server-jyei.onrender.com/v1/",      // For production
  baseURL: "http://localhost:1010/v1/",                             // For local development
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("uid")}`
  }
});
