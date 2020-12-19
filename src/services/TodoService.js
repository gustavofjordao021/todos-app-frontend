import axios from "axios";

const baseURL = process.env.REACT_APP_FIREBASE_API_ENDPOINT;

const service = axios.create({
  baseURL,
});

let getUserToken = () => {
  const authToken = localStorage.getItem("AuthToken");
  service.defaults.headers.common = { Authorization: `${authToken}` };
};

const TODO_SERVICE = {
  getUserTodos() {
    getUserToken();
    return service.get("/todos");
  },

  deleteTodo(todoId) {
    getUserToken();
    return service.delete(`/todos/delete/${todoId}`);
  },
};

export default TODO_SERVICE;
