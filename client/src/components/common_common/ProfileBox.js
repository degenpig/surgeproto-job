import React from 'react'

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function ProfileBox(props) {
    const connections = props.connections;
    const views = props.views;

    let navigate = useNavigate();

    const toProfile = (e) => {
        // alert(props.profile_id);
        e.preventDefault();
        navigate('/profile', { state: props.profile_id });
    }

    return (
        <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="py-4 px-3 border-bottom">
                <img src={props.avatar} className="img-fluid mt-2 rounded-circle" alt="" />
                <h5 className="font-weight-bold text-dark mb-1 mt-4">{props.name}</h5>
                <p className="mb-0 text-muted">{props.username} <span>({props.job})</span></p>
            </div>
            {/* <div className="d-flex">
                <div className="col-6 border-right p-3">
                    <h6 className="font-weight-bold text-dark mb-1">{connections}</h6>
                    <p className="mb-0 text-black-50 small">Connections</p>
                </div>
                <div className="col-6 p-3">
                    <h6 className="font-weight-bold text-dark mb-1">{views}</h6>
                    <p className="mb-0 text-black-50 small">Views</p>
                </div>
            </div> */}
            {props.btn == 'Log out' ? null :
                <div className="overflow-hidden border-top">
                    <Link className="font-weight-bold p-3 d-block" onClick={toProfile}> {props.btn} </Link>
                </div>
            }
        </div>
    );
}

export default ProfileBox;