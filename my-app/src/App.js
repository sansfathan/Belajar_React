import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import User from "./page/user.jsx";
import DetailUser from "./page/detailUser.jsx";
import CreateUser from "./page/createUser.jsx";

function App() {
  return (
    <React.Fragment>
      <h1 className="bg-red-500">Belajar API</h1>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/user/:id/detail" element={<DetailUser />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="*" element={<Navigate to="/user" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
