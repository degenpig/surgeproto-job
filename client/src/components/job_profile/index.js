import React, { useEffect, useState, useContext } from 'react'


import { Link } from "react-router-dom";
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import Nav from '../layout/Nav';
import AsideLeft from './aside_left';
import AsideRight from './aside_right';
import Main from './main';
import { API_URL } from '../../config/api';

function JobProfile(props) {
    const { state } = useLocation();
    const id = state
    const [jobProfile, setJobProfile] = useState([]);

    useEffect(() => {
        getJobProfile();
    }, []);

    const getJobProfile = () => {
        axios.get(`${API_URL}/job/getJobProfile/${id}`, {
            id: id
        })
            .then(res => {
                // alert('success');
                console.log(res.data);
                setJobProfile(res.data);
            })
    }

    return (
        <div>
            <Nav />

            <div className="profile-cover text-center">
                <img className="img-fluid" src="img/job-profile.jpg" alt="" />
            </div>
            <div className="bg-white shadow-sm border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex align-items-center py-3">
                                <div className="profile-left">
                                    <h5 className="font-weight-bold text-dark mb-1 mt-0">{jobProfile.title}</h5>
                                    <p className="mb-0 text-muted"><Link className="mr-2 font-weight-bold" to="#">{jobProfile.company}</Link> <i className="feather-map-pin"></i> {jobProfile.location}</p>
                                </div>
                                <div className='ml-5'><h5>{jobProfile.price} SOL</h5></div>
                                <div className="profile-right ml-auto d-flex">
                                    {/* <button type="button" className="btn btn-light mr-1"> &nbsp; Save &nbsp; </button> */}

                                    {jobProfile.contact == 'none' || jobProfile.contact == 'denied' ?
                                        <button type="button" className="btn btn-primary"> &nbsp; Offer &nbsp; </button> : null}
                                    {jobProfile.contact == 'approved' ?
                                        <h5 className="font-weight-bold allowed-color mb-0 mr-3 mt-0">Approved</h5> : null}
                                    {jobProfile.contact == 'pending' ?
                                        <h5 className="font-weight-bold text-gray-500 mb-0 mr-3 mt-0">Pending</h5> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <AsideLeft jobProfile={jobProfile} />
                        <Main jobProfile={jobProfile} />
                        <AsideRight jobProfile={jobProfile} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default JobProfile;