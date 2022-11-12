import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';

import UserContext from '../common/UserContext';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/api';
// import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PostJobBox() {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    let navigate = useNavigate();


    const warningMsgSucNotify = () => toast.warning('Please Connect your wallet!', {
        position: "top-right",
        theme: 'dark',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const postJob = () => {
        // e.preventDefault();
        axios.get(`${API_URL}/getProfile`)
            .then(res => {
                const profile = res.data;
                if (profile._id == null || profile._id == undefined || profile.walletAddress == null || profile.walletAddress == undefined || profile.walletAddress.length < 10) {
                    warningMsgSucNotify();
                } else {
                    navigate("/post_job");
                }
                // alert(res.data.walletAddress);
                // return profile;
            })

    }
    return (<div className="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
        <img src="img/job1.png" className="img-fluid" alt="" />
        <div className="p-3 border-bottom">
            <h6 className='font-weight-bold text-dark'>Post Job</h6>
            <p className="mb-0 text-muted">We are looking for talent</p>
        </div>
        <div className="p-3">
            <a className='btn btn-primary pl-4 pr-4' onClick={postJob}>POST A JOB </a>
        </div>
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    </div>
    );
}

export default PostJobBox;