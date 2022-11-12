import axios from "axios";
import { API_URL } from '../config/api';


const getProfile = async () => {
  let res = await axios.get(API_URL + "/getProfile");
  return res.data;
}

const UserService = {
  getProfile
};

export default UserService;
