import React, { useContext } from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from '../common/UserContext';
import Nav from '../layout/Nav';
import AsideRight from './aside_right';
import Main from './main';
import { API_URL } from '../../config/api';

function Connection() {

    const userContext = useContext(UserContext);
    const profile = userContext.profile;

    useEffect(() => {
        getProfile();
    }, [])
    useEffect(() => {
        setInterval(() => {
            getProfile();
        }, 5000);
    }, []);

    const getProfile = async () => {
        let response = await axios.get(`${API_URL}/getProfile`)
        let data = await response.data
        userContext.setProfile(data)
    }




    console.log('this is connection pages profile');
    console.log(profile);
    return (
        <div>
            <Nav />
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <Main connections={profile.connections} />
                        <AsideRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connection;