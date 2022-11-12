import React from 'react'

import { Link } from 'react-router-dom'

function PostBox() {
    return (
        <div className="box shadow-sm border rounded bg-white mb-3 osahan-post">
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="img/p5.png" alt="" />
                    <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                    <div className="text-truncate">Tobia Crivellari</div>
                    <div className="small text-gray-500">Product Designer at wrapbootstrap</div>
                </div>
                <span className="ml-auto small">3 hours</span>
            </div>
            <div className="p-3 border-bottom osahan-post-body">
                <p className="mb-0">Tmpo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <Link to="#">laboris consequat.</Link></p>
            </div>
            <div className="p-3 border-bottom osahan-post-footer">
                <Link to="#" className="mr-3 text-secondary"><i className="feather-heart text-danger"></i> 16</Link>
                <Link to="#" className="mr-3 text-secondary"><i className="feather-message-square"></i> 8</Link>
                <Link to="#" className="mr-3 text-secondary"><i className="feather-share-2"></i> 2</Link>
            </div>
            <div className="p-3">
                <button type="button" className="btn btn-outline-primary btn-sm mr-1">Awesome!!</button>
                <button type="button" className="btn btn-light btn-sm mr-1">😍</button>
                <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Whats it about?</button>
                <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Oooo Great Wow</button>
            </div>
        </div>
    );
}

export default PostBox;