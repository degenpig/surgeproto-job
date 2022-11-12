import React from 'react'
import Iframe from 'react-iframe';

import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <div className="card overflow-hidden">
            <Iframe url={props.url} width="100%" height="150" frameborder="0" style=
                {{ border: "0" }} allowfullscreen="" />
            <div className="card-body">
                <h6 className="card-title">{props.title}</h6>
                <p className="card-text">{props.desc}</p>
                <Link to="#" className="text-link font-weight-bold"><i className="feather-external-link"></i> Get Directions</Link>
            </div>
        </div>
    );
}

export default Card;