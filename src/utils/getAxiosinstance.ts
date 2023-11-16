import axios from "axios";

export const getAxiosinstance = axios.create({
  baseURL: "http://localhost:1010/v1/",

  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("uid")}`
  }
});
