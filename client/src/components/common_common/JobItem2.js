import React from 'react'
import classNames from 'classnames';

import { Link } from 'react-router-dom'

function JobItem2(props) {
    return (
        <div className={classNames('shadow-sm rounded bg-white job-item-2 p-3 mb-3', props.border)}>
            <div className="media">
                <div className="u-avatar mr-3">
                    <img className="img-fluid" src={props.img} alt="" />
                </div>
                <div className="media-body">
                    <div className="mb-3">
                        <h6 className="font-weight-bold mb-0"><Link className="text-dark" to="job_profile">{props.job}</Link></h6>
                        <Link className="d-inline-block small pt-1" to="job_profile">
                            <span className="text-warning">
                                <span className="feather-star"></span>
                                <span className="feather-star"></span>
                                <span className="feather-star"></span>
                                <span className="feather-star text-gray-500"></span>
                                <span className="feather-star text-gray-500"></span>
                            </span>
                            <span className="text-dark font-weight-bold ml-2">3.74</span>
                            <span className="text-muted">(567 reviews)</span>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="border-right pr-3 mr-3">
                            <Link className="text-secondary small" to="job-profile.html">Salaries</Link>
                        </div>
                        <Link className="small" to="job-profile.html">Open jobs</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobItem2;