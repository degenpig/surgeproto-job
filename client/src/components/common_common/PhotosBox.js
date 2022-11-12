import React from 'react'

import { Link } from 'react-router-dom'

function PhotosBox() {
    return (
        <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3 d-flex align-items-center">
                <h6 className="m-0">Photos</h6>
                <Link className="ml-auto" to="#">See All <i className="feather-chevron-right"></i></Link>
            </div>
            <div className="box-body p-3">
                <div className="gallery-box-main">
                    <div className="gallery-box">
                        <img className="img-fluid" src="img/p4.png" alt="" />
                        <img className="img-fluid" src="img/p5.png" alt="" />
                        <img className="img-fluid" src="img/p6.png" alt="" />
                    </div>
                    <div className="gallery-box">
                        <img className="img-fluid" src="img/p7.png" alt="" />
                        <img className="img-fluid" src="img/p8.png" alt="" />
                        <img className="img-fluid" src="img/p9.png" alt="" />
                    </div>
                    <div className="gallery-box">
                        <img className="img-fluid" src="img/p10.png" alt="" />
                        <img className="img-fluid" src="img/p11.png" alt="" />
                        <img className="img-fluid" src="img/p12.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotosBox;