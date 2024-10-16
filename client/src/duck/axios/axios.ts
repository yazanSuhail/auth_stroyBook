import axiosLib from "axios";

export const axios = axiosLib.create({
  baseURL: "http://localhost:5001",
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
});
