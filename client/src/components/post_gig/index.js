import React, { useContext } from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from '../common/UserContext';
import { useNavigate } from 'react-router-dom';
import JobItem from '../common_common/JobItem';

import Nav from '../layout/Nav';
import { API_URL } from '../../config/api';

function PostGig() {

    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    let navigate = useNavigate();

    const [gigList, setGigList] = useState([]);
    const [creator, setCreator] = useState(profile._id);
    const [gigName, setGigName] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [overview, setOverview] = useState('');
    const [price, setprice] = useState('');

    const getProfile = () => {
        axios.get(`${API_URL}/getProfile`)
            .then(res => {
                console.log(res.data);
                userContext.setProfile(res.data)
            })
    }

    useEffect(() => {
        console.log('useeffect');
        if (profile._id == null || profile._id == undefined || profile.walletAddress == null || profile.walletAddress == undefined || profile.walletAddress.length < 10) {
            // navigate("/home");
            console.log('Profile reloaded!');
            getProfile();
            console.log("done");
        }
        getGiglist();
    }, []);


    const addItem = (e) => {

        e.preventDefault();
        axios.post(`${API_URL}/gig/addGig`, {
            creator: creator,
            avatar: profile.avatar,
            username: profile.username,
            title: gigName,
            company: company,
            location: location,
            overview: overview,
            price: price,
            walletAddress: profile.walletAddress
        })
            .then(res => {
                console.log(res);
                alert('Post gig success!');
                navigate("/gigs");
            })
            .catch(err => {
                console.log(err);
            })
    }
    const getGiglist = () => {
        axios.get(`${API_URL}/gig/getAllGigs`)
            .then(res => {
                console.log(res.data);
                setGigList(res.data)
            })
    }

    return (
        <div>
            <Nav />
            <div className="py-5 bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <h1 className="text-white font-weight-light">Post New<span className="font-weight-bold">  Gig</span></h1>
                            <p className="mb-2 text-white-50">Total gigs: {gigList.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <main className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                            <div className=" border rounded bg-white mb-3 box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                                <form onSubmit={addItem}>
                                    <h5 className="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">Gig Information</h5>
                                    <div className="box-title border-bottom p-3">
                                        <h6 className="mt-2 mb-2">Gig name</h6>
                                        <input className='form-control' value={gigName} onChange={(e) => setGigName(e.target.value)} required />
                                        <h6 className="mt-2 mb-2" >Company</h6>
                                        <input className='form-control' value={company} onChange={(e) => setCompany(e.target.value)} required />
                                        <h6 className="mt-2 mb-2" >Location</h6>
                                        <input className='form-control' value={location} onChange={(e) => setLocation(e.target.value)} required />
                                        <h6 className="mt-2 mb-2" >Price ( SOL )</h6>
                                        <input type='number' min='0' step="0.001" className='form-control' value={price} onChange={(e) => setprice(e.target.value)} required />
                                    </div>
                                    <div className="box-title border-bottom p-3">
                                        <h6 className="m-0">Overwiew</h6>
                                        <p className="mb-0 mt-0 small">
                                        </p>
                                        <div className="position-relative mt-1">
                                            <textarea className="form-control" rows="4" name="text" placeholder="Enter Overview" value={overview} onChange={(e) => setOverview(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                    <div className="box-title border-bottom p-3">
                                        {/* <h6 className="m-0">Job Details</h6>
                                    <p className="mb-0 mt-0 small">
                                    </p> */}
                                        <div className="position-relative mt-1">

                                        </div>
                                        <button type='submit' className='btn btn-primary pl-4 pr-4' >POST </button>
                                    </div>
                                </form>
                            </div>
                        </main>
                        <aside className="col col-xl-3 order-xl-2 col-lg-12 order-lg-2 col-12">
                            {/* <div className="box mb-3 shadow-sm border rounded bg-white list-sidebar">
                                <div className="box-title p-3">
                                    <h6 className="m-0">Recent Gigs</h6>
                                </div>
                                <div className='row'>
                                    {gigList &&
                                        gigList.map((item, i) => {

                                            return gigList[i].state == true && i < 5 ?
                                                <JobItem key={i} job={item.title} company={item.company} location={item.location} img="img/l1.png" border="border" col="col-md-12 p-3" />
                                                : null
                                        })
                                    }</div>
                            </div> */}
                        </aside>
                    </div>
                </div>
            </div >

        </div >
    );
}

export default PostGig;