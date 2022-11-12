/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";

import UserContext from "../common/UserContext";

export default function Top({pagename}) {

  const user = useContext(UserContext);

  return (
    <div className="main-header box_shadow">
      <div
        className="logo-header "
        style={{ backgroundColor: "#121F3E" }}
        align="center"
      >
        <a
          id="dash_logo"
          href="/admin/dashboard"
          className="text-white text-uppercase xbold font_wgh_900"
        >
          USDFX Stablecoin
        </a>
        <button
          id="mlogo_toggle"
          className="navbar-toggler sidenav-toggler ml-auto text-primary"
          type="button"
          data-toggle="collapse"
          data-target="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          &nbsp;
          <i
            className="fa fa-circle-dot text-white"
            style={{ fontSize: "22px" }}
          ></i>
        </button>
        <button className="topbar-toggler more text-primary">
          <i className="fas fa-ellipsis-vertical text-white"></i>
        </button>
        <div className="nav-toggle ">
          <i
            id="dsh_toggle"
            className="fa fa-circle-dot text-white btn toggle-sidebar ml_30px"
            style={{ fontSize: "22px" }}
          ></i>
        </div>
      </div>

      <nav
        className="navbar navbar-header navbar-expand-lg"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container-fluid">
          <div className="collapse" id="search-nav">
            <h4 className="text-primary">{pagename}</h4>
          </div>
          <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
            <li className="nav-item dropdown hidden-caret">
              <a
                className="dropdown-toggle text-primary"
                data-toggle="dropdown"
                href="#"
              >
                <i className="fa fa-flag"></i>
                {" "}EN
                <i className="fa-solid fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-adm animated fadeIn">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://invest.usdfx.org/locale/en"
                  >
                    <i className="fa fa-flag"></i> &nbsp;English
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://invest.usdfx.org/locale/fr"
                  >
                    <i className="fa fa-flag"></i> &nbsp;French
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://invest.usdfx.org/locale/es"
                  >
                    <i className="fa fa-flag"></i> &nbsp;Spanish
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://invest.usdfx.org/locale/pt"
                  >
                    <i className="fa fa-flag"></i> &nbsp;Portuguese
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown hidden-caret"> </li>
            <li className="nav-item dropdown hidden-caret">
              &nbsp;&nbsp;
              <a
                className="dropdown-toggle text-primary"
                href="https://invest.usdfx.org/support"
              >
                <i className="fab fa-teamspeak not_cont text-primary"></i>{" "}
                Support Center
              </a>
            </li>
            <li className="nav-item dropdown hidden-caret"> </li>
            <li className="nav-item dropdown hidden-caret">
              &nbsp;
              <a
                className="dropdown-toggle profile-pic text-primary"
                href="#"
                data-toggle="dropdown"
              >
                <i className="fa-solid fa-circle-user"></i>
                {" "}{user.username}{" "}
                <i className="fa-solid fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-adm animated fadeIn">
                <div className="dropdown-adm-scroll scrollbar-outer">
                  <li>
                    <a className="dropdown-item" href="/admin/manage/users">
                      <i className="fa fa-users"></i> &nbsp;Users
                    </a>
                    <a
                      className="dropdown-item"
                      href="/admin/manage/adminUsers"
                    >
                      <i className="fa fa-users"></i>&nbsp; Manage Admin Users
                    </a>
                    <a
                      className="dropdown-item"
                      href="/admin/manage/investments"
                    >
                      <i className="fa fa-paper-plane"></i>&nbsp; Investments
                    </a>
                    <a className="dropdown-item" href="/admin/manage/deposits">
                      <i className="fas fa-donate"></i>&nbsp; Deposits
                    </a>
                    <a
                      className="dropdown-item"
                      href="/admin/manage/withdrawals"
                    >
                      <i className="fa fa-file"></i>&nbsp; Withdrawals
                    </a>
                    <a className="dropdown-item" href="/admin/manage/packages">
                      <i className="fa fa-briefcase"></i>&nbsp; Packages
                    </a>
                    <a className="dropdown-item" href="/admin/send/msg">
                      <i className="fa fa-bell"></i>&nbsp; Notification
                    </a>
                    <a className="dropdown-item" href="/admin/change/pwd">
                      <i className="fa fa-key"></i>&nbsp; Change Password
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://invest.usdfx.org/support"
                    >
                      <i className="fab fa-teamspeak"></i>&nbsp; Support Center
                    </a>
                    <a className="dropdown-item" href="/admin/viewlogs">
                      <i className="fa fa-list"></i>&nbsp; View user activities
                    </a>
                    <a className="dropdown-item" href="/admin/view/settings">
                      <i className="fa fa-gears"></i>&nbsp; Settings
                    </a>
                    <a className="dropdown-item" href="/logout">
                      <i className="fa fa-arrow-right"></i> &nbsp; Logout
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
