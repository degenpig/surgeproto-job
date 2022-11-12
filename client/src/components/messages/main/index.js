import React, { useContext } from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from '../../common/UserContext';

import Messaging from './Messaging';
import { API_URL } from '../../../config/api';

function Main() {

    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    useEffect(() => {
        getProfile();
    }, [])

    const getProfile = async () => {
        let response = await axios.get(`${API_URL}/getProfile`)
        let data = await response.data;
        userContext.setProfile(data);
    }


    // useEffect(() => {
    //     setInterval(() => {
    //         getProfile();
    //     }, 1000);
    // }, []);

    // console.log('this is profile');
    // console.log(profile, Object.keys(profile).length);
    return (
        <main className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            {Object.keys(profile).length !== 0 ? (
                <Messaging profile={profile} />
            ) : ""}
        </main>
    );
}

export default Main;