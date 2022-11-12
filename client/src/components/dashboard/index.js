/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useContext } from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

import UserContext from "../common/UserContext";
// import DepositDialog from "../common/DepositDialog";

export default function Dashboard() {
  const user = useContext(UserContext);
  // console.log(user);
  return (
    <div className="main-panel">
      <div className="content">
        <Header />
        {/* <DepositDialog/> */}
        {user.role === "admin" ? <Admin /> : <User />}
        <Footer />
      </div>
    </div>
  );
}

const Admin = () => {
  return (
    <div className="page-inner mt--5 bg-white">
      <div className="row mt--2">
        <div className="col-md-6">
          <div className="card full-height">
            <div className="card-body">
              <div className="card-title">
                <h5 className="text-primary">Balance Summary</h5>
              </div>
              <div className="row py-3 " style={{ position: "relative" }}>
                <div className="col-md-4 d-flex flex-column justify-content-around">
                  <div className="border_btm_1">
                    <p className="mt-4">USD 50081</p>
                    <p className="text-black op-8">Investment</p>
                    <br />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border_btm_1">
                    <p className="mt-4">USD 23</p>
                    <p className=" text-black op-8">Deposits </p>
                    <br />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border_btm_1">
                    <p className="mt-4">USD 0</p>
                    <p className="text-black op-8">Withdrawals</p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card full-height">
            <div className="card-body">
              <div className="card-title">
                <h5 className="text-primary">Statistics Summary</h5>
              </div>
              <div className="d-flex flex-wrap justify-content-around pb-2 pt-4">
                <div className="px-2 pb-2 pb-md-0 text-center">
                  <div id="circles-1">
                    <div
                      className="circles-wrp"
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="90"
                      >
                        <path
                          fill="transparent"
                          stroke="#f1f1f1"
                          strokeWidth="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 1 1 44.942357332570026 3.500040032273624 Z"
                          className="circles-maxValueStroke"
                        ></path>
                        <path
                          fill="transparent"
                          stroke="#FF9E27"
                          strokeWidth="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 1 1 20.136938054081046 11.772328539703594 "
                          className="circles-valueStroke"
                        ></path>
                      </svg>
                      <div
                        className="circles-text"
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          textAlign: "center",
                          width: "100%",
                          fontSize: "31.5px",
                          height: "90px",
                          lineHeight: "90px",
                        }}
                      >
                        44
                      </div>
                    </div>
                  </div>
                  <p className=" mt-3 mb-0">Users</p>
                </div>
                <div className="px-2 pb-2 pb-md-0 text-center">
                  <div id="circles-2">
                    <div
                      className="circles-wrp"
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="90"
                      >
                        <path
                          fill="transparent"
                          stroke="#f1f1f1"
                          strokeWidth="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 1 1 44.942357332570026 3.500040032273624 Z"
                          className="circles-maxValueStroke"
                        ></path>
                        <path
                          fill="transparent"
                          stroke="#2BB930"
                          strokeWidth="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 1 1 44.942357332570026 3.500040032273624 "
                          className="circles-valueStroke"
                        ></path>
                      </svg>
                      <div
                        className="circles-text"
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          textAlign: "center",
                          width: "100%",
                          fontSize: "31.5px",
                          height: "90px",
                          lineHeight: "90px",
                        }}
                      >
                        9
                      </div>
                    </div>
                  </div>
                  <p className=" mt-3 mb-0">Investments</p>
                </div>
                <div className="px-2 pb-2 pb-md-0 text-center">
                  <div id="circles-3">
                    <div
                      className="circles-wrp"
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="90"
                      >
                        <path
                          fill="transparent"
                          stroke="#f1f1f1"
                          strokeWidth="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 1 1 44.942357332570026 3.500040032273624 Z"
                          className="circles-maxValueStroke"
                        ></path>
                        <path
                          fill="transparent"
                          stroke="#F25961"
                          strokeWidth="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 1 1 44.942357332570026 3.500040032273624 "
                          className="circles-valueStroke"
                        ></path>
                      </svg>
                      <div
                        className="circles-text"
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          textAlign: "center",
                          width: "100%",
                          fontSize: "31.5px",
                          height: "90px",
                          lineHeight: "90px",
                        }}
                      >
                        1
                      </div>
                    </div>
                  </div>
                  <p className=" mt-3 mb-0">Deposits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div id="prnt"></div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title text-primary">
                <h5>Monthly Breakdown </h5>
              </div>
            </div>
            <div className="card-body pb-0">
              <div className="row">
                <div className="col-sm-12 " align="center">
                  <form id="search_form_stat" action="#">
                    <div className=" margin_top_10 d-flex flex-row justify-content-center align-items-center">
                      <input
                        type="hidden"
                        name="_token"
                        value="nu9hr8mEuVN9gTWI0FVLwwGbbVWKRfBeD8fThqpe"
                      />
                      <label>
                        <b>Search (YYYY-MM) &nbsp;</b>
                      </label>
                      <input
                        id="datepicker"
                        value="2022-09"
                        type="text"
                        name="search_val"
                        className="form-control input_height_45 "
                        required=""
                        placeholder=""
                      />

                      <button
                        className="btn"
                        style={{
                          marginLeft: "-50px",
                          backgroundColor: "transparent",
                        }}
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="col-sm-12"
                  align="center"
                  style={{ paddingTop: "30px" }}
                >
                  <span
                    className="btn btn-default"
                    id="search_mt"
                    align="center"
                  >
                    All time statistics
                  </span>
                  <br />
                  <br />
                </div>
              </div>
              <div className="row margin_top_10">
                <div
                  className="col-6 col-sm-3 btn_prepend"
                  onClick="load_Stat()"
                >
                  <div className="card card-stats card-primary card-round">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-5">
                          <div className="icon-big text-center">
                            <i className="fa fa-users"></i>
                          </div>
                        </div>
                        <div className="col-7 col-stats">
                          <div className="numbers">
                            <p className="card-category">Users</p>
                            <h6 id="uCount" className="">
                              49
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-6 col-sm-3 btn_prepend"
                  onClick="load_iStat()"
                >
                  <div className="card card-stats card-success card-round">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <div className="icon-big text-center">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                          </div>
                        </div>
                        <div className="col-9 col-stats">
                          <div className="numbers">
                            <p className="card-category">Investment</p>
                            <h6 id="iCount" className="">
                              USD 50081
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-6 col-sm-3 btn_prepend"
                  onClick="load_dStat()"
                >
                  <div className="card card-stats card-secondary  card-round">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <div className="icon-big text-center">
                            <i className="fa-solid fa-sack-dollar"></i>
                          </div>
                        </div>
                        <div className="col-9 col-stats">
                          <div className="numbers">
                            <p className="card-category">Deposits</p>
                            <h6 id="dCount" className="">
                              USD 23
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-6 col-sm-3 btn_prepend"
                  onClick="load_wStat()"
                >
                  <div className="card card-stats card-warning card-round">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <div className="icon-big text-center">
                            <i className="fa-regular fa-square-dollar"></i>
                          </div>
                        </div>
                        <div className="col-9 col-stats">
                          <div className="numbers">
                            <p className="card-category">Withdrawal</p>
                            <h6 id="wCount" className="">
                              USD 375
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-head-row card-tools-still-right">
                    <div className="card-title">
                      <h5 className="text-primary"> Transactions </h5>
                    </div>
                    <div className="card-tools">
                      <ul className="nav nav-tab" id="myTab" role="tablist">
                        <li className="nav-item ">
                          <a
                            className="nav-link active custom-tab"
                            id="pills-widget-tab"
                            data-toggle="pill"
                            href="#tab_in"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            <i className="fas fa-arrow-down"></i>
                            In
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link custom-tab"
                            id="pills-lang_tab-tab"
                            data-toggle="pill"
                            href="#tab_out"
                            role="tab"
                            aria-controls="pills-lang_tab"
                            aria-selected="false"
                          >
                            <i className="fas fa-arrow-up"></i>
                            Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active "
                      id="tab_in"
                      role="tabpanel"
                    >
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-arrow-down fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>Mklonko Deposited </h6>
                            </div>
                            <div className="col text-success" align="right">
                              <b>+23</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">USDT</div>
                            <div className="col " align="right">
                              Approved
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab_out" role="tabpanel">
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-arrow-right fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>karim39 requested withdrawal </h6>
                            </div>
                            <div className="col text-danger" align="right">
                              <b>-USD 125</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">2022-09-12 17:40:57</div>
                            <div className="col" align="right">
                              Pending
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-arrow-right fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>karim39 requested withdrawal </h6>
                            </div>
                            <div className="col text-danger" align="right">
                              <b>-USD 125</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">2022-09-12 17:38:11</div>
                            <div className="col" align="right">
                              Pending
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-arrow-right fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>karim39 requested withdrawal </h6>
                            </div>
                            <div className="col text-danger" align="right">
                              <b>-USD 125</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">2022-09-12 17:23:10</div>
                            <div className="col" align="right">
                              Pending
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-head-row ">
                    <h5 className=" text-primary"> Recent Investments </h5>
                    <div className="card-tools card-tools-still-right">
                      <a href="/admin/manage/investments">All Investments</a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-dollar fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>Joylen Invested </h6>
                            </div>
                            <div className="col text-primary" align="right">
                              <b>1000</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">365 Days</div>
                            <div className="col" align="right">
                              Active
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-dollar fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>ehab Invested </h6>
                            </div>
                            <div className="col text-primary" align="right">
                              <b>100</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">365 Days</div>
                            <div className="col" align="right">
                              Active
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-dollar fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>mklonko Invested </h6>
                            </div>
                            <div className="col text-primary" align="right">
                              <b>23</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">365 Days</div>
                            <div className="col" align="right">
                              Active
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-dollar fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>usdfx Invested </h6>
                            </div>
                            <div className="col text-primary" align="right">
                              <b>10000</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">365 Days</div>
                            <div className="col" align="right">
                              Active
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-dollar fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>Xavier Invested </h6>
                            </div>
                            <div className="col text-primary" align="right">
                              <b>10000</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">365 Days</div>
                            <div className="col" align="right">
                              Active
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-dollar fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>j199502 Invested </h6>
                            </div>
                            <div className="col text-primary" align="right">
                              <b>1000</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">365 Days</div>
                            <div className="col" align="right">
                              Active
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-dollar fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>Usdfxskypink Invested </h6>
                            </div>
                            <div className="col text-primary" align="right">
                              <b>1000</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">365 Days</div>
                            <div className="col" align="right">
                              Active
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-dollar fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>nomadfury Invested </h6>
                            </div>
                            <div className="col text-primary" align="right">
                              <b>1000</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">365 Days</div>
                            <div className="col" align="right">
                              Active
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row border_btm p-3">
                        <div className="col-xs d-flex justify-content-center align-items-center ">
                          <i className="fa-solid fa-circle-dollar fa-2x text-primary"></i>
                        </div>
                        <div className="col mt-1">
                          <div className="row">
                            <div className="col-8">
                              <h6>Dubai Invested </h6>
                            </div>
                            <div className="col text-primary" align="right">
                              <b>25958</b>
                            </div>
                          </div>
                          <div className="row mt--2">
                            <div className="col-8">365 Days</div>
                            <div className="col" align="right">
                              Active
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const User = () => {
  return (
    <div className="page-inner mt--5">
      <div className="row mt--2">
        <div className="col-md-6">
          <div className="card full-height">
            <div className="card-body">
              <div className="card-title text-primary">
                <h5>Balances</h5>
              </div>
              <div className="row mt-5">
                <div className="col-md-4 ">
                  <a
                    title="Click to withdraw"
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#wallet_wd"
                  >
                    <div className="border_btm">
                      <p className="text_black">Wallet</p>
                      <p className="text-primary">USD 0</p>
                      <div className="margin_n10 text-success">
                        Withdraw Fund
                      </div>
                      <br />
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="#">
                    <div className="border_btm">
                      <p className="text_black">Earning</p>
                      <p className="text-primary">USD 0</p>
                      <div className="margin_n10 text-success"> </div>
                      <br />
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    id="wd_ref_bal"
                    title="Click to withdraw"
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#ref_wd"
                  >
                    <div className="border_btm">
                      <p className="text_black">Referral bonus</p>
                      <p className="text-primary">USD 0</p>
                      <div className="margin_n10 text-success">
                        Withdraw Fund
                      </div>
                      <br />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card full-height">
            <div className="card-body">
              <div className="card-title">
                <h5 className="text-primary">Overall Statistics</h5>
              </div>
              <div className="card-category"></div>
              <div className="d-flex flex-wrap justify-content-around pb-2 pt-4">
                <div className="px-2 pb-2 pb-md-0 text-center">
                  <div id="circles-1">
                    <div
                      className="circles-wrp"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="90"
                      >
                        <path
                          fill="transparent"
                          stroke="#f1f1f1"
                          stroke-width="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 1 1 44.942357332570026 3.500040032273624 Z"
                          className="circles-maxValueStroke"
                        ></path>
                        <path
                          fill="transparent"
                          stroke="#FF9E27"
                          stroke-width="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 0 1 47.5629156305626 3.579214596164192 "
                          className="circles-valueStroke"
                        ></path>
                      </svg>
                      <div
                        className="circles-text"
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          textAlign: "center",
                          width: "100%",
                          fontSize: "31.5px",
                          height: "90px",
                          lineHeight: "90px",
                        }}
                      >
                        0
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3 mb-0">Investments</div>
                </div>
                <div className="px-2 pb-2 pb-md-0 text-center">
                  <div id="circles-2">
                    <div
                      className="circles-wrp"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="90"
                      >
                        <path
                          fill="transparent"
                          stroke="#f1f1f1"
                          stroke-width="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 1 1 44.942357332570026 3.500040032273624 Z"
                          className="circles-maxValueStroke"
                        ></path>
                        <path
                          fill="transparent"
                          stroke="#2BB930"
                          stroke-width="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 0 1 47.5629156305626 3.579214596164192 "
                          className="circles-valueStroke"
                        ></path>
                      </svg>
                      <div
                        className="circles-text"
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          textAlign: "center",
                          width: "100%",
                          fontSize: "31.5px",
                          height: "90px",
                          lineHeight: "90px",
                        }}
                      >
                        0
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3 mb-0">Withdrawals</div>
                </div>
                <div className="px-2 pb-2 pb-md-0 text-center">
                  <div id="circles-3">
                    <div
                      className="circles-wrp"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="90"
                      >
                        <path
                          fill="transparent"
                          stroke="#f1f1f1"
                          stroke-width="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 1 1 44.942357332570026 3.500040032273624 Z"
                          className="circles-maxValueStroke"
                        ></path>
                        <path
                          fill="transparent"
                          stroke="#F25961"
                          stroke-width="7"
                          d="M 44.99154756204665 3.500000860767564 A 41.5 41.5 0 0 1 47.5629156305626 3.579214596164192 "
                          className="circles-valueStroke"
                        ></path>
                      </svg>
                      <div
                        className="circles-text"
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          textAlign: "center",
                          width: "100%",
                          fontSize: "31.5px",
                          height: "90px",
                          lineHeight: "90px",
                        }}
                      >
                        0
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3 mb-0">Downlines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="wallet_wd"
        className="modal fade"
        role="dialog"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-body row p-0">
              <div className="col-sm-4 pop_up_modal_side_bg d-flex flex-column justify-content-center align-items-center">
                <div className="text-white text-center">
                  <i className="fa-solid fa-circle-info fa-3x text-white"></i>
                  <br />
                  Wallet Withdrawal
                </div>
              </div>
              <div className="col-sm-8 pr-4">
                <div className=" mt-3 text-center ">
                  <br />
                  <h6 className="">
                    <b>Available Balance:</b>
                  </h6>
                  <h4 className="text-danger">USD 0</h4>
                </div>

                <form id="wd_formssss" action="" method="post">
                  <div className="form-group" align="left">
                    <input
                      type="hidden"
                      className="form-control"
                      name="_token"
                      value="I6OVjmniOZfnBbHQbSmJtNdbo5Z2XiBEeCSXDGTf"
                    />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        id="wd_amt"
                        type="text"
                        className="form-control"
                        name="amt"
                        required=""
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <select name="bank" className="form-control" required="">
                        <option selected="" disabled="">
                          Select account
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <br />
                    <br />
                    <button className="collb btn btn-info">Withdraw</button>
                    <span>
                      <a
                        id="wallet_wd_close"
                        href="javascript:void(0)"
                        className="collcc btn btn-danger"
                        data-dismiss="modal"
                      >
                        Cancel
                      </a>
                    </span>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          id="ref_wd"
          className="modal fade"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-body row p-0">
                <div className="col-sm-4 pop_up_modal_side_bg d-flex flex-column justify-content-center align-items-center">
                  <div className="text-white text-center">
                    <i className="fa-solid fa-circle-info fa-3x text-white"></i>
                    <br />
                    Referral Withdrawal
                  </div>
                </div>
                <div className="col-sm-8 pr-4">
                  <div className=" mt-3 text-center ">
                    <br />
                    <h6 className="">
                      <b>Total Earning:</b>
                    </h6>
                    <h4 className="text-danger">USD 0</h4>
                  </div>

                  <form id="wd_formssss" action="" method="post">
                    <div className="form-group" align="left">
                      <input
                        type="hidden"
                        className="form-control"
                        name="_token"
                        value="I6OVjmniOZfnBbHQbSmJtNdbo5Z2XiBEeCSXDGTf"
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          id="ref_amt"
                          type="text"
                          className="form-control"
                          name="amt"
                          required=""
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <select
                          name="bank"
                          className="form-control"
                          required=""
                        >
                          <option selected="" disabled="">
                            Select account
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <br />
                      <br />
                      <button className="collb btn btn-info">Withdraw</button>
                      <span>
                        <a
                          id="wallet_wd_close"
                          href="javascript:void(0)"
                          className="collcc btn btn-danger"
                          data-dismiss="modal"
                        >
                          Cancel
                        </a>
                      </span>
                      <br />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="prnt"></div>
        <div className="row">
          <div className="col-md-12">
            <div className="card pb-5 ">
              <div className="card-header">
                <div className="card-title text-primary">
                  <h5>Refer and Earn</h5>
                </div>
              </div>
              <div className="card-body pb-2">
                <p>Use the link below to invite your friends </p>
                <div className="alert text_nowrap1 ref_link_copy">
                  <i className="fa-solid fa-paperclip text-primary"></i>
                  <span id="reflnk" className="text_grey2">
                    https://maxprofit.mcode.me/register/alpahatest
                  </span>
                  <span
                    className="float-right text-primary hand_pointer"
                    title="Copy link"
                    onclick="copy_txt()"
                  >
                    <i className="fa fa-copy"></i> Copy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title text-primary">
                  <h5>Available Packages</h5>
                </div>
              </div>
              <div className="card-body pb-0">
                <div className="pb-4 pl-4">
                  <div className="alert alert-warning">
                    <a href="">
                      Please, click here to update your profile before you can
                      invest.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-card-no-pd">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-head-row card-tools-still-right">
                  <h5 className="text-primary">Recent Activities</h5>
                  <div className="card-tools"></div>
                </div>
              </div>
              <div className="card-body pl-4">
                <div className="row border_btm p-2">
                  <div className="col-xs d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-circle-dollar-to-slot fa-2x text-primary"></i>
                  </div>
                  <div className="col pt-4">
                    <h5>Invest</h5>
                    <p className="margin_top_n10">2022-09-07 12:30:03</p>
                  </div>
                  <div className="col-xs d-flex justify-content-center align-items-center float-right pr-4">
                    <span className="">
                      <b>USD 200</b>
                    </span>
                  </div>
                </div>
                <div className="row border_btm p-2">
                  <div className="col-xs d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-circle-dollar-to-slot fa-2x text-primary"></i>
                  </div>
                  <div className="col pt-4">
                    <h5>Invest</h5>
                    <p className="margin_top_n10">2022-09-06 08:54:18</p>
                  </div>
                  <div className="col-xs d-flex justify-content-center align-items-center float-right pr-4">
                    <span className="">
                      <b>USD 1000</b>
                    </span>
                  </div>
                </div>
                <div className="row border_btm p-2">
                  <div className="col-xs d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-circle-dollar-to-slot fa-2x text-primary"></i>
                  </div>
                  <div className="col pt-4">
                    <h5>Invest</h5>
                    <p className="margin_top_n10">2022-09-04 20:12:32</p>
                  </div>
                  <div className="col-xs d-flex justify-content-center align-items-center float-right pr-4">
                    <span className="">
                      <b>USD 50000</b>
                    </span>
                  </div>
                </div>
                <div className="row border_btm p-2">
                  <div className="col-xs d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-circle-dollar-to-slot fa-2x text-primary"></i>
                  </div>
                  <div className="col pt-4">
                    <h5>Invest</h5>
                    <p className="margin_top_n10">2022-09-04 14:47:01</p>
                  </div>
                  <div className="col-xs d-flex justify-content-center align-items-center float-right pr-4">
                    <span className="">
                      <b>USD 10</b>
                    </span>
                  </div>
                </div>
                <div className="row border_btm p-2">
                  <div className="col-xs d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-circle-dollar-to-slot fa-2x text-primary"></i>
                  </div>
                  <div className="col pt-4">
                    <h5>Invest</h5>
                    <p className="margin_top_n10">2022-09-03 04:01:26</p>
                  </div>
                  <div className="col-xs d-flex justify-content-center align-items-center float-right pr-4">
                    <span className="">
                      <b>USD 1000</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
