import React from 'react'
import Button from '../../komponen baru/button';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Input from '../../komponen baru/input';
// import {loginProses} from '../../api/auth';
import {useDispatch} from 'react-redux';
import {authRegister} from '../../redux/action/authAction';

export default function Register() {
    let navigate = useNavigate();
    const [errorName,setErrorName] = React.useState("")
    const [errorEmail,setErrorEmail] = React.useState("")
    const [errorPassword,setErrorPassword] = React.useState("")
    const [errorPasswordConfirm,setErrorPasswordConfirm] = React.useState("")
  let dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false)
  const [payload, setPayload] = React.useState({
    name : "",
    email: "",
    password: "",
    password_confirmation: "",
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
        const response = await dispatch(authRegister(payload));
        console.log('response', response);
        if (response?.status === "Success") {
          return navigate("/user", { replace: true });
        } else {
          setErrorMessage(response?.response?.data?.message);
          setErrorName(response?.response?.data?.errors?.name);
          setErrorEmail(response?.response?.data?.errors?.email);
          setErrorPassword(response?.response?.data?.errors?.password);
          setErrorPasswordConfirm(response?.response?.data?.errors?.password_confirmation);
        }
        
    } catch (error) {
        console.log(error);
    } finally {
        setIsLoading(false);
    }
    console.log("running", payload);
  };
  return (
    <div className=" w-1/3 h-80 bg-gradient-to-r from-sky-500 to-red-600 rounded-br-lg">
      <h1 className="mb-5 text-white h-10 py-auto font-bold text-2xl">Register </h1>
      <form onSubmit={handleSubmit}>
        <p className="text-red-500">{errorMessage}</p>
        <p className="text-red-500">{errorName}</p>
        <Input 
          name="name" 
          placeholder="Name" 
          type="name" 
          onChange={handleChange} 
        />
        <p className="text-red-500">{errorEmail}</p>

        <Input 
          name="email" 
          placeholder="Email" 
          type="email" 
          onChange={handleChange} 
        />
        <p className="text-red-500">{errorPassword}</p>

        <Input 
          name="password" 
          placeholder="Password" 
          type="password" 
          onChange={handleChange} 
        />
        <p className="text-red-500">{errorPasswordConfirm}</p>

        <Input 
          name="password_confirmation" 
          placeholder="Password Confirmation" 
          type="password_confirmation" 
          onChange={handleChange} 
        />
        <div className="mt-5 flex space-x-5">
          <Button
            color="blue"
            title={isLoading ? 'Sign Up' : 'Register'}
          />
        </div>
      </form>
    </div>
  );
}