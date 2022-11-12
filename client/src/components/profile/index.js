import React, { useEffect, useState } from 'react'

import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../layout/Nav';
import AsideLeft from './aside_left';
import AsideRight from './aside_right';
import Main from './main';
import { API_URL } from '../../config/api';

function Profile() {
    const { state } = useLocation();
    const id = state

    const [userProfile, setUserProfile] = useState();


    useEffect(() => {
        const interval = setInterval(async () => {
            await getUserProfile();
        }, 2000);
        return () => clearInterval(interval)
        // console.clear();

    }, []);

    const getUserProfile = async () => {
        let response = await axios.get(`${API_URL}/userProfile/getUserProfile/${id}`, {
            id: id
        })
        let data = await response.data;
        setUserProfile(data);
    }

    return (
        <div>
            <Nav />
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <AsideLeft userProfile={userProfile} />
                        <Main userProfile={userProfile} />
                        <AsideRight />
                    </div>
                </div>
            </div>

        </div>);
}

export default Profile;