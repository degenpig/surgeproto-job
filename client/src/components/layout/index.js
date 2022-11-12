import React, { useState } from "react";
import Left from "./Left";
import Top from "./Top";
import AuthService from "../../services/auth";

export default function Layout() {
  const [pagename, setPagename] = useState("");

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <div>
      <Top logoutFunc={handleLogout} pagename={pagename} />
      <Left logoutFunc={handleLogout} setFunc={setPagename} />
    </div>
  );
}
