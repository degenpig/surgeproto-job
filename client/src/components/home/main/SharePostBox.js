import React, { useContext } from 'react'

import UserContext from '../../common/UserContext';
import { Link } from 'react-router-dom'

function SharePostBox() {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    return (
        <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
            <ul className="nav nav-justified border-bottom osahan-line-tab" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i className="feather-edit"></i> Share an update</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i className="feather-image"></i> Upload a photo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><i className="feather-clipboard"></i> Write an article</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="p-3 d-flex align-items-center w-100" to="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src={profile.avatar} alt="" />
                            <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="w-100">
                            <textarea placeholder="Write your thoughts..." className="form-control border-0 p-0 shadow-none" rows="1"></textarea>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="p-3 w-100">
                        <textarea placeholder="Write your thoughts..." className="form-control border-0 p-0 shadow-none" rows="3"></textarea>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="p-3 w-100">
                        <textarea placeholder="Write an article..." className="form-control border-0 p-0 shadow-none" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <div className="border-top p-3 d-flex align-items-center">
                <div className="mr-auto"><Link to="#" className="text-link small"><i className="feather-map-pin"></i> Add Location</Link></div>
                <div className="flex-shrink-1">
                    <button type="button" className="btn btn-light btn-sm">Preview</button>
                    <button type="button" className="btn btn-primary btn-sm">Post Status</button>
                </div>
            </div>
        </div>
    );
}

export default SharePostBox;