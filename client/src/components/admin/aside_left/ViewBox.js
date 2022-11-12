import React from 'react'

function ViewBox() {
    return (
        <div className="box mb-3 shadow-sm rounded bg-white view-box overflow-hidden">
            <div className="box-title border-bottom p-3">
                <h6 className="m-0">Profile Views</h6>
            </div>
            <div className="d-flex text-center">
                <div className="col-6 border-right py-4 px-2">
                    <h5 className="font-weight-bold text-info mb-1">08 <i className="feather-bar-chart-2"></i></h5>
                    <p className="mb-0 text-black-50 small">last 5 days</p>
                </div>
                <div className="col-6 py-4 px-2">
                    <h5 className="font-weight-bold text-success mb-1">+ 43% <i className="feather-bar-chart"></i></h5>
                    <p className="mb-0 text-black-50 small">Since last week</p>
                </div>
            </div>
            <div className="overflow-hidden border-top text-center">
                <img src="img/chart.png" className="img-fluid" alt="" />
            </div>
        </div>
    );
}

export default ViewBox;