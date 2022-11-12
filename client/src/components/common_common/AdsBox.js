import React from 'react'
import classnames from 'classnames';

function AdsBox(props) {
    return (

        <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
            <img src={props.img} className="img-fluid" alt="" />
            <div className="p-3 border-bottom">
                <h6 className={classnames('font-weight-bold', props.titleStyle)} >{props.title}</h6>
                <p className="mb-0 text-muted">{props.desc}</p>
            </div>
            <div className="p-3">
                <button type="button" className={classnames('btn', props.btnStyle, 'pl-4 pr-4')}> {props.btn} </button>
            </div>
        </div>
    );
}

export default AdsBox;