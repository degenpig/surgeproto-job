import React, { useContext } from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from '../common/UserContext';
import classnames from 'classnames';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { API_URL } from '../../config/api';

function NetworkItem(props) {
    let navigate = useNavigate();
    console.log('this is ');
    const id = props.userId;
    console.log(id);

    const [userProfile, setUserProfile] = useState();
    const [avatar, setAvatar] = useState('img/default_avatar.png');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        getUserProfile();
    }, []);

    const getUserProfile = async () => {
        let response = await axios.get(`${API_URL}/userProfile/getUserProfile/${id}`, {
            id: id
        })
        let data = await response.data;
        setUserProfile(data);
        setName(data.name);
        setAvatar(data.avatar);
        setUsername(data.username);
    }

    const connect = async () => {
        navigate("/messages");

    }
    const follow = async () => {
    }
    return (
        <div class={props.col}>
            <Link to="/profile">
                <div className={classnames('network-item rounded mb-3', props.border)}>
                    <div className="p-3 d-flex align-items-center network-item-header">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src={avatar} alt="" />
                        </div>
                        <div className="font-weight-bold">
                            <h6 className="font-weight-bold text-dark mb-0">{name}</h6>
                            <div className="small text-black-50">{username}</div>
                        </div>
                    </div>
                    {/* <div className="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                        <div className="overlap-rounded-circle">
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p6.png" alt="" data-original-title="Sophia Lee" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p7.png" alt="" data-original-title="John Doe" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p8.png" alt="" data-original-title="Julia Cox" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p9.png" alt="" data-original-title="Robert Cook" />
                        </div>
                        <span className="font-weight-bold small text-primary">4 mutual connections</span>
                    </div> */}
                    <div className="network-item-footer py-3 d-flex text-center">
                    </div>
                </div>
            </Link>
            <div className='d-flex connection-btn-group'>
                <div className="col-6 pl-3 pr-1">
                    <button type="button" className="btn btn-primary btn-sm btn-block" onClick={connect}> Connect </button>
                </div>
                <div className="col-6 pr-3 pl-1">
                    <button type="button" className="btn btn-outline-primary btn-sm btn-block" onClick={follow}> <i className="feather-user-plus"></i> Follow </button>
                </div>
            </div>
        </div>
    );
}

export default NetworkItem;