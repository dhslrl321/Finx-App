import axios from "axios";

const api = axios.create({
  baseURL: "http://52.78.224.139:8100",
});

export const userApi = {
  postSignIn: (email, password) => {
    api.post("/", {
      email,
      password,
    });
  },
  postSignUp: (email, password, code) => {
    api.post("/", {
      email,
      password,
      code,
    });
  },
};

export const bankingApi = {
  postAccountList: (token) => {
    api.defaults.headers.common["Authorization"] = token;
    return api.post("/");
  },
};

export default api;
