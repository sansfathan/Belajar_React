import Cookies from "js-cookie";
import { authMeProcess, loginProses,registerProses } from "../../ApI/auth";

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      let response = await loginProses(payload);
      let data = response.data;
      console.log("data =>",data)
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}


export function authMe(payload) {
  console.log('ok Kepanggil')
  return async (dispatch) => {
    try {
      let response = await authMeProcess();
      let data = response.data;

      console.log("data =>",data);

      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,

      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}



export function authRegister(payload) {
  return async (dispatch) => {
    try {
      let response = await registerProses(payload);
      let data = response.data;
      console.log("data =>",data)
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}


