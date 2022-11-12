import React, { useContext } from 'react'
import axios from 'axios';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import UserContext from '../common/UserContext';
import { API_URL } from '../../config/api';

function GigItem(props) {
    const userContext = useContext(UserContext);
    let navigate = useNavigate();
    const profile = userContext.profile;
    const walletAddress = profile.walletAddress;

    const addTransferInfo = (e) => {
        if (profile._id == null || profile._id == undefined || profile.walletAddress == null || profile.walletAddress == undefined || profile.walletAddress.length < 10) {
            alert("Your wallet address does not exist!");
        } else {
            e.preventDefault();
            axios.post(`${API_URL}/gig_transfer/addInfo`, {
                fromAddress: profile.walletAddress,
                fromUsername: profile.username,
                toAddress: props.walletAddress,
                toUsername: props.username,
                price: props.price,
                gig_id: props.id
            })
                .then(res => {
                    console.log(res);
                    alert('Transfer Info was added!');

                    const id = props.id;
                    axios.post(`${API_URL}/gig/updateGig/${id}`, {
                        clientUsername: profile.username,
                        clientAvatar: profile.avatar,
                        contact: 'pending'
                    })
                        .then(res => {
                            console.log(res);
                            alert('Transfer Info was updated!');
                        })
                        .catch(err => {
                            console.log(err);
                        })

                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    const toGigProfile = (e) => {
        e.preventDefault();
        navigate('/gig_profile', { state: props.id });
    }

    return (
        // <div className={props.col}>
        //     <a onClick={toGigProfile} >
        //         <div className={classNames('shadow-sm rounded bg-white job-item mb-3', props.border)}>
        //             <div className="d-flex align-items-center p-3 job-item-header">
        //                 <div className="overflow-hidden mr-2">
        //                     <h6 className="font-weight-bold text-dark mb-0 text-truncate">{props.title}</h6>
        //                     <div className="text-truncate text-primary">{props.company}</div>
        //                     <div className="small text-gray-500"><i className="feather-map-pin"></i>{props.location}</div>
        //                 </div>
        //                 {/* <img className="img-fluid ml-auto" src={props.img} alt="" /> */}
        //                 <h5 className="font-weight-bold text-dark ml-auto text-truncate">{props.price} SOL</h5>
        //             </div>
        //             <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
        //                 <div className="overlap-rounded-circle">
        //                     <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p9.png" alt="" data-original-title="Sophi /a Lee" />
        //                     <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p10.png" alt="" data-original-title="John Doe" />
        //                     <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p11.png" alt="" data-original-title="Julia Cox" />
        //                     <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src="img/p12.png" alt="" data-original-title="Robert Cook" />
        //                 </div>
        //                 {/* <span className="font-weight-bold text-muted">18 connections</span> */}
        //             </div>
        //             <div className="p-3 job-item-footer d-flex">

        //                 <div className="col-7 p-0">
        //                     <small className="text-gray-500"><i className="feather-clock"></i> Posted 3 Days ago</small>
        //                 </div>
        //             </div>
        //         </div>
        //     </a>
        //     <div className="col-5 p-0">
        //         <button type="button" className="btn btn-outline-primary btn-sm btn-block offer-btn" onClick={addTransferInfo}> <i className="feather-user-plus"></i> Offer </button>
        //     </div>
        // </div>

        <div className={props.col}>
            <a onClick={toGigProfile} >
                <div className={classNames('shadow-sm rounded bg-white job-item mb-3', props.border)}>
                    <div className="d-flex align-items-center p-3 job-item-header">
                        <div className="overflow-hidden mr-2">
                            <h6 className="font-weight-bold text-dark mb-0 text-truncate">{props.title}</h6>
                            <div className="text-truncate text-primary">{props.company}</div>
                            <div className="small text-gray-500"><i className="feather-map-pin"></i>{props.location}</div>
                        </div>
                        {/* <img className="img-fluid ml-auto" src={props.img} alt="" /> */}
                        <div className='ml-auto'>
                            <div className='center'>
                                <img className="img-fluid " src={props.avatar} alt="" /></div>
                            <p className='mb-0 text-dark ta-center'>{props.username}</p></div>
                    </div>
                    <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                        <div className="overlap-rounded-circle d-flex col-1">
                            {props.contact == 'pending' || props.contact == 'approved' ? <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="" src={props.clientAvatar} alt="" /> : null}
                        </div>
                        {props.contact == 'pending' || props.contact == 'approved' ?
                            <div className='col-8 p-0 d-flex'>
                                <p className=" mb-0 text-dark text-truncate"> {props.clientUsername} </p><i className="feather-chevrons-right fs-18"></i>
                            </div> : null}
                        <p className="ml-auto mb-0 text-truncate">{props.price} SOL</p>
                    </div>
                    <div className="p-3 job-item-footer d-flex">

                        <div className="col-7 p-0">
                            <small className="text-gray-500"><i className="feather-clock"></i> {props.createdAt}</small>
                        </div>
                    </div>
                </div>
            </a>
            <div className="col-5 p-0 ml-auto">
                {props.contact == 'none' || props.contact == 'denied' ?
                    <button type="button" className="btn btn-outline-primary btn-sm btn-block offer-btn" onClick={addTransferInfo}> <i className="feather-user-plus"></i> Offer </button> : null}
                {props.contact == 'approved' ?
                    <p className=" mb-0 text-truncate font-weight-bold allowed-color offer-btn"><i className="feather-check-square"></i>  Approved</p> : null}
                {props.contact == 'pending' ?
                    <p className=" mb-0 text-truncate text-dark font-weight-bold offer-btn"><i className="feather-cast"></i>  Pending...</p> : null}
                {/* {props.contact == 'denied' ? 
                            <p className="ml-auto mb-0 text-truncate "> {props.contact}</p> : null } */}
            </div>
        </div>
    );
}

export default GigItem;