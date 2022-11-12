import React from 'react'

import TextBox from '../../common_common/TextBox';
import AboutUSBox from './AboutUsBox';
import JobDetailsBox from './JobDetailsBox';

function Main(props) {
    const gigProfile = props.gigProfile
    return (
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <TextBox title="Job name" text1={gigProfile.title} text2='' />
            <TextBox title="Company" text1={gigProfile.company} text2={gigProfile.location} />
            <TextBox title="Price" text1={gigProfile.price + ' SOL'} text2='' />
            <TextBox title="Overview" text1={gigProfile.overview} text2='' />
            {/* <JobDetailsBox /> */}
            {/* <AboutUSBox /> */}
        </main>
    );
}

export default Main;