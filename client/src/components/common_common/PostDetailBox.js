import React from 'react'

import { Link } from 'react-router-dom'

function PostDetailBox() {
    return (
        <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="img/p6.png" alt="" />
                    <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                    <div className="text-truncate">Collin Weiland</div>
                    <div className="small text-gray-500">Web Developer @Google</div>
                </div>
                <span className="ml-auto small">3 hours</span>
            </div>
            <div className="p-3 border-bottom osahan-post-body">
                <p>Lorem ipsum dolor sit amet, consectetur 😍😎 adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <Link to="#">laboris consequat.</Link></p>
                <img src="img/post2.png" className="img-fluid" alt="" />
            </div>
            <div className="p-3 border-bottom osahan-post-footer">
                <Link to="#" className="mr-3 text-secondary"><i className="feather-heart text-danger"></i> 16</Link>
                <Link to="#" className="mr-3 text-secondary"><i className="feather-message-square"></i> 8</Link>
                <Link to="#" className="mr-3 text-secondary"><i className="feather-share-2"></i> 2</Link>
            </div>
            <div className="p-3 d-flex align-items-top border-bottom osahan-post-comment">
                <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="img/p7.png" alt="" />
                    <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                    <div className="text-truncate"> James Spiegel <span className="float-right small">2 min</span></div>
                    <div className="small text-gray-500">Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum quia dolor sit amet, consectetur</div>
                </div>
            </div>
            <div className="p-3">
                <textarea placeholder="Add Comment..." className="form-control border-0 p-0 shadow-none" rows="1"></textarea>
            </div>
        </div>
    );
}

export default PostDetailBox;