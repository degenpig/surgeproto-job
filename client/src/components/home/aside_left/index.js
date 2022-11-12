import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';

import ProfileBox from '../../common_common/ProfileBox';
import ViewBox from './ViewBox';
import AdsBox from '../../common_common/AdsBox';
import UserContext from '../../common/UserContext';
import PostJobBox from '../../common_common/PostJobBox';

import { API_URL } from '../../../config/api';
function AsideLeft() {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    const [id, setID] = useState('');
    const [job, setJob] = useState('');
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [profile_sign, setProfile_sign] = useState('');
    if (id == undefined) {
        setID(profile._id);
        setJob(profile.job);
        setAvatar(profile.avatar);
        setName(profile.name);
        setUsername(profile.username);
    }

    useEffect(() => {
        console.log('useeffect');
        if (profile._id == null || profile._id == undefined) {
            // navigate("/login");
            // console.log('Profile reloaded!');
            getProfile();
            // console.log("done");
        } else {
            setID(profile._id);
            setJob(profile.job);
            setAvatar(profile.avatar);
            setName(profile.name);
            setUsername(profile.username);
        }

    }, []);

    const getProfile = async () => {
        await axios.get(`${API_URL}/getProfile`)
            .then(res => {
                console.log(res.data);
                userContext.setProfile(res.data)
            })
        setID(profile._id);
        setJob(profile.job);
        setAvatar(profile.avatar);
        setName(profile.name);
        setUsername(profile.username);
    }



    // alert(profile.name + '     ' + name);
    return (
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            <ProfileBox profile_id={id} name={name} job={job} avatar={avatar} username={username} btn="View my profile" />
            <ViewBox />
            {/* <AdsBox img="img/job1.png" title="Osahan Solutions" titleStyle="text-dark" desc="Looking for talent?" btn="POST A JOB" btnStyle="btn-outline-primary" /> */}
        </aside>
    );
}

export default AsideLeft;