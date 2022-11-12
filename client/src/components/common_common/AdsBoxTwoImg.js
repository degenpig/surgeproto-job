import React from 'react'

function AdsBoxTwoImg() {
    return (
        <div className="box shadow-sm mb-3 border rounded bg-white ads-box text-center">
            <div className="image-overlap-2 pt-4">
                <img src="img/l4.png" className="img-fluid rounded-circle shadow-sm" alt="" />
                <img src="img/user.png" className="img-fluid rounded-circle shadow-sm" alt="" />
            </div>
            <div className="p-3 border-bottom">
                <h6 className="text-dark">Gurdeep, grow your career by following <span className="font-weight-bold"> Wrapbootstrap</span></h6>
                <p className="mb-0 text-muted">Stay up-to industry trends!</p>
            </div>
            <div className="p-3">
                <button type="button" className="btn btn-outline-primary btn-sm pl-4 pr-4"> FOLLOW </button>
            </div>
        </div>
    );
}

export default AdsBoxTwoImg;