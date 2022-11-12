import React from 'react'

function TextBox(props) {
    return (
        <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
                <h6 className="m-0">{props.title}</h6>
            </div>
            <div className="box-body p-3">
                <p>{props.text1}
                </p>
                <p className="mb-0">{props.text2}
                </p>
            </div>
        </div>
    );
}

export default TextBox;