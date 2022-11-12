import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Switch } from 'react-switch-input';
import { API_URL } from '../../../config/api';

function ProfileForm(props) {

    const [id, setId] = useState(props._id);
    const [state, setState] = useState(props.state);


    useEffect(() => {
        console.log(id);
        console.log(state);
        updateProfileFormState();
    }, [state])

    const updateProfileFormState = (e) => {
        axios.post(`${API_URL}/profileForm/updateState/${id}`, {
            state: state,
        }).then(() => {
            console.log("Updated!");
        })
            .catch(err => {
                console.log(err);
            })
    }
    const handleChange = (e) => {
        setState(!state);
    }


    return (
        <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-file-text mr-2 text-dark"></i> {props.name} <span className="ml-auto font-weight-bold">
            <Switch name={id} value={state} checked={state} on={true} off={false} onChange={handleChange} /></span></li>
    );
}

export default ProfileForm;