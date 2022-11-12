import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { API_URL } from '../config/api';


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const register = async (name, username, email, password, passwordResetQuestion, passwordResetAnswer) => {
  let res = await axios.post(API_URL + "/register", {
    name,
    username,
    email,
    password,
    passwordResetQuestion,
    passwordResetAnswer
  });
  return res;
};

const login = async (email, password) => {
  let res = await axios.post(API_URL + "/login", { email, password }, config)
    .then(res => {
      let token = res.data.token;
      localStorage.setItem("token", token);
      console.log(localStorage.getItem("token"));
      setAuthToken(token);
    });
  return res;
};

const logout = () => {

  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return jwt_decode(localStorage.getItem("token")).user;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
