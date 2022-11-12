import React, { useEffect, useState } from 'react'
import axios from 'axios';
import JobItem3 from '../../common_common/JobItem3';
import GigItem3 from '../../common_common/GigItem3';
import ProfileForm from './ProfileForm';
import { API_URL } from '../../../config/api';

function Main() {
    const [jobList, setJobList] = useState([]);
    const [formList, setFormList] = useState([]);
    const [gigList, setGigList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getJoblist();
            getFormlist();
            getGiglist();
        }, 5000);
    });

    useEffect(() => {
        getJoblist();
        getFormlist();
        getGiglist();
    }, []);


    const getJoblist = () => {
        axios.get(`${API_URL}/job/getAllJobs`)
            .then(res => {
                console.log(res.data);
                setJobList(res.data)
            })
    }


    const getGiglist = () => {
        axios.get(`${API_URL}/gig/getAllGigs`)
            .then(res => {
                console.log(res.data);
                setGigList(res.data)
            })
    }

    const getFormlist = () => {
        axios.get(`${API_URL}/profileForm/getAll`)
            .then(res => {
                console.log(res.data);
                setFormList(res.data)
            })
    }


    return (
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                {/* <form className="job-search p-3 border-bottom">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search jobs, gigs, profile forms..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">
                                <i className="feather-search"></i>
                            </button>
                        </div>
                    </div>
                </form> */}
                <ul className="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="job-tab" data-toggle="tab" href="#job" role="tab" aria-controls="job" aria-selected="true" onClick={getJoblist}>Job Permission</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" onClick={getGiglist}>Gig permission</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" onClick={getJoblist}>Blocked Jobs</a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" id="type-tab" data-toggle="tab" href="#type" role="tab" aria-controls="type" aria-selected="false">Profile Form</a>
                    </li>
                </ul>
                <div className="tab-content" id="jobTabContent">
                    <div className="tab-pane fade show active" id="job" role="tabpanel" aria-labelledby="job-tab">
                        <ul class="nav nav-jobs mb-3 p-3 job-tags" id="jobs-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button className="nav-link active btn btn-outline-primary btn-sm mr-1" id="jobs-home-tab" data-bs-toggle="pill" data-bs-target="#all-jobs" type="button" role="tab" aria-controls="all-jobs" aria-selected="true" onClick={getJoblist}>All</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button className="nav-link btn btn-outline-secondary btn-sm mr-1" id="jobs-profile-tab" data-bs-toggle="pill" data-bs-target="#allowed-jobs" type="button" role="tab" aria-controls="allowed-jobs" aria-selected="false" onClick={getJoblist}>Allowed</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button className="btn btn-outline-secondary btn-sm mr-1 nav-link" id="jobs-contact-tab" data-bs-toggle="pill" data-bs-target="#blocked-jobs" type="button" role="tab" aria-controls="blocked-jobs" aria-selected="false" onClick={getJoblist}>Blocked</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="jobs-tabContent">
                            <div class="tab-pane fade show active" id="all-jobs" role="tabpanel" aria-labelledby="all-jobs-tab">
                                <div className="p-3 border-top">
                                    <div className="row">
                                        {jobList &&
                                            jobList.map((item, i) => {
                                                return item.state == true || item.state == false ?
                                                    <JobItem3 _id={item._id} job={item.title} company={item.company} location={item.location} state={item.state} i={i + 10000000} price={item.price} username={item.username} avatar={item.avatar} createdAt={item.createdAt} border="border" col="col-md-6" /> : null
                                            })
                                        }
                                    </div>
                                </div></div>
                            <div class="tab-pane fade" id="allowed-jobs" role="tabpanel" aria-labelledby="allowed-jobs-tab">
                                <div className="p-3 w-100">
                                    <div className="row">
                                        {jobList &&
                                            jobList.map((item, i) => {
                                                return item.state == true ?
                                                    <JobItem3 _id={item._id} job={item.title} company={item.company} location={item.location} state={item.state} i={i + 20000000} price={item.price} username={item.username} avatar={item.avatar} createdAt={item.createdAt} border="border" col="col-md-6" /> : null
                                            })
                                        }
                                    </div>
                                </div></div>
                            <div class="tab-pane fade" id="blocked-jobs" role="tabpanel" aria-labelledby="blocked-jobs-tab">
                                <div className="p-3 w-100">
                                    <div className="row">
                                        {jobList &&
                                            jobList.map((item, i) => {
                                                return item.state == false ?
                                                    <JobItem3 _id={item._id} job={item.title} company={item.company} location={item.location} state={item.state} i={i + 30000000} price={item.price} getJoblist={getJoblist} username={item.username} avatar={item.avatar} createdAt={item.createdAt} border="border" col="col-md-6" /> : null
                                            })
                                        }
                                    </div>
                                </div></div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <ul class="nav nav-pills mb-3 p-3 job-tags" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button className="nav-link active btn btn-outline-primary btn-sm mr-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={getGiglist}>All</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button className="nav-link btn btn-outline-secondary btn-sm mr-1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={getGiglist}>Allowed</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button className="btn btn-outline-secondary btn-sm mr-1 nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={getGiglist}>Blocked</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="p-3 border-top">
                                    <div className="row">
                                        {gigList &&
                                            gigList.map((item, i) => {
                                                return item.state == true || item.state == false ?
                                                    <GigItem3 _id={item._id} job={item.title} company={item.company} location={item.location} state={item.state} i={i + 40000000} price={item.price} border="border" col="col-md-6" /> : null
                                            })
                                        }
                                    </div>
                                </div></div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="p-3 w-100">
                                    <div className="row">
                                        {gigList &&
                                            gigList.map((item, i) => {
                                                return item.state == true ?
                                                    <GigItem3 _id={item._id} job={item.title} company={item.company} location={item.location} state={item.state} i={i + 50000000} price={item.price} border="border" col="col-md-6" /> : null
                                            })
                                        }
                                    </div>
                                </div></div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div className="p-3 w-100">
                                    <div className="row">
                                        {gigList &&
                                            gigList.map((item, i) => {
                                                return item.state == false ?
                                                    <GigItem3 _id={item._id} job={item.title} company={item.company} location={item.location} state={item.state} i={i + 60000000} price={item.price} border="border" col="col-md-6" /> : null
                                            })
                                        }
                                    </div>
                                </div></div>
                        </div>
                    </div>
                    {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    </div> */}
                    <div className="tab-pane fade" id="type" role="tabpanel" aria-labelledby="type-tab">
                        <div className="p-3 w-100">
                            <div className="row">
                                <ul className="list-group list-group-flush full-width">
                                    {formList &&
                                        formList.map((item, i) => {
                                            return (
                                                <ProfileForm key={i} _id={item._id} name={item.name} state={item.state} />)
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;