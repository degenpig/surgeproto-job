import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth";
import classnames from "classnames";

export default function Register() {

    let navigate = useNavigate();

    const [value, setValue] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        passwordResetQuestion: "",
        passwordResetAnswer: "",
        // password2: "",
        // isAuthenticated: ""
    });

    const [errors, setErrors] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        passwordResetQuestion: "",
        passwordResetAnswer: "",
    });

    const handleSetErrors = (name, value) => {
        setErrors((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            };
        });
    }

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
        AuthService.register(value.name, value.username, value.email, value.password, value.passwordResetQuestion, value.passwordResetAnswer).then(
            () => {
                navigate("/login");
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.errors) ||
                    error.message ||
                    error.toString();
                setErrors({
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    passwordResetQuestion: '',
                    passwordResetAnswer: '',
                });

                for (let i = 0; i < resMessage.length; i++) {
                    handleSetErrors(resMessage[i].param, resMessage[i].msg);
                }
            }
        );
    };

    return (

        <div className="bg-white">
            <div className="container">
                <div className="row justify-content-center align-items-center d-flex">
                    <div className="col-md-4 mx-auto">
                        <div className="osahan-login py-4">
                            <div className="text-center mb-4">
                                <Link to="/"><img src="img/logo_sm.png" alt="" /></Link>
                                <h5 className="font-weight-bold mt-3">Join SURGE</h5>
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
                                            </div>
                                            <span className="text-danger">{errors.name}</span>
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className="form-group" controlId="username">
                                            <Form.Label className="mb-1">Username</Form.Label>
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
                                            </div>
                                            <span className="text-danger">{errors.username}</span>
                                        </Form.Group>
                                    </div>
                                </div>
                                <Form.Group className="form-group" controlId="email">
                                    <Form.Label className="mb-1">Email</Form.Label>
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
                                    </div>
                                    <span className="text-danger">{errors.email}</span>
                                </Form.Group>
                                <Form.Group className="form-group" controlId="password">
                                    <Form.Label className="mb-1">Password (6 or more characters)</Form.Label>
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
                                    </div>
                                    <span className="text-danger">{errors.password}</span>
                                </Form.Group>
                                <Form.Group className="form-group" controlId="passwordResetQuestion">
                                    <Form.Label className="mb-1">Security question for password reset</Form.Label>
                                    <div className="position-relative icon-form-control">
                                        <i className="feather-help-circle position-absolute"></i>
                                        <Form.Control
                                            onChange={handleChange}
                                            value={value.passwordResetQuestion}
                                            error={errors.passwordResetQuestion}
                                            type="text"
                                            className={classnames("", {
                                                invalid: errors.passwordResetQuestion
                                            })}
                                        />
                                    </div>
                                    <span className="text-danger">{errors.passwordResetQuestion}</span>
                                </Form.Group>
                                <Form.Group className="form-group" controlId="passwordResetAnswer">
                                    <Form.Label className="mb-1">Answers to security questions for password reset <br /> (must remember)</Form.Label>
                                    <div className="position-relative icon-form-control">
                                        <i className="feather-info position-absolute"></i>
                                        <Form.Control
                                            onChange={handleChange}
                                            value={value.passwordResetAnswer}
                                            error={errors.passwordResetAnswer}
                                            type="text"
                                            className={classnames("", {
                                                invalid: errors.passwordResetAnswer
                                            })}
                                        />
                                    </div>
                                    <span className="text-danger">{errors.passwordResetAnswer}</span>
                                </Form.Group>
                                {/* <Form.Group className="form-group" controlId="password2">
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
                                        <span className="text-danger">{errors.password2}</span>
                                    </div>
                                </Form.Group> */}
                                <div className="form-group">
                                    <label className="mb-1">You agree to the SURGE <Link to="#">User Agreement</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Cookie Policy</Link>.</label>
                                </div>

                                <Button className="btn btn-primary btn-block text-uppercase" variant="primary" type="submit">
                                    Agree & Join
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
                                    <span className="ml-auto"> Already on SURGE? <Link className="font-weight-bold" to="/login">Sign in</Link></span>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
