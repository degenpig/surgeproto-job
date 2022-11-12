import React from "react";
import { useMatch } from "react-router-dom";

export default function Left({ logoutFunc, setFunc }) {

  const handleClick = (pagename) => {
    setFunc(pagename);
  };
  return (
    <div
      className="sidebar sidebar-style-2"
      style={{ backgroundColor: "#121F3E" }}
    >
      <div
        className="scroll-wrapper sidebar-wrapper scrollbar scrollbar-inner"
        style={{ position: "relative" }}
      >
        <div
          className="sidebar-wrapper scrollbar scrollbar-inner scroll-content scroll-scrolly_visible"
          style={{
            height: "auto",
            marginBottom: "0px",
            marginRight: "0px",
            maxHeight: "595px",
          }}
        >
          <div className="sidebar-content ">
            <ul className="nav nav-primary all_text_color">
              <CustomLink
                to="/admin/dashboard"
                label="Dashboard"
                icon="fas fa-columns fa_1x"
                clickFunc={handleClick}
              />
              <CustomLink
                to="/admin/profile/settings"
                label="Profile"
                icon="fa-solid fa-user-pen fa_1x"
                clickFunc={handleClick}
              />
              <li className="nav-item ">
                <a data-toggle="collapse" href="#user_drp">
                  <font className="fa fa-users fa_1x"></font>
                  <span> Users</span>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="user_drp">
                  <ul className="nav nav-collapse">
                    <li className="">
                      <a href="/admin/manage/users">
                        <span className="sub-item"> Users </span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/admin/manage/adminUsers">
                        <span className="sub-item"> Admin </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <CustomLink
                activeOnlyWhenExact={true}
                to="/admin/manage/subscriptions"
                label="My Subscription"
                icon="fas fa-hand-holding-usd fa_1x"
                clickFunc={handleClick}
              />
              <CustomLink
                activeOnlyWhenExact={true}
                to="/admin/manage/deposits"
                label="Deposits"
                icon="fas fa-donate fa_1x"
                clickFunc={handleClick}
              />
              <CustomLink
                activeOnlyWhenExact={true}
                to="/admin/manage/withdrawals"
                label="Withdrawals"
                icon="fas fa-arrow-circle-down fa_1x"
                clickFunc={handleClick}
              />
              <CustomLink
                activeOnlyWhenExact={true}
                to="/admin/manage/plans"
                label="Fixed Term Deposit Plans"
                icon="fas fa-briefcase fa_1x"
                clickFunc={handleClick}
              />
              <CustomLink
                activeOnlyWhenExact={true}
                to="/admin/send/msg"
                label="Notification"
                icon="fas fa-bell fa_1x"
                clickFunc={handleClick}
              />
              <CustomLink
                activeOnlyWhenExact={true}
                to="https://invest.usdfx.org/support"
                label="Support Center"
                icon="fas fa-teamspeak fa_1x"
                clickFunc={handleClick}
              />
              <li className="nav-item ">
                <a data-toggle="collapse" href="#base">
                  <font className="fas fa-wrench fa_1x"></font>
                  <span>Settings</span>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="base">
                  <ul className="nav nav-collapse">
                    <li className=" ">
                      <a href="/admin/view/settings">
                        <span className="sub-item">Settings</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/admin/profile/kyc">
                        <span className="sub-item">KYC</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="/admin/viewlogs">
                        <span className="sub-item">View user activities</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <CustomLink
                activeOnlyWhenExact={true}
                to="/admin/login"
                label="Logout"
                icon="fas fa-arrow-left fa_1x"
                clickFunc={logoutFunc}
              />
            </ul>
          </div>
        </div>
        <div className="scroll-element scroll-x scroll-scrolly_visible">
          <div className="scroll-element_outer">
            <div className="scroll-element_size"></div>
            <div className="scroll-element_track"></div>
            <div
              className="scroll-bar ui-draggable ui-draggable-handle"
              style={{ width: "88px" }}
            ></div>
          </div>
        </div>
        <div className="scroll-element scroll-y scroll-scrolly_visible">
          <div className="scroll-element_outer">
            <div className="scroll-element_size"></div>
            <div className="scroll-element_track"></div>
            <div
              className="scroll-bar ui-draggable ui-draggable-handle"
              style={{ height: "591px", top: "0px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomLink({ to, label, icon, activeOnlyWhenExact, clickFunc }) {
  let match = useMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  let className = "";
  let funcName = "";
  if (match) {
    className = "nav-item active";
    funcName = clickFunc(label);
  } else {
    className = "nav-item";
    funcName = "";
  }
  return (
    <li className={className} onClick={funcName}>
      <a href={to}>
        <font className={icon}></font> <span> {label}</span>
      </a>
    </li>
  );
}
