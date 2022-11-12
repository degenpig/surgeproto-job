import React from 'react'

function OverviewAdsBox() {
    return (
        <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="p-5">
                <img src="img/clogo.png" className="img-fluid" alt="" />
            </div>
            <div className="p-3 border-top border-bottom">
                <h6 className="font-weight-bold text-dark mb-1 mt-0">Overview</h6>
                <p className="mb-0 text-muted">Google’s mission is to organize the world‘s information and make it universally accessible and useful.
                </p>
            </div>
            <div className="p-3">
                <div className="d-flex align-items-top mb-2">
                    <p className="mb-0 text-dark font-weight-bold">Common Connections</p>
                    <p className="font-weight-bold text-info mb-0 mt-0 ml-auto">358</p>
                </div>
                <div className="d-flex align-items-top">
                    <p className="mb-0 text-dark font-weight-bold">All Employees</p>
                    <p className="font-weight-bold text-info mb-0 mt-0 ml-auto">191,895</p>
                </div>
            </div>
        </div>
    );
}

export default OverviewAdsBox;