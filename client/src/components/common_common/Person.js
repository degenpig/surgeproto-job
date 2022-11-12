import React from 'react'
import classnames from 'classnames';

function Person(props) {
    return (
        <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
            <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={props.photo} alt="" />
                <div className={classnames('status-indicator bg-success', props.mark)}></div>
            </div>
            <div className="font-weight-bold mr-2">
                <div className="text-truncate">{props.name}</div>
                <div className="small text-gray-500">{props.job}
                </div>
            </div>
            <span className="ml-auto"><button type="button" className={classnames('btn btn-sm', props.btnStyle)}><i className={props.btnIcon}></i>{props.btn}</button>
            </span>
        </div>
    );
}

export default Person;