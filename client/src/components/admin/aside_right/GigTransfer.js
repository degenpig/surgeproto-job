import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Switch } from 'react-switch-input';
import { API_URL } from '../../../config/api';


function GigTransfer(props) {

    const [id, setId] = useState(props._id);
    const [state, setState] = useState(props.state);
    const [contact, setContact] = useState();

    useEffect(() => {
        console.log(id);
        console.log(state);
        updateGigTransferState();
    }, [state])

    const updateGigTransferState = (e) => {
        axios.post(`${API_URL}/gig_transfer/updateState/${id}`, {
            state: state,
        }).then(() => {
            console.log("Updated!");
            if (state !== true) {
                setContact('approved')
            } else {
                setContact('denied')
            }
            const id = props.gig_id;
            axios.post(`${API_URL}/gig/updateGig/${id}`, {
                contact: contact
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })

        })
            .catch(err => {
                console.log(err);
            })
    }
    const handleChange = (e) => {
        setState(!state);
    }


    return (
        // <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"> <span>{props.fromUsername}</span><i className="feather-chevrons-right ml-2 mr-2 text-dark"></i><span>{props.toUsername}</span> <span className='ml-5 mr-5'>{props.price} SOL </span><span className="ml-auto font-weight-bold">
        //     {state == null ? <p className='transfer-state default-color'>Pending</p> : null}
        //     {state == true ? <p className='transfer-state allowed-color'>Approved</p> : null}
        //     {state == false ? <p className='transfer-state blocked-color'>Denied</p> : null}
        //     {/* <p className={classNames('transfer-state', state ? "allowed-color" : "blocked-color")}>{state ? "Approved" : "Denied"}</p> */}
        //     <Switch name={props.i} value={state} checked={state} on={true} off={false} onChange={handleChange} />
        // </span></li>

        <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark">
            <div className='col-6 p-0 d-block'>
                <div className='col-12 p-0 m-0'>
                    <span>{props.fromUsername}</span><i className="feather-chevrons-right ml-2 mr-2 text-dark"></i><span>{props.toUsername}</span>
                </div>
                {state == true ?
                    <div>
                        <div className='col-12 p-0 m-0'>
                            <span className='text-primary'>{props.toUsername}</span><i className=" feather-chevrons-left ml-2 mr-2 text-primary"></i><span className='text-primary'>{parseInt(props.price) * 0.94} SOL</span>
                        </div>
                        <div className='col-12 p-0 m-0'>
                            <span className='text-primary'>Server</span><i className=" feather-chevrons-left ml-2 mr-2 text-primary"></i><span className='text-primary'>{parseInt(props.price) * 0.06} SOL</span>
                        </div>
                    </div> : null}
            </div>
            <div className='col-4 p-0'>
                <span className='ml-5 mr-5'>{props.price} SOL </span>
            </div>
            <div className='col-2 p-0'>
                <span className="ml-auto font-weight-bold">
                    {state == null ? <p className='transfer-state default-color'>Pending</p> : null}
                    {state == true ? <p className='transfer-state allowed-color'>Approved</p> : null}
                    {state == false ? <p className='transfer-state blocked-color'>Denied</p> : null}
                    {/* <p className={classNames('transfer-state', state ? "allowed-color" : "blocked-color")}>{state ? "Approved" : "Denied"}</p> */}
                    <Switch name={props.i} value={state} checked={state} on={true} off={false} onChange={handleChange} />
                </span>
            </div>


        </li >
    );
}

export default GigTransfer;