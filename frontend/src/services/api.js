import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-ajhw.onrender.com",
});

export default API;