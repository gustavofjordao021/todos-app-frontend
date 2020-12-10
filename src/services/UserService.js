import axios from "axios";

const baseURL = process.env.REACT_APP_FIREBASE_API_ENDPOINT;

const service = axios.create({
  baseURL,
});

let getUserToken = () => {
  const authToken = localStorage.getItem("AuthToken");
  service.defaults.headers.common = { Authorization: `${authToken}` };
};

const USER_SERVICE = {
  updateUserDetails(userData) {
    getUserToken();
    return service.post("/auth/profile/update", userData);
  },

  retrieveUserDetails() {
    getUserToken();
    return service.get("/auth/profile");
  },

  uploadProfileImage(imageData) {
    getUserToken();
    return service.post("/auth/signup/image", imageData, {
      headers: "multipart/form-data",
    });
  },
};

export default USER_SERVICE;
