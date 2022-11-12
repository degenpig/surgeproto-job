import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from '../../common/UserContext';
import { useNavigate } from 'react-router-dom';

import ExperienceBox from "./ExperienceBox";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../../config/api';

function Experience(props) {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    let navigate = useNavigate();

    const [id, setId] = useState(profile._id);
    const [title, setTitle] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('');
    const [desc, setDesc] = useState('');

    // const [experienceList, setExperienceList] = useState(null);
    // const data = profile.experience;

    // useEffect(() => {
    //     setExperienceList(data);
    // }, []);


    const sucNotify = () => toast.success('User Profile Experience added successfully!', {
        position: "top-right",
        theme: 'dark',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const addItem = (e) => {

        e.preventDefault();
        axios.post(`${API_URL}/userProfile/updateUserProfile/addExperience/${id}`, {
            title: title,
            company: company,
            location: location,
            from: from,
            to: to,
            desc: desc
        })
            .then(res => {
                console.log(res);
                sucNotify();
                // navigate("/home");
            })
            .catch(err => {
                console.log(err);
                alert(err);
            })
    }


    return (
        <div className="border rounded bg-white mb-3">
            <ExperienceBox experience={props.experience} />
            {/* <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                    <h6 className="m-0">Experience</h6>
                </div>
                {experienceList &&
                    experienceList.map((item, i) => {
                        return experienceList === null || experienceList === undefined ?
                            <Experience key={i} desc="There is no data..." border="border-bottom" />
                            :
                            <Experience key={i} id={item._id} title={item.title} subTitle={item.company} from={item.from} to={item.to} img="img/l6.png" desc={item.description} border="border-bottom" />
                    })
                }
            </div> */}
            <div id="experienceInsert">
                <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-bs-toggle="collapse" data-bs-target="#experience">
                        Insert New...
                        <span className="card-btn-arrow">
                            <span className="feather-chevron-down"></span>
                        </span>
                    </button>
                </h5>
            </div>
            <div id="experience" className="collapse" >
                <form onSubmit={addItem}>
                    <div className="box-body px-3 pt-3 pb-0">
                        <div className="row">
                            <div className="col-sm-6 mb-4">
                                <label id="FROM" className="form-label">FROM</label>
                                <div className="input-group">
                                    <input type="date" className="form-control" placeholder="From" aria-label="FROM" aria-describedby="FROM" onChange={(e) => setFrom(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-sm-6 mb-4">
                                <label id="TO" className="form-label">TO</label>
                                <div className="input-group">
                                    <input type="date" className="form-control" placeholder="TO" aria-label="TO" aria-describedby="TO" onChange={(e) => setTo(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 mb-4">
                                <label id="companyLabel" className="form-label">Title</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter your company title" aria-label="Enter your Experience title" aria-describedby="titleLabel" onChange={(e) => setTitle(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-sm-4 mb-4">
                                <label id="companyLabel" className="form-label">Company</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter your company title" aria-label="Enter your company title" aria-describedby="companyLabel" onChange={(e) => setCompany(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-sm-4 mb-4">
                                <label id="positionLabel" className="form-label">Location</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter your position" aria-label="Enter your position" aria-describedby="locationLabel" onChange={(e) => setLocation(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-sm-12 mb-4">
                                <label className="mb-1">Description</label>
                                <div className="position-relative">
                                    <textarea className="form-control" rows="3" name="text" placeholder="Enter description" onChange={(e) => setDesc(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="overflow-hidden text-center mb-4 col-sm-12">
                                <button type='submit' className="font-weight-bold col-sm-12 btn btn-light rounded p-3 d-block"> Insert New Experience </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Experience;