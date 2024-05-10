import instance from "./instance";
import { UserLogin } from "../components/login";

export const Login = async (formdata: UserLogin) => {
  try {
    const { data } = await instance.post('/auth/login', formdata);
    return data;
  } catch (error) {
    console.log(error);
  }
};