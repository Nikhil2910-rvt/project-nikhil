import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
  console.log(process.env.BACKEND_URL);
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/auth/login", user, {
      withCredentials: true,
    });
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
