import axios from "axios";

const baseURL = process.env.REACT_APP_FIREBASE_API_ENDPOINT;

const service = axios.create({
  baseURL,
});

const USER_SERVICE = {
  retrieveUserDetails() {
    const authToken = localStorage.getItem("AuthToken");
    service.defaults.headers.common = { Authorization: `${authToken}` };
    return service.get("/auth/profile");
  },

  uploadProfileImage(imageData) {
    const authToken = localStorage.getItem("AuthToken");
    service.defaults.headers.common = { Authorization: `${authToken}` };
    return service.post("/auth/signup/image", imageData);
  },
};

export default USER_SERVICE;
