import axios from "axios";

export const api = axios.create({
  baseURL: "https://itunes.apple.com/",
  timeout: 1000,
});
