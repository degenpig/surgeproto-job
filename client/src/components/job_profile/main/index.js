import React from 'react'

import TextBox from '../../common_common/TextBox';
import AboutUSBox from './AboutUsBox';
import JobDetailsBox from './JobDetailsBox';

function Main(props) {
    const jobProfile = props.jobProfile
    return (
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <TextBox title="Job name" text1={jobProfile.title} text2='' />
            <TextBox title="Company" text1={jobProfile.company} text2={jobProfile.location} />
            <TextBox title="Price" text1={jobProfile.price + ' SOL'} text2='' />
            <TextBox title="Overview" text1={jobProfile.overview} text2='' />
            {/* <JobDetailsBox /> */}
            {/* <AboutUSBox /> */}
        </main>
    );
}

export default Main;