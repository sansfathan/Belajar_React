import React from 'react';
import PO from '../image/PO.jpg';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [payload, setPayload] = React.useState({
    email: '',
    Password: '',
  });
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  let navigate = useNavigate();
  return (
    <div className="bg-gray-600 w-screen h-screen p-16">
      <div className="flex justify-between  h-[90%] w-[1050px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md m-auto ">
        <div className="w-[60%] h-[100%] p-16 ">
          <p className="font-bold text-start text-white text-2xl">Log In</p>

          <div className="flex items-center ml-2 ">
            {/* <p>Email</p> */}
            <input
              name="email"
              label="email"
              placeholder={'email'}
              type="email"
              onChange={handleChange}
              className="border-2 mt-5 mr-10 text-black p-5 h-12 w-52 rounded-full border-t-[#0002A1] border-r-[#0002A1] border-b-red-600 border-l-red-600"
            />
            <input
              name="password"
              label="password"
              placeholder={'password'}
              type="password"
              onChange={handleChange}
              className="border-2 mt-5 text-black p-5 h-12 w-52 rounded-full border-t-[#0002A1] border-r-[#0002A1] border-b-red-600 border-l-red-600"
            />
          </div>
          <button className="font-bold ml-80 mt-2">Forgot Password</button>
          <div className="flex justify-around items-center mt-5">
            <div className="w-[40%] h-[2px] bg-white rounded-sm"></div>
            <h1 className="text-base text-white">OR</h1>
            <div className="w-[40%] h-[2px] bg-white rounded-sm"></div>
          </div>
          <div className="flex mt-5">
            <button className="border border-t-[#0002A1] border-r-[#0002A1] border-b-red-600 border-l-red-600 w-48 h-12 rounded-full bg-gradient-to-r from-red-500 to-blue-500 font-bold text-white">
              Sign Up with Google
            </button>
            <button className="border border-t-[#0002A1] border-r-[#0002A1] border-b-red-600 border-l-red-600 ml-2 w-24 h-12 rounded-full font-bold text-white">
              Facebook
            </button>
            <button className="border border-t-[#0002A1] border-r-[#0002A1] border-b-red-600 border-l-red-600 ml-2 w-24 h-12 rounded-full font-bold text-white">
              Twitter
            </button>
          </div>

          <button
            // onClick={() => {
            //   return navigate(`/register`);
            // }}
            className="w-[40%] h-10 bg-[#000] mt-6 ml-2 rounded-full font-bold text-white border-2 border-white shadow-md shadow-gray-500"
          >
            Log In
          </button>
          <button
            onClick={() => {
              return navigate(`/register`);
            }}
            className="flex ml-20 mt-5"
          >
            Don’t have an account ?<p className="font-bold ml-2">Sign Up</p>
          </button>
        </div>
        <div className="">
          <img src={PO} className="w-full h-full rounded-md" />
        </div>
      </div>
    </div>
  );
}
