import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import UserContext from '../../common/UserContext';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../../config/api';

function AdminMailboxMail(props) {

    const [msg, setMsg] = useState('');
    const id = props.creator_id;
    const del_id = props._id;
    const userContext = useContext(UserContext);
    const profile = userContext.profile;

    const [userProfile, setUserProfile] = useState();
    const [avatar, setAvatar] = useState('img/default_avatar.png');
    const [name, setName] = useState('');


    const getProfile = () => {
        axios.get(`${API_URL}/getProfile`)
            .then(res => {
                console.log(res.data);
                userContext.setProfile(res.data)
            })
    }

    const deleteMsgNotify = () => toast.success(' The message has been successfully deleted.', {
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
        getUserProfile();
        getProfile();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            getUserProfile();
            getProfile();
        }, 5000);
    });
    const getUserProfile = () => {
        axios.get(`${API_URL}/userProfile/getUserProfile/${id}`, {
            id: id
        })
            .then(res => {
                setUserProfile(res.data);
                setName(userProfile.name);
                setAvatar(userProfile.avatar);
            })
    }


    const deleteMsg = (e) => {
        axios.get(`${API_URL}/adminMailbox/deleteMsg/${del_id}`
        ).then(() => {
            deleteMsgNotify();
        })
            .catch(err => {
                console.log(err);
                alert(err);
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



    const sendMsg = async (e) => {
        e.preventDefault();
        await axios.post(`${API_URL}/msg/addMsgHim`, {
            owner: id,
            msg: msg,
            opponent: profile._id,
            direction: 'come'
        })
        await axios.post(`${API_URL}/msg/addMsgMe`, {
            owner: profile._id,
            msg: msg,
            opponent: id,
            direction: 'go'
        })
        sendMsgSucNotify();

        // alert(id + ',' + myId + ',' + msg)
        setMsg('')
        console.clear();
        await axios.post(`${API_URL}/userProfile/updateUserProfile/addConnection/${profile._id}`, {
            creator_id: id
        })
        await axios.post(`${API_URL}/userProfile/updateUserProfile/addConnection/${id}`, {
            creator_id: profile._id
        })
        // getProfile()
        // getUserProfile();


    }
    return (
        <div className='d-block border-top'>
            <div className="text-center my-3">
                <span className="px-3 py-2 small bg-light shadow-sm rounded">{props.createdAt.substr(0, 10)}</span>
            </div>
            <div className="d-block align-items-center osahan-post-header">
                <div className='col-12 d-flex'>
                    <div className="dropdown-list-image mr-3 mb-auto"><img className="rounded-circle" src={avatar} alt="" /></div>
                    <div className="mr-1">
                        <div className="text-truncate h6 mb-3">{name}
                        </div>
                        <p>{props.msg}
                        </p>
                    </div>
                    <span className="ml-auto mb-auto">
                        <div className="text-right text-muted pt-1 small">{props.createdAt.substr(11, 5)}</div>
                    </span>
                </div>
                <div className='col-12 d-flex'>
                    <span className="ml-auto right">
                        <button type="button" data-toggle="collapse" data-target={'#msgArea' + props.i} className="btn btn-light btn-sm rounded">
                            <i className="feather-send"></i>
                        </button>
                        {/* <button type="button" className="btn btn-light btn-sm rounded">
                            <i className="feather-phone"></i>
                        </button>
                        <button type="button" className="btn btn-light btn-sm rounded">
                            <i className="feather-video"></i>
                        </button> */}
                        <div className="btn-group">
                            <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="feather-more-vertical"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button className="dropdown-item" type="button" onClick={deleteMsg}><i className="feather-trash"></i> Delete</button>
                                <button className="dropdown-item" type="button"><i className="feather-x-circle"></i> Turn Off</button>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            <div id={'msgArea' + props.i} class="collapse">
                <div className="w-100 border-top border-left border-right border-bottom">
                    <form onSubmit={sendMsg}>
                        <div className="w-100 border-top border-bottom">
                            <textarea placeholder="Write a message…" className="form-control bg-light border-0 p-3 shadow-none" rows="2" value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
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
            </div>
        </div>


    );
}

export default AdminMailboxMail;