import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Settings from "./pages/settings";
import Detail from "./pages/detail";
import NotFound from "./pages/notFound";
import Phone from "./pages/settings/phone";
import Profile from "./pages/settings/profile";
import Computer from "./pages/settings/computer";

function App() {
  return (
    <React.Fragment>
      <section>
        <NavLink
          exact
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "red",
                }
              : undefined
          }
        >
          Home
        </NavLink>

        <NavLink
          exact
          to="/settings"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "red",
                }
              : undefined
          }
        >
          Settings
        </NavLink>

        <NavLink
          exact
          to="/about"
          className={({ isActive }) =>
            isActive ? " border p-2 bg-red" : undefined
          }
          // style= {({isActive}) =>
          // isActive ?
          //  {
          //   color:"red",
          // }
          // :undefined
          // }
        >
          About
        </NavLink>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />}>
        {/* <Route path="Computer" element={<Computer />} >
        <Route path="Profile" element={<Profile />} >
        <Route path="Phone" element={<Phone />} > */}
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/about/:id/:nama" element={<Detail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
