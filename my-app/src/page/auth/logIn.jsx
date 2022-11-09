import React from 'react'
import Button from '../../komponen baru/button';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Input from '../../komponen baru/input';
// import {loginProses} from '../../api/auth';
import {useDispatch} from 'react-redux';
import {authLogin, authRegister} from '../../redux/action/authAction';

export default function Login() {
    let navigate = useNavigate();
  let dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false)
  const [payload, setPayload] = React.useState({
    name : "",
    email: "",
   
  });
  const [errorMessage, setErrorMessage] = React.useState("")
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        setIsLoading(true);
        const response = await dispatch(authLogin(payload));
        console.log('response', response);
        if (response?.status === "Success") {
          return navigate("/artikel", { replace: true });
        } else {
          setErrorMessage(response?.response?.data?.message);
        }
        
    } catch (error) {
        console.log(error);
    } finally {
        setIsLoading(false);
    }
    console.log("running", payload);
  };
  return (
    <div className=" w-1/3 h-80 bg-gradient-to-r from-red-500 to-blue-600 rounded-br-lg">
      <h1 className="mb-5 text-white h-10 py-auto font-bold text-2xl">Log In</h1>
      <form onSubmit={handleSubmit}>
        <p className="text-red-500">{errorMessage}</p>
       
        <Input 
          name="email" 
          placeholder="Email" 
          type="email" 
          onChange={handleChange} 
        />
        <Input 
          name="password" 
          placeholder="Password" 
          type="password" 
          onChange={handleChange} 
        />
       
        <div className="mt-5 flex space-x-5">
          <Button
            color="blue"
            title={isLoading ? 'login' : 'login'}
          />
          <Button title={"Register"}
          onClick={() => {
            return navigate("/register", {replace : true})
          }}/>
        </div>
      </form>
    </div>
  );
}