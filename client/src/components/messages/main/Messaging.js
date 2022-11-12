import React, { useContext } from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
// import UserContext from '../../common/UserContext';

import { Link } from 'react-router-dom'
import Person from './Person';
import MsgPanel from './MsgPanel';
import { API_URL } from '../../../config/api';

function Messaging(props) {

    // const userContext = useContext(UserContext);
    const profile = props.profile;
    const connections = profile.connections;

    const id = profile._id
    // console.log('this is id', id);
    // console.log(id);

    // const [msgs, setMsgs] = useState();
    // const [avatar, setAvatar] = useState('img/default_avatar.png');
    // const [name, setName] = useState('');
    // const [msg, setMsg] = useState('');
    // const [id, setId] = useState(profile._id);


    const [msgList, setMsgList] = useState([]);
    // const [connectionList, setConnectionList] = useState(props.connections);
    const connectionList = connections;

    // useEffect(() => {
    //     if (profile._id == null || profile._id == undefined || profile.walletAddress == null || profile.walletAddress == undefined || profile.walletAddress.length < 10) {
    //         // navigate("/home");
    //         console.log('Profile reloaded!');
    //         getProfile();
    //         console.log("done");
    //     }
    //     getMsglist();
    // }, []);

    useEffect(() => {
        getMsglist();
    }, [])

    useEffect(() => {
        const interval = setInterval(async () => {
            await getMsglist();
        }, 2000);
        return () => clearInterval(interval)
    }, []);

    // const getProfile = () => {
    //     axios.get(`${API_URL}/getProfile")
    //         .then(res => {
    //             console.log(res.data);
    //             userContext.setProfile(res.data)
    //             setId(profile._id);
    //             setConnectionList(profile.connections);
    //             // getMsglist();
    //         })
    // }


    const getMsglist = async () => {
        // console.log("thanks")
        let response = await axios.get(`${API_URL}/msg/getAllMine/${id}`)
        let data = response.data
        // console.log('this is response data');
        // console.log(">>>>>>>>>>>", data);
        setMsgList(data);
    }


    // console.log('this is msg list');
    // console.log(msgList);
    // console.log('this is connection list');
    // console.log(connectionList);

    return (
        <div className="box shadow-sm rounded bg-white mb-3 osahan-chat">
            <h5 className="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">Messaging</h5>
            <div className="row m-0">
                <div className="border-right col-lg-5 col-xl-4 px-0">
                    <div className="osahan-chat-left">
                        {/* <div className="position-relative icon-form-control p-3 border-bottom">
                            <i className="feather-search position-absolute"></i>
                            <input placeholder="Search messages" type="text" className="form-control" />
                        </div> */}
                        <div className="osahan-chat-list">
                            <ul className="nav nav-pills overflow-hidden" role="tablist">
                                {connectionList &&
                                    connectionList.map((item, i) => {
                                        return (
                                            <Person key={i} _id={item.person_id} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-xl-8 px-0">
                    <div className="tab-content">
                        {msgList &&
                            msgList.map((item, i) => {
                                return (
                                    <MsgPanel msgList={msgList} key={i} myId={profile._id} direction={item.direction} createdAt={item.createdAt} userId={item.opponent} msg={item.msg} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Messaging;