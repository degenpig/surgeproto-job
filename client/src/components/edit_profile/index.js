import React, { useContext } from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavNonSerch from '../layout/NavNonserch';
import AsideLeft from './aside_left';
import Main from './main';
import UserContext from '../common/UserContext';
import { API_URL } from '../../config/api';
import Nav from '../layout/Nav';

function EditProfile() {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    let navigate = useNavigate();

    const [formList, setFormList] = useState([]);


    useEffect(() => {
        console.log('useEffect');
        console.log(profile._id);
        if (profile._id == undefined || profile._id == null) {
            navigate("/home");
            console.log("done");
        }
        getFormlist();
    }, []);

    const getFormlist = () => {
        axios.get(`${API_URL}/profileForm/getAll`)
            .then(res => {
                console.log(res.data);
                setFormList(res.data)
            })
        console.log('formList');
        console.log(formList);
    }


    console.log('before useEffect');
    console.log(profile._id);

    return (
        <div>
            {/* <NavNonSerch /> */}
            <Nav />
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <AsideLeft formList={formList} />
                        <Main formList={formList} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;