import React from 'react'

import { Link } from "react-router-dom";

function ManageNetworkBox() {
    return (
        <div className="box mb-3 shadow-sm border rounded bg-white list-sidebar">
            <div className="box-title p-3">
                <h6 className="m-0">Manage my network</h6>
            </div>
            <ul className="list-group list-group-flush">
                <Link to="#">
                    <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-users mr-2 text-dark"></i> Connections <span className="ml-auto font-weight-bold">68</span></li>
                </Link>
                <Link to="#">
                    <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-book mr-2 text-dark"></i> Contacts <span className="ml-auto font-weight-bold">869</span></li>
                </Link>
                <Link to="#">
                    <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-user-check mr-2 text-dark"></i> People I Follow <span className="ml-auto font-weight-bold">156</span></li>
                </Link>
                <Link to="#">
                    <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-message-circle mr-2 text-dark"></i> Groups <span className="ml-auto font-weight-bold">15</span></li>
                </Link>
                <Link to="#">
                    <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-clipboard mr-2 text-dark"></i> Page <span className="ml-auto font-weight-bold">3</span></li>
                </Link>
                <Link to="#">
                    <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-tag mr-2 text-dark"></i> Hashtag <span className="ml-auto font-weight-bold">8</span></li>
                </Link>
            </ul>
        </div>
    );
}

export default ManageNetworkBox;