import React, { useEffect, useState, useContext } from 'react'

import axios from 'axios';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Nav from '../layout/Nav';
import Main from './main';
import AsideLeft from './aside_left';
import AsideRight from './aside_right';
import UserContext from "../common/UserContext"
import { API_URL } from '../../config/api';

// import PropTypes from "prop-types";
export default function Home() {

    const userContext = useContext(UserContext);

    useEffect(() => {
        getProfile();
    }, []);
    const getProfile = () => {
        axios.get(`${API_URL}/getProfile`)
            .then(res => {
                console.log(res.data);
                userContext.setProfile(res.data)
            })
    }

    // const { user } = this.props.auth;
    return (
        <div>
            <Nav />
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <Main />
                        <AsideLeft />
                        <AsideRight />
                    </div>
                </div>
            </div>
        </div>
    );
}
