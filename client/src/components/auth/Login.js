import React, { useState, useRef } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth";

// import logo from "./logo.png";

export default function Login() {
  let navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.id;

    setValue((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const handleSetErrors = (name, value) => {
    setErrors((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    // form.current.validateAll();
    // if (checkBtn.current.context._errors.length === 0) {
    AuthService.login(value.email, value.password)
      .then(
        () => {
          navigate("/home");
        },
        (error) => {
          const emailMessage =
            (error.response &&
              error.response.data &&
              error.response.data.email);
          const passwordMessage =
            (error.response &&
              error.response.data &&
              error.response.data.password);

          setErrors({
            email: '',
            password: ''
          });

          console.log(passwordMessage)
          if (emailMessage) {
            handleSetErrors("email", emailMessage);
          }
          if (passwordMessage) {
            handleSetErrors("password", passwordMessage);
          }
        }
      );
    // } else {
    //   setLoading(false);
    // }
  };

  return (
    <div className="bg-white">
      <div className="container">
        <div className="row justify-content-center align-items-center d-flex vh-100">
          <div className="col-md-4 mx-auto">
            <div className="osahan-login py-4">
              <div className="text-center mb-4">
                <Link to="/"><img src="img/logo_sm.png" alt="" /></Link>
                <h5 className="font-weight-bold mt-3">Welcome Back</h5>
                <p className="text-muted">Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
              </div>
              {/* <form noValidate onSubmit={this.onSubmit}> */}
              <div className="form-group">
                <label className="mb-1">Email</label>
                <div className="position-relative icon-form-control">
                  <i className="feather-user position-absolute"></i>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                    name="adm_email"
                  />
                </div>
                <span className="text-danger">
                  {errors.email}
                </span>
              </div>
              <div className="form-group">
                <label className="mb-1">Password</label>
                <div className="position-relative icon-form-control">
                  <i className="feather-unlock position-absolute"></i>
                  <input
                    onChange={handleChange}
                    id="password"
                    type="password"
                    className="form-control"
                    name="adm_pwd" />
                </div>
                <span className="text-danger">
                  {errors.password}
                </span>
              </div>
              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
              </div>
              <Button className="btn btn-primary btn-block text-uppercase" variant="primary" type="submit"
                onClick={handleLogin}>
                Sign in
              </Button>
              <div className="text-center mt-3 border-bottom pb-3">
                <p className="small text-muted">Or login with</p>
                <div className="row">
                  <div className="col-4">
                    <a type="button" href='http://discord.com' target='_blank' className="btn btn-sm btn-outline-instagram btn-block"><i className="feather-eye"></i> Discord</a>
                  </div>
                  <div className="col-4">
                    <a type="button" href='http://twitter.com' target='_blank' className="btn btn-sm btn-outline-linkedin btn-block"><i className="feather-twitter"></i> Twitter</a>
                  </div>
                  <div className="col-4">
                    <a type="button" href='http://linkedin.com' target='_blank' className="btn btn-sm btn-outline-facebook btn-block"><i className="feather-linkedin"></i> Linkedin</a>
                  </div>
                </div>
              </div>
              <div className="py-3 d-flex align-item-center">
                <Link to="/forgot_password">Forgot password?</Link>
                <span className="ml-auto"> New to SURGE?
                  <Link className="font-weight-bold" to="/register">Join now</Link>
                </span>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <div className="mt--2">
  //       <div
  //         className="login_bg_overlay_col "
  //         style={{ backgroundColor: "#0d0d38" }}
  //       ></div>
  //       <div className="">
  //         <div className="row admin_login_row">
  //           <div className="col-md-6  d-flex justify-content-center align-items-center position_abs height_100per">
  //             <div className="p-2" align="center">
  //               <h1 className="text-white text-uppercase xbold">
  //                 USDFX Stablecoin{" "}
  //               </h1>
  //               <h4 className="text-white mt-2">Login to manage your website</h4>
  //             </div>
  //           </div>
  //           <div className="col-md-6 bg_white">
  //             <div className="login_fixed_panel">
  //               <div className="row">
  //                 <div className="col-md-12 d-flex justify-content-center align-items-center position_abs height_100per">
  //                   <div className="p-2">
  //                     <div className="panel-body" style={{ marginLeft: "-6px" }}>
  //                       <img
  //                         alt=""
  //                         src={logo}
  //                         data-xblocker="passed"
  //                         style={{ visibility: "visible" }}
  //                       />
  //                       <h4 className="text-primary">
  //                         Sign in to manage USDFX Stablecoin
  //                       </h4>
  //                       <div
  //                         id="errMsg"
  //                         className="card-header alert alert-danger cont_display_none"
  //                         align="center"
  //                       ></div>
  //                     </div>
  //                     <div className="panel-body mt-3">
  //                       {/* <form
  //                         method="POST"
  //                         action="https://invest.usdfx.org/dhadmin/login"
  //                       > */}
  //                       <input
  //                         id="csrf"
  //                         type="hidden"
  //                         name="_token"
  //                         value="w25EA7z0yJGOvdN9qCuPFi64hybPx5e0eipi9MpO"
  //                       />
  //                       <div className="form-group row">
  //                         <b>Email</b>
  //                         <input
  //                           id=""
  //                           type="hidden"
  //                           name="_token"
  //                           value="w25EA7z0yJGOvdN9qCuPFi64hybPx5e0eipi9MpO"
  //                           className="form-control"
  //                         />
  //                         <div className="input-group">
  //                           <input
  //                             id="email"
  //                             type="email"
  //                             className="form-control regTxtBox"
  //                             name="adm_email"
  //                             required=""
  //                             autoFocus=""
  //                             placeholder="Email"
  //                             onChange={handleChange}
  //                           />
  //                           <input
  //                             id="email"
  //                             type="email"
  //                             className="form-control"
  //                             onChange={handleChange}
  //                           />
  //                         </div>
  //                       </div>
  //                       <div className="form-group row ">
  //                         <b>Password</b>
  //                         <div className="input-group">
  //                           <input
  //                             id="password"
  //                             type="password"
  //                             className="form-control regTxtBox"
  //                             name="adm_pwd"
  //                             required=""
  //                             placeholder="Password"
  //                             onChange={handleChange}
  //                           />
  //                         </div>
  //                       </div>
  //                       <div className="form-group row mb-0 pt-0 pb-0">
  //                         <div
  //                           className="col-md-12 pl-0 pr-0 mt-2"
  //                           align="center"
  //                         >
  //                           <button
  //                             type="submit"
  //                             className="btn btn-primary with_100per"
  //                             onClick={handleLogin}
  //                           >
  //                             Login
  //                           </button>
  //                         </div>
  //                         <div className="col-md-12 mt-5" align="center">
  //                           <strong>
  //                             <a
  //                               href="https://invest.usdfx.org/admin"
  //                               className="btn border"
  //                               data-target="#reset_pwd_modal"
  //                               data-toggle="modal"
  //                             >
  //                               <i className="fa fa-key"></i> Forgot your
  //                               password?
  //                             </a>
  //                           </strong>
  //                         </div>
  //                       </div>
  //                       {/* </form> */}
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div
  //       className="modal fade"
  //       id="reset_pwd_modal"
  //       tabIndex="-1"
  //       role="dialog"
  //       aria-labelledby="exampleModalLabel"
  //       aria-hidden="true"
  //     >
  //       <div
  //         className="modal-dialog"
  //         style={{ paddingTop: "70px" }}
  //         role="document"
  //       >
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h3 className="modal-title text-primary" id="exampleModalLabel">
  //               <b>Forgot your password?</b>
  //             </h3>
  //             <button
  //               type="button"
  //               className="close"
  //               data-dismiss="modal"
  //               aria-label="Close"
  //             >
  //               <span aria-hidden="true">×</span>
  //             </button>
  //           </div>
  //           <div className="modal-body">
  //             <form
  //               method="post"
  //               action="https://invest.usdfx.org/admin/reset/pwd"
  //             >
  //               <div className="row">
  //                 <div className="col-md-12">
  //                   <input
  //                     type="text"
  //                     name="admin_email"
  //                     value=""
  //                     className="form-control"
  //                     placeholder="Email"
  //                     required=""
  //                     onChange={handleChange}
  //                   />
  //                 </div>
  //                 <div className="col-sm-12 mt-3">
  //                   <input
  //                     type="submit"
  //                     className="btn btn-primary"
  //                     value="Reset"
  //                   />
  //                 </div>
  //               </div>
  //             </form>
  //           </div>
  //           <div className="modal-footer"></div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
