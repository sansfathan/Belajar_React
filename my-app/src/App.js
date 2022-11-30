import React from "react";
import Login from "./page/Login.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import Register from "./page/Register.jsx";

function App() {
  return (
    <React.Fragment>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to={"/login"} replace={true}/>}/>
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<Navigate to={"/login"} replace={true}/>}/> */}
      </Routes>
    </React.Fragment>
  );
}
export default App;