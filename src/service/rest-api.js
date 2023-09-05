import axios from "axios";
import { getToken } from "./authUtil";

const handleLogin = async (email, password) => {
  const url = "http://localhost:3000/auth/login";
  const payload = { email, password };
  const response = await axios.post(url, payload);
  return response;
};

const listUser = async () => {
  const url = "http://localhost:3000/user";
  const response = await axios.get(url, getHeader());
  return response;
};

const editUser = async (id, user) => {
  const url = "http://localhost:3000/user/" + id;
  const response = await axios.patch(url, user, getHeader());
  return response;
};

const deleteUser = async (id) => {
  const url = "http://localhost:3000/user/" + id;
  const response = await axios.delete(url, getHeader());
  return response;
};

const getUser = async (id) => {
  const url = "http://localhost:3000/user/" + id;
  const response = await axios.get(url, getHeader());
  return response;
};

const getHeader = () => {
  let config = {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
  return config;
};
export { handleLogin, listUser, getUser, deleteUser, editUser };
