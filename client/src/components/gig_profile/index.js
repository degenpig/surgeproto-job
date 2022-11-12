import React, { useEffect, useState, useContext } from 'react'


import { Link } from "react-router-dom";
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import Nav from '../layout/Nav';
import AsideLeft from './aside_left';
import AsideRight from './aside_right';
import Main from './main';
import { API_URL } from '../../config/api';

function GigProfile(props) {
    // const location = useLocation()
    // const id = props.location.props.id;
    // console.log('asdfasdf:' + id);
    // const params = useParams();
    // const id = params.id
    // console.log("thanks;;;;", id);
    const { state } = useLocation();
    const id = state;
    const [gigProfile, setGigProfile] = useState([]);

    // console.log('idididididididid' + id);


    useEffect(() => {
        getGigProfile();
    }, []);

    const getGigProfile = () => {
        axios.get(`${API_URL}/gig/getGigProfile/${id}`, {
            id: id
        })
            .then(res => {
                // alert('success');
                console.log(res.data);
                setGigProfile(res.data);
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
                                    <h5 className="font-weight-bold text-dark mb-1 mt-0">{gigProfile.title}</h5>
                                    <p className="mb-0 text-muted"><Link className="mr-2 font-weight-bold" to="#">{gigProfile.company}</Link> <i className="feather-map-pin"></i> {gigProfile.location}</p>
                                </div>
                                <div className='ml-5'><h5>{gigProfile.price} SOL</h5></div>
                                <div className="profile-right ml-auto d-flex">
                                    {/* <button type="button" className="btn btn-light mr-1"> &nbsp; Save &nbsp; </button> */}

                                    {gigProfile.contact == 'none' || gigProfile.contact == 'denied' ?
                                        <button type="button" className="btn btn-primary"> &nbsp; Offer &nbsp; </button> : null}
                                    {gigProfile.contact == 'approved' ?
                                        <h5 className="font-weight-bold allowed-color mb-0 mr-3 mt-0">Approved</h5> : null}
                                    {gigProfile.contact == 'pending' ?
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
                        <AsideLeft gigProfile={gigProfile} />
                        <Main gigProfile={gigProfile} />
                        <AsideRight gigProfile={gigProfile} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GigProfile;