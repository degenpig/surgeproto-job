import React from 'react'

import JobItem from './JobItem';

function SimilarJobsBox() {
    return (
        <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
                <h6 className="m-0">Similar Jobs
                </h6>
            </div>
            <div className="box-body p-3">
                <JobItem job="Product Director" company="Spotify Inc." location=" India, Punjab" img="img/l3.png" border="border" />
                <JobItem job="Product Director" company="Spotify Inc." location=" India, Punjab" img="img/l3.png" border="border" />
            </div>
        </div>
    );
}

export default SimilarJobsBox;