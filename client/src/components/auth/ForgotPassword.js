import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth";
import classnames from "classnames";
import { API_URL } from '../../config/api';

export default function ForgotPassword() {

    let navigate = useNavigate();

    const [step, setStep] = useState('1');

    const [value, setValue] = useState({
        password: '',
        email: "",
        passwordResetAnswer: ""
    });
    const [passwordResetQuestion, setPasswordResetQuestion] = useState('');
    // const [passwordResetAnswer, setPasswordResetAnswer] = useState('');
    const [errors, setErrors] = useState({
        password: '',
        email: "",
        passwordResetAnswer: ""
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

    const emailSubmit = async (e) => {
        e.preventDefault();
        let res = await axios.post(API_URL + "/userProfile/getPasswordResetQuestion", {
            email: value.email
        })
            .then(res => {
                if (res.data == 'no user') {
                    setErrors({
                        email: 'Email is not exist!'
                    });
                }
                else {
                    let passwordResetQuestion = res.data;
                    setPasswordResetQuestion(passwordResetQuestion);
                    setStep('2');
                }
            });
        return res;
    };

    const answerSubmit = async (e) => {
        e.preventDefault();
        let res = await axios.post(API_URL + "/userProfile/passwordResetCheck", {
            email: value.email,
            passwordResetAnswer: value.passwordResetAnswer
        })
            .then(res => {
                let result = res.data;
                if (res.data == 'ok') {
                    setStep('3');
                }
                else {
                    setErrors({
                        passwordResetAnswer: 'The answer is wrong!'
                    });
                }
            });
        return res;
    };

    const newPasswordSubmit = async (e) => {
        e.preventDefault();
        let email = value.email
        let password = value.password
        alert(password.length);
        if (password.length < 6) {
            setErrors({
                password: 'Please enter a valid password'
            });
        } else {
            let res = await axios.post(API_URL + "/userProfile/resetPassword", { email: email, password: password })
                .then(res => {
                    let result3 = res.data;
                    if (result3 == 'ok') {
                        setStep('4');
                    } else {
                        setErrors({
                            password: 'Please enter a valid password'
                        });
                    }
                });
            return res;
        }
    };



    return (

        <div className="bg-white">
            <div className="container">
                <div className="row justify-content-center align-items-center d-flex vh-100">
                    <div className="col-md-4 mx-auto">
                        <div className="osahan-login py-4">
                            <div className="text-center mb-4">
                                <Link to="/"><img src="img/logo_sm.png" alt="" /></Link>
                                <h5 className="font-weight-bold mt-3">Join SURGE</h5>
                                <p className="text-muted">Make the most of your professional life</p>
                            </div>
                            {step == '1' ?
                                <Form noValidate onSubmit={emailSubmit}>
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
                                    <Button className="btn btn-primary btn-block text-uppercase" variant="primary" type="submit">
                                        I forgot password
                                    </Button>

                                    <div className="py-3 d-flex align-item-center">
                                        <span className=""> New to SURGE?
                                            <Link className="font-weight-bold" to="/register">Join now</Link>
                                        </span>
                                        <span className="ml-auto"> Already on SURGE? <Link className="font-weight-bold" to="/login">Sign in</Link></span>
                                    </div>
                                </Form>
                                : null}

                            {step == '2' ?
                                <Form noValidate onSubmit={answerSubmit}>

                                    <Form.Group className="form-group" controlId="password">
                                        <Form.Label className="mb-1">Security question for password reset</Form.Label>
                                        <div className="position-relative icon-form-control">
                                            <i className="feather-help-circle position-absolute"></i>

                                            <Form.Control
                                                value={passwordResetQuestion}
                                                type="text"
                                                disabled
                                                className={classnames("", {
                                                    invalid: errors.passwordResetQuestion
                                                })}
                                            />
                                        </div>
                                        <span className="text-danger">{passwordResetQuestion == '' ? 'Unable to reset password because no protection question is defined.' : null}</span>
                                    </Form.Group>
                                    <Form.Group className="form-group" controlId="passwordResetAnswer">
                                        <Form.Label className="mb-1">Answers to security questions for password reset</Form.Label>
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
                                    <Button className="btn btn-primary btn-block text-uppercase" variant="primary" type="submit">
                                        Submit
                                    </Button>

                                    <div className="py-3 d-flex align-item-center">
                                        <span className=""> New to SURGE?
                                            <Link className="font-weight-bold" to="/register">Join now</Link>
                                        </span>
                                        <span className="ml-auto"> Already on SURGE? <Link className="font-weight-bold" to="/login">Sign in</Link></span>
                                    </div>
                                </Form>
                                : null}

                            {step == '3' ?
                                <Form noValidate onSubmit={newPasswordSubmit}>
                                    <Form.Group className="form-group" controlId="password">
                                        <Form.Label className="mb-1">New Password (6 or more characters)</Form.Label>
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
                                    <Button className="btn btn-primary btn-block text-uppercase" variant="primary" type="submit">
                                        Change password
                                    </Button>

                                    <div className="py-3 d-flex align-item-center">
                                        <span className=""> New to SURGE?
                                            <Link className="font-weight-bold" to="/register">Join now</Link>
                                        </span>
                                        <span className="ml-auto"> Already on SURGE? <Link className="font-weight-bold" to="/login">Sign in</Link></span>
                                    </div>
                                </Form>
                                : null}


                            {step == '4' ?
                                <div>
                                    <h5 className="font-weight-bold center mt-5 mb-5">Password updated successfully!</h5>
                                    <Link className="btn btn-primary btn-block text-uppercase" to="/login" variant="primary" type="submit">
                                        Sign in
                                    </Link>

                                    <div className="py-3 d-flex align-item-center">
                                        <span className=""> New to SURGE?
                                            <Link className="font-weight-bold" to="/register">Join now</Link>
                                        </span>
                                        <span className="ml-auto"> Already on SURGE? <Link className="font-weight-bold" to="/login">Sign in</Link></span>
                                    </div>
                                </div>
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
