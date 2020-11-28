import axios from "axios";

const baseURL = process.env.REACT_APP_FIREBASE_API_ENDPOINT;

const service = axios.create({
  baseURL,
});

const AUTH_SERVICE = {
  signup(userData) {
    return service.post("/auth/signup", userData);
  },

  login(userData) {
    return service.post("/auth/login", userData);
  },
};

export default AUTH_SERVICE;
