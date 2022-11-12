import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth";
import classnames from "classnames";

export default function SignUp() {

    let navigate = useNavigate();

    const [value, setValue] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        password2: "",
        isAuthenticated: ""
    });

    const [errors, setErrors] = useState({});

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

    const handleRegister = (e) => {
        e.preventDefault();
        AuthService.register(value).then(
            () => {
                navigate("/sign_in");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
    };

    return (

        <div className="bg-white">
            <div className="container">
                <div className="row justify-content-center align-items-center d-flex vh-100">
                    <div className="col-md-4 mx-auto">
                        <div className="osahan-login py-4">
                            <div className="text-center mb-4">
                                <Link to="/"><img src="img/logo.svg" alt="" /></Link>
                                <h5 className="font-weight-bold mt-3">Join Olink</h5>
                                <p className="text-muted">Make the most of your professional life</p>
                            </div>

                            <Form noValidate onSubmit={handleRegister}>
                                <div className="form-row">
                                    <div className="col">
                                        <Form.Group className="form-group" controlId="name">
                                            <Form.Label className="mb-1">Name</Form.Label>
                                            <div className="position-relative icon-form-control">
                                                <i className="feather-user position-absolute"></i>
                                                <Form.Control
                                                    onChange={handleChange}
                                                    value={value.name}
                                                    error={errors.name}
                                                    type="text"
                                                    className={classnames("", {
                                                        invalid: errors.name
                                                    })}
                                                />
                                                <span className="red-text">{errors.name}</span>
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className="form-group" controlId="username">
                                            <Form.Label>Username</Form.Label>
                                            <div className="position-relative icon-form-control">
                                                <i className="feather-user position-absolute"></i>
                                                <Form.Control
                                                    onChange={handleChange}
                                                    value={value.username}
                                                    error={errors.username}
                                                    type="text"
                                                    className={classnames("", {
                                                        invalid: errors.username
                                                    })}
                                                />
                                                <span className="red-text">{errors.username}</span>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <Form.Group className="form-group" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <div className="position-relative icon-form-control">
                                        <i className="feather-at-sign position-absolute"></i>
                                        <Form.Control
                                            onChange={handleChange}
                                            value={value.email}
                                            error={errors.email}
                                            type="email"
                                            className={classnames("", {
                                                invalid: errors.email
                                            })}
                                        />
                                        <span className="red-text">{errors.email}</span>
                                    </div>
                                </Form.Group>
                                <Form.Group className="form-group" controlId="password">
                                    <Form.Label>Password (6 or more characters)</Form.Label>
                                    <div className="position-relative icon-form-control">
                                        <i className="feather-unlock position-absolute"></i>
                                        <Form.Control
                                            onChange={handleChange}
                                            value={value.password}
                                            error={errors.password}
                                            type="password"
                                            className={classnames("", {
                                                invalid: errors.password
                                            })}
                                        />
                                        <span className="red-text">{errors.password}</span>
                                    </div>
                                </Form.Group>
                                <Form.Group className="form-group" controlId="password2">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <div className="position-relative icon-form-control">
                                        <i className="feather-unlock position-absolute"></i>
                                        <Form.Control
                                            onChange={handleChange}
                                            value={value.password2}
                                            error={errors.password2}
                                            type="password"
                                            className={classnames("", {
                                                invalid: errors.password2
                                            })}
                                        />
                                        <span className="red-text">{errors.password2}</span>
                                    </div>
                                </Form.Group>
                                <div className="form-group">
                                    <label className="mb-1">You agree to the Olink <Link to="#">User Agreement</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Cookie Policy</Link>.</label>
                                </div>

                                <Button className="btn btn-primary btn-block text-uppercase" variant="primary" type="submit">
                                    Agree & Join
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
                                    <span className="ml-auto"> Already on Olink? <Link className="font-weight-bold" to="/sign_in">Sign in</Link></span>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
