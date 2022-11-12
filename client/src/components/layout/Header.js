import React, { useState, useEffect } from "react";
import UserService from "../../services/user";

export default function Header() {
  const [username, setUsername] = useState("");

  async function fetchUser() {
    let res = await UserService.getMe();
    setUsername(res.username);
    // console.log(res.username);
  }

  useEffect(() => {
    fetchUser();
  }, []);
  
  return (
    <div className="panel-header bg-primary-gradient">
      <div className="page-inner py-5" style={{ backgroundColor: "#fff" }}>
        <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row mt--3">
          <div>
            <h5 className="text-grey mt-4">Welcome</h5>
            <h4 className="text-primary pb-2 ">{username}</h4>
          </div>
          <div className="ml-md-auto py-2 py-md-0">
            <a
              href="/admin/manage/investments"
              className="btn btn-primary btn-border btn-round mr-2"
            >
              Investments
            </a>
            <a
              href="/admin/manage/deposits"
              className="btn btn-primary btn-round"
            >
              Deposit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
