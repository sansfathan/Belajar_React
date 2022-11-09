import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes, Navigate } from "react-router-dom";
import User from "./page/user.jsx";
import DetailUser from "./page/detailUser.jsx";
import CreateUser from "./page/createUser.jsx";
import UpdateUsers from "./page/updateUsers.jsx";
import Login from "./page/auth/logIn.jsx";
import Register from "./page/auth/register.jsx";
import ProtectRoute from "./routers/protectRoute.jsx";
import Artikel from "./page/artikel/index.jsx";
import CreateArtikel from "./page/artikel/createArtikel.jsx";
import UpdateArtikel from "./page/artikel/updateArtikel.jsx";
import DetailArtikel from "./page/artikel/detailArtikel.jsx";


import {useSelector} from "react-redux";
function App() {
  const color = useSelector((state) => state.color)
  const name = useSelector((state) => state.authProgress.name)
  const email = useSelector((state) => state.authProgress.email)
  console.log("color", color.color)
  return (
    <React.Fragment>
     
      <h1
      className="text-white text-center font-bold"
        style={{backgroundColor:color.color}}
      >
        Belajar API
      </h1>
      <p>Nama :{name?.name}</p>
      <p>Email :{email?.email}</p>
      <p>Warna : {color.color}</p>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/artikel"
          element={
            <ProtectRoute>
              <Artikel />
            </ProtectRoute>
          }
        />

        <Route
          path="/artikel/detailArtikel/:slug"
          element={
            <ProtectRoute>
              <DetailArtikel />
            </ProtectRoute>
          }
        />

        <Route
          path="/artikel/createArtikel"
          element={
            <ProtectRoute>
              <CreateArtikel />
            </ProtectRoute>
          }
        />

        <Route
          path="/artikel/updateArtikel/:slug"
          element={
            <ProtectRoute>
              <UpdateArtikel />
            </ProtectRoute>
          }
        />

        <Route path="/user" element={<User />} />
        <Route
          path="/user/:id/detail"
          element={
            <ProtectRoute>
              <DetailUser />
            </ProtectRoute>
          }
        />
        <Route
          path="/user/create"
          element={
            <>
              <CreateUser />
            </>
          }
        />
        <Route
          path="/user/update/:id"
          element={
            <>
              <UpdateUsers />
            </>
          }
        />
        
        <Route path="*" element={<Navigate to="/artikel" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
