import React from 'react'
import classnames from 'classnames';

function Experience(props) {
    return (
        <div className={classnames('box-body p-3', props.border)}>
            <div className="d-flex align-items-top job-item-header pb-2">
                <div className="mr-2">
                    <h6 className="font-weight-bold text-dark mb-0">{props.title}</h6>
                    <div className="text-truncate text-primary">{props.subTitle}</div>
                    <div className="small text-gray-500">{props.period}</div>
                </div>
                <img className="img-fluid ml-auto mb-auto" src={props.img} alt="" />
            </div>
            <p className="mb-0">{props.desc}</p>
        </div>
    );
}

export default Experience;