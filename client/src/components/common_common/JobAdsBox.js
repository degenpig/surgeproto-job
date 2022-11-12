import React from 'react'

function JobAdsBox(props) {
    return (
        <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="p-5">
                <img src={props.img} className="img-fluid" alt="" />
            </div>
            <div className="p-3 border-top border-bottom">
                <h5 className="font-weight-bold text-dark mb-1 mt-0">{props.title}</h5>
                <p className="mb-0 text-muted">{props.subtitle}
                </p>
            </div>
            <div className="p-3">
                <div className="d-flex align-items-top mb-2">
                    <p className="mb-0 text-muted">Posted</p>
                    <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">{props.createdAt}</p>
                </div>
                <div className="d-flex align-items-top">
                    <p className="mb-0 text-muted">Applicant Rank</p>
                    <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">25</p>
                </div>
            </div>
        </div>
    );
}

export default JobAdsBox;