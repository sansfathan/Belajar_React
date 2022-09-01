import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Settings() {
  return (
    <React.Fragment className="space-x-5">
      <section>
        <Link to="/settings/phone">phone</Link>
        <Link to="/settings/profile">profile</Link>
        <Link to="/settings/Computer">Computer</Link>
      </section>
      <section className="col col-span-7 border">
        <Outlet/>
      </section>
    </React.Fragment>
  );
}
