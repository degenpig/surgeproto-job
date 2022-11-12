import React, { useContext } from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config/api';

function Person(props) {


    useEffect(() => {
        getUserProfile();
    }, [])
    useEffect(() => {
        setInterval(() => {
            getUserProfile();
            console.clear();

        }, 1000);
    }, []);

    // console.log('this is person id');
    const id = props._id;
    // console.log(id);

    const [userProfile, setUserProfile] = useState();
    const [avatar, setAvatar] = useState('img/default_avatar.png');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');


    const getUserProfile = async () => {
        let response = await axios.get(`${API_URL}/userProfile/getUserProfile/${id}`, {
            id: id
        })
        let data = await response.data;

        // .then(res => {
        setUserProfile(data);
        // if (!userProfile) {
        //     setName('')
        // } else {
        setName(data.name);
        // }
        // if (!userProfile) {
        //     setAvatar('')
        // } else {
        setAvatar(data.avatar);
        // }
        // if (!userProfile) {
        //     setUsername('')
        // } else {
        setUsername(data.username);
        // }
        // })
    }
    // console.log('userProfile');
    // console.log(userProfile);

    return (
        <li className="nav-item overflow-hidden full-width">
            <a className="nav-link p-3 d-flex align-items-center border-bottom osahan-post-header overflow-hidden" data-toggle="pill" href={"#msg" + id}>
                <div className="dropdown-list-image mr-3"><img className="rounded-circle" src={avatar} alt="" /></div>
                <div className="font-weight-bold mr-1 overflow-hidden">
                    <div className="text-truncate white-color">{name}</div>
                    <div className="small text-truncate overflow-hidden text-black-50"><i className="feather-checkxxx text-primary"></i> {username}</div>
                </div>
                <span className="ml-auto mb-auto">
                    {/* <div className="text-right text-muted pt-1 small">00:21PM</div> */}
                </span>
            </a>
        </li>

    );
}

export default Person;