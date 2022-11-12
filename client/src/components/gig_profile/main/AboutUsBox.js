import React from 'react'

import { Link } from 'react-router-dom'

function AboutUSBox() {
    return (
        <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="img/p6.png" alt="" />
                </div>
                <div className="font-weight-bold">
                    <div className="text-truncate">Envato</div>
                    <div className="small text-gray-500">Internet | 24,044 followers</div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-light"><i className="feather-plus"></i> Follow</button></span>
            </div>
            <img src="img/post1.png" className="img-fluid" alt="" />
            <div className="p-3 osahan-post-body">
                <h5 className="mb-3">About us</h5>
                <p>Welcome! We’re so happy you found us. Since you’ve come this far, we’d love to take the opportunity to introduce ourselves.</p>
                <p className="mb-0">Our story starts in 2006 with three founders in a Sydney garage (no, we’re not kidding). Born from a desire to earn a living doing what they loved, with the flexibility to do it from anywhere, Envato set out to create an online community for buying and selling creative digital assets. Nearly 13 years later, we’re profitable and still totally bootstrapped. This allows us to stay super experimental and totally focused on the best interests of our authors and customers around the world.
                </p>
            </div>
            <div className="overflow-hidden border-top text-center">
                <Link className="font-weight-bold p-3 d-block" to="#"> READ MORE </Link>
            </div>
        </div>
    );
}

export default AboutUSBox;