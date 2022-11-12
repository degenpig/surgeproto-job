import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

function SingIn() {
    return (
        <div className="bg-white">
            <div className="container">
                <div className="row justify-content-center align-items-center d-flex vh-100">
                    <div className="col-md-4 mx-auto">
                        <div className="osahan-login py-4">
                            <div className="text-center mb-4">
                                <Link to="/"><img src="img/logo.svg" alt="" /></Link>
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
                                    {/* <span className="red-text">
                                            {errors.email}
                                            {errors.emailnotfound}
                                        </span> */}
                                </div>
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
                                    {/* <span className="red-text">
                                            {errors.password}
                                            {errors.passwordincorrect}
                                        </span> */}
                                </div>
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
                                        <button type="button" className="btn btn-sm btn-outline-instagram btn-block"><i className="feather-instagram"></i> Instagram</button>
                                    </div>
                                    <div className="col-4">
                                        <button type="button" className="btn btn-sm btn-outline-linkedin btn-block"><i className="feather-linkedin"></i> Linkedin</button>
                                    </div>
                                    <div className="col-4">
                                        <button type="button" className="btn btn-sm btn-outline-facebook btn-block"><i className="feather-facebook"></i> Facebook</button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-3 d-flex align-item-center">
                                <Link to="/forgot_password">Forgot password?</Link>
                                <span className="ml-auto"> New to Olink?
                                    <Link className="font-weight-bold" to="/sign_up">Join now</Link>
                                </span>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingIn;