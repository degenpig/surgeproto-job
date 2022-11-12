import React, { useEffect, useState } from 'react'
import axios from 'axios';
import JobItem3 from '../../common_common/JobItem3';
import ProfileForm from '../main/ProfileForm';
import JobTransfer from './JobTransfer';
import GigTransfer from './GigTransfer';
import AdminMailboxMail from './AdminMailboxMail';
import { API_URL } from '../../../config/api';

function AsideRight() {
    const [jobTransferList, setJobTransferList] = useState([]);
    const [gigTransferList, setGigTransferList] = useState([]);
    const [adminMailboxList, setAdminMailboxList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getJobTransferList();
            getGigTransferList();
            getAdminMailboxList();
        }, 5000);
    });

    useEffect(() => {
        getJobTransferList();
        getGigTransferList();
        getAdminMailboxList();
    }, []);


    const getJobTransferList = () => {
        axios.get(`${API_URL}/job_transfer/getAll`)
            .then(res => {
                console.log(res.data);
                setJobTransferList(res.data)
            })
    }

    const getGigTransferList = () => {
        axios.get(`${API_URL}/gig_transfer/getAll`)
            .then(res => {
                console.log(res.data);
                setGigTransferList(res.data)
            })
    }

    const getAdminMailboxList = () => {
        axios.get(`${API_URL}/adminMailbox/getAll`)
            .then(res => {
                console.log(res.data);
                setAdminMailboxList(res.data)
            })
    }

    return (
        <aside className="col col-xl-6 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                {/* <form className="job-search p-3 border-bottom">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search transfer" aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">
                                <i className="feather-search"></i>
                            </button>
                        </div>
                    </div>
                </form> */}
                <ul className="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="job-tab" data-toggle="tab" href="#job_transfer" role="tab" aria-controls="job" aria-selected="true" onClick={getJobTransferList}>Job Transfer Permission</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#gig_transfer" role="tab" aria-controls="profile" aria-selected="false" onClick={getJobTransferList}>Gig Transfer Permission</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="type-tab" data-toggle="tab" href="#other" role="tab" aria-controls="type" aria-selected="false">Admin Mailbox</a>
                    </li>
                </ul>
                <div className="tab-content" id="jobTabContent">
                    <div className="tab-pane fade show active" id="job_transfer" role="tabpanel" aria-labelledby="job-tab">
                        <div className="p-3 border-top">
                            <div className="row">
                                <ul className="list-group list-group-flush full-width">
                                    {jobTransferList &&
                                        jobTransferList.map((item, i) => {
                                            return (
                                                <JobTransfer key={i} _id={item._id} job_id={item.job_id} fromUsername={item.fromUsername} toAddress={item.toAddress} toUsername={item.toUsername} price={item.price} i={i + 4000000} fromAddress={item.fromAddress} state={item.state} />)
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="gig_transfer" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="p-3 w-100">
                            <div className="row">
                                <ul className="list-group list-group-flush full-width">
                                    {gigTransferList &&
                                        gigTransferList.map((item, i) => {
                                            return (
                                                <GigTransfer key={i} _id={item._id} gig_id={item.gig_id} fromUsername={item.fromUsername} toUsername={item.toUsername} price={item.price} i={i + 5000000} fromAddress={item.fromAddress} toAddress={item.toAddress} state={item.state} />)
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="other" role="tabpanel" aria-labelledby="type-tab">
                        <div className="p-3 w-100">
                            <div className="row">
                                <div class="osahan-chat-box p-3 border-top border-bottom  full-width">
                                    {adminMailboxList &&
                                        adminMailboxList.map((item, i) => {
                                            return (
                                                <AdminMailboxMail key={i} _id={item._id} creator_id={item.from} createdAt={item.createdAt} i={i + 6000000} msg={item.msg} />)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default AsideRight;