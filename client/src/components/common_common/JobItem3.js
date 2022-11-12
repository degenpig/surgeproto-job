import React, { useEffect, useState } from 'react'
import axios from 'axios';

import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';
import { Switch } from 'react-switch-input';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../config/api';

function JobItem3(props) {
    let navigate = useNavigate();
    const [id, setId] = useState(props._id);
    const [state, setState] = useState(props.state);

    const deleteJobNotify = () => toast.success(' Deleted successfully!', {
        position: "top-right",
        theme: 'dark',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const updateNotify = () => toast.success(' Updated successfully!', {
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
        console.log(id);
        console.log(state);
        updateJobState();
    }, [state])

    const updateJobState = (e) => {
        axios.post(`${API_URL}/job/updateState/${id}`, {
            state: state,
        }).then(() => {
            console.log("Updated!");
        })
            .catch(err => {
                console.log(err);
            })
    }

    const deleteJob = (e) => {
        axios.get(`${API_URL}/job/deleteJob/${id}`
        ).then(() => {
            deleteJobNotify();
        })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        // updateNotify();
        setState(!state);
    }

    return (
        <div className={props.col}>
            <a className='btn btn-link del-icon-btn small' onClick={deleteJob}><i className="feather-trash-2"></i></a>
            <a className='btn btn-link del-icon-btn small' onClick={deleteJob}><i className="feather-trash-2"></i></a>
            <div className={classNames('shadow-sm rounded bg-white job-item mb-3', props.border)}>
                <div className="d-flex align-items-center p-3 job-item-header">
                    <div className="overflow-hidden mr-2">
                        <h6 className="font-weight-bold text-dark mb-0 text-truncate">{props.job}</h6>
                        <div className="text-truncate text-primary">{props.company}</div>
                        <div className="small text-gray-500"><i className="feather-map-pin"></i>{props.location}</div>
                    </div>
                    <h5 className="font-weight-bold text-dark ml-auto text-truncate">{props.price} SOL</h5>
                </div>
                <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                    <div className="overlap-rounded-circle">
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src={props.avatar} alt="" data-original-title="Sophi /a Lee" />
                    </div>
                    <span className="font-weight-bold text-muted">{props.username}</span>
                </div>
                <div className="p-3 job-item-footer">
                    <small className="text-gray-500"><i className="feather-clock"></i> {props.createdAt}</small>
                </div>
            </div>
            <div className=" mb-5 mt-0">
                <p className={classNames('job-state', state ? "allowed-color" : "blocked-color")}>{state ? "Allowed" : "Blocked"}</p>
                <div className="job-switch">
                    <Switch name={props.i} id={id} value={state} checked={state} on={true} off={false} onChange={handleChange} />
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
            </div>
        </div >
    );
}

export default JobItem3;