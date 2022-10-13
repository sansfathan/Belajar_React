import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes, Navigate } from "react-router-dom";
import User from "./page/user.jsx";
import DetailUser from "./page/detailUser.jsx";
import CreateUser from "./page/createUser.jsx";
import UpdateUsers from "./page/updateUsers.jsx";
import Login from "./page/auth/logIn.jsx";
import ProtectRoute from "./routers/protectRoute.jsx";
import Artikel from "./page/artikel/index.jsx";
import CreateArtikel from "./page/artikel/createArtikel.jsx";
import UpdateArtikel from "./page/artikel/updateArtikel.jsx";
import DetailArtikel from "./page/artikel/detailArtikel.jsx";
function App() {
  return (
    <React.Fragment>
      <h1
        style={{ textAlign: "center", color: "white" }}
        className="bg-red-500"
      >
        Belajar API
      </h1>
      <Routes>
        <Route path="/login" element={<Login />} />
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
          path="/artikel/updateArtikel/:id/:slug"
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
