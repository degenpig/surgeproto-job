import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from '../../common/UserContext';
import { useNavigate } from 'react-router-dom';

import EducationBox from './EducationBox';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../../config/api';

function Education(props) {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    let navigate = useNavigate();

    const [id, setId] = useState(profile._id);
    const [school, setSchool] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [fieldofstudy, setFieldofstudy] = useState('');
    const [degree, setDegree] = useState('');
    const [desc, setDesc] = useState('');


    // const updateItem = (e) => {
    //     e.preventDefault();
    //     axios.post(`${API_URL}/userProfile/updateUserProfile/${id}`, {
    //         education.school: school,
    //         bio: bio,
    //         profile_sign: true
    //     }).then(() => {
    //         // console.log(res);
    //         // console.log(history);
    //         // Navigate("/");
    //         // <Redirect to="/" /> 
    //         console.log("Updated!");
    //     })
    //         .catch(err => {
    //             console.log(err);
    //         })

    // }


    const sucNotify = () => toast.success('User Profile Education added successfully!', {
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
        axios.post(`${API_URL}/userProfile/updateUserProfile/addEducation/${id}`, {
            school: school,
            degree: degree,
            fieldofstudy: fieldofstudy,
            from: from,
            to: to,
            desc: desc
        })
            .then(res => {
                console.log(res);
                // navigate("/home");
                sucNotify();
            })
            .catch(err => {
                console.log(err);
                alert(err);
            })
    }

    return (
        <div className="border rounded bg-white mb-3">

            <EducationBox education={props.education} />
            <div id="educationInsert">
                <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-bs-toggle="collapse" data-bs-target="#education">
                        Insert New...
                        <span className="card-btn-arrow">
                            <span className="feather-chevron-down"></span>
                        </span>
                    </button>
                </h5>
            </div>
            <div id="education" className="collapse" >
                <form onSubmit={addItem}>
                    <div className="card-body border-top p-3 text-muted">
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
                                <label id="companyLabel" className="form-label">School</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter your school" aria-label="Enter your company title" aria-describedby="companyLabel" onChange={(e) => setSchool(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-sm-4 mb-4">
                                <label id="positionLabel" className="form-label">Degree</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter your degree" aria-label="Enter your position" aria-describedby="positionLabel" onChange={(e) => setDegree(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-sm-4 mb-4">
                                <label id="positionLabel" className="form-label">Field of study</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter your field of study" aria-label="Enter your position" aria-describedby="positionLabel" onChange={(e) => setFieldofstudy(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-sm-12 mb-4">
                                <label className="mb-1">Description</label>
                                <div className="position-relative">
                                    <textarea className="form-control" rows="3" name="text" placeholder="Enter description" onChange={(e) => setDesc(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="overflow-hidden text-center mb-4 col-sm-12">
                                <button type='submit' className="font-weight-bold col-sm-12 btn btn-light rounded p-3 d-block" > Insert New Education </button>
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

export default Education;