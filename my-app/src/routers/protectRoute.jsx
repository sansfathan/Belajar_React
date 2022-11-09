import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authMe } from "../redux/action/authAction";
import { syncToken } from "../ApI/baseUrl2";

export default function ProtectRoute({ children }) {
  const auth = Cookies.get("myapps_token");
  const isAuth = useSelector((state) => state?.authprocess?.isAuth);

  console.log("auth =>", auth);
  let [process, setprocess] = React.useState(true);
  let dispatch = useDispatch();
  const onLoaded = async (values) => {
    console.log("ok jalan")
    let result = await dispatch(authMe(values));
    syncToken();
    setprocess(false);

    console.log("res", result);
  };

  React.useEffect(() => {
    if (!isAuth) {
      if (auth !== undefined) {
        onLoaded();
      } else {
        setprocess(false);
      }
    } else {
      syncToken();
      setprocess(false);
    }
  }, []);

  if (process) {
    return <div>Loading</div>;
  } else {
    console.log("auth", auth);
    return auth !== undefined ? children : <Navigate to="/login" />;
  }
}
