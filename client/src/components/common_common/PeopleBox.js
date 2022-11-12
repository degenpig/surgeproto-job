import React from 'react'
import Person from './Person';

function PeopleBox(props) {
    return (
        <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
                <h6 className="m-0">{props.title}</h6>
            </div>
            <div className="box-body p-3">
                <Person photo="img/p8.png" mark="" name="Sophia Lee" job="Student at Harvard" btnStyle={props.btnStyle} btn={props.btn} btnIcon={props.btnIcon} />

            </div>
        </div>
    );
}

export default PeopleBox;