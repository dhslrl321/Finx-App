import axios from "axios";

const api = axios.create({
  baseURL: "http://52.78.224.139:8100",
});

export const userApi = {
  postLogin: (userEmail, userPassword) =>
    api.post("/login", {
      userEmail,
      userPassword,
    }),
};

export const bankingApi = {
  postAccountList: (token) => {
    api.defaults.headers.common["ourtoken"] = token;
    return api.post("/list");
    // .then(res => { console.log(res); return res; })
  },
  postBalance1: (token) => {
    api.defaults.headers.common["ourtoken"] = token;
    return api.post("/balance", {
      fin_use_num: "199166708057887772866157",
    });
  },
  postBalance2: (token) => {
    api.defaults.headers.common["ourtoken"] = token;
    return api.post("/balance", {
      fin_use_num: "199166708057887772847303",
    });
  },

  getFixData1: (token, account) => {
    api.defaults.headers.common["ourtoken"] = token;
    return api.post("/balance", {
      fin_use_num: account,
    });
  },
};

export const ConnectionTestApi = {
  getLoginPage: () => api.get("/login"),

  getBalance: () =>
    api.get("/balance", {
      balance: "199166708057887772866157",
    }),

  postLogin: () =>
    api.post("/login", {
      userEmail: "finx@naver.com",
      userPassword: "finx12345",
    }),
};

export default api;
