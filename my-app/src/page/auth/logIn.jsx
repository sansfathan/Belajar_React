import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen baru/button";
import Input from "../../komponen baru/input";
import { loginProses } from "../../ApI/auth";

export default function Login() {
  let navigate = useNavigate();
  const [payload, setPayload] = React.useState({
    email: "",
    Password: "",
  });
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await loginProses(payload);
      console.log("response =>", response)
      const data = response.data;
      Cookies.set("myapps_token", response?.data.token);
      return navigate("/user", { replace: true });
      
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
    console.log("jalan =>", payload);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>Log In Form</h1>
      <div
        style={{
          borderRadius: "5px",
          backgroundColor: "lightsalmon",
          width: "290px",
          height: "250px",
          border: "1px solid black",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            label={"email :"}
            placeholder={"email"}
            onChange={handleChange}
            type="email"
          />
          <Input
            name="password"
            label={"password :"}
            placeholder={"password"}
            onChange={handleChange}
            type="password"
          />
          <Button
            color="blue"
            title={"Login"}
            
          />
        </form>
      </div>
    </div>
  );
}
