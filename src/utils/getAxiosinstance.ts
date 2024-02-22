import axios from "axios";

export const getAxiosinstance = axios.create({
  baseURL: "https://instagram-server-jyei.onrender.com/v1/",
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("uid")}`
  }
});
