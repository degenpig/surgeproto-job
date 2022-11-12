import React, { useContext } from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from '../../common/UserContext';
import { useNavigate } from 'react-router-dom';

import JobItem from '../../common_common/JobItem';
import PeopleBox from '../../common_common/PeopleBox';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../../config/api';
import { ADMIN_ID } from '../../../config/adminId';

function AsideRight() {

    const [msg, setMsg] = useState('');

    const userContext = useContext(UserContext);
    const profile = userContext.profile;

    const adminId = ADMIN_ID;

    const getProfile = () => {
        axios.get(`${API_URL}/getProfile`)
            .then(res => {
                console.log(res.data);
                userContext.setProfile(res.data)
            })
    }

    const sendMsgSucNotify = () => toast.success('The message has been successfully sent to the Admin!', {
        position: "top-right",
        theme: 'dark',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    useEffect(() => {
        console.log('useeffect');
        if (profile._id == null || profile._id == undefined || profile.walletAddress == null || profile.walletAddress == undefined || profile.walletAddress.length < 10) {
            // navigate("/home");
            console.log('Profile reloaded!');
            getProfile();
            console.log("done");
        }
    }, []);

    const sendMsg = async (e) => {

        e.preventDefault();

        await axios.post(`${API_URL}/adminMailbox/addMsg`, {
            from: profile._id,
            msg: msg
        })
        await axios.post(`${API_URL}/msg/addMsgMe`, {
            owner: profile._id,
            msg: msg,
            opponent: adminId,
            direction: 'go'
        })
        sendMsgSucNotify();
        setMsg('');
        await axios.post(`${API_URL}/userProfile/updateUserProfile/addConnection/${profile._id}`, {
            creator_id: adminId
        })
        await axios.post(`${API_URL}/userProfile/updateUserProfile/addConnection/${adminId}`, {
            creator_id: profile._id
        })


        // axios.post(`${API_URL}/adminMailbox/addMsg", {
        //     from: profile._id,
        //     msg: msg
        // })
        //     .then(
        //         axios.post(`${API_URL}/msg/addMsgMe", {
        //             owner: profile._id,
        //             msg: msg,
        //             opponent: '6331c7c5db563af609b6c175',
        //             direction: 'go'
        //         })
        //             .then(res => {
        //                 sendMsgSucNotify();
        //                 setMsg('');
        //             })
        //             .catch(err => {
        //                 console.log(err);
        //             }))
        //     .catch(err => {
        //         console.log(err);
        //     })
        setMsg('');
    }
    return (
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                // theme='dark'
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* <button onClick={sendMsgSucNotify}>sendMsgSucNotify!</button> */}
            {/* <div className="pb-3">
                <h6 className="font-weight-bold text-dark mb-1">Because you viewed</h6>
                <p className="mb-0 text-muted">Designer at Google?</p>
            </div> */}
            {/* <JobItem job="Product Director" company="Spotify Inc." location=" India, Punjab" img="img/l3.png" border="" /> */}
            {/* <JobItem job=".NET Developer" company="Invision" location=" London, UK" img="img/l4.png" border="" /> */}

            <div className="box shadow-sm border rounded bg-white mb-3">
                <form onSubmit={sendMsg}>
                    <div className="box-title border-bottom p-3">
                        <h6 className="m-0">To Admin</h6>
                    </div>
                    <div className="w-100 border-top border-bottom">
                        <textarea placeholder="Write a message…" className="form-control border-0 p-3 shadow-none" rows="2" value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
                    </div>
                    <div className="p-3 d-flex align-items-center">
                        <div className="overflow-hidden">
                            {/* <button type="button" className="btn btn-light btn-sm rounded">
                                <i className="feather-image"></i>
                            </button>
                            <button type="button" className="btn btn-light btn-sm rounded">
                                <i className="feather-paperclip"></i>
                            </button>
                            <button type="button" className="btn btn-light btn-sm rounded">
                                <i className="feather-camera"></i>
                            </button> */}
                        </div>
                        <span className="ml-auto">
                            <button type="submit" className="btn btn-primary btn-sm rounded" >
                                <i className="feather-send"></i> Send
                            </button>
                        </span>
                    </div>
                </form>
            </div>

            {/* <PeopleBox title="People you might know" btnStyle="btn-outline-primary" btnIcon="feather-user-plus" /> */}
        </aside>
    );
}

export default AsideRight;