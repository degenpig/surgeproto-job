import React from 'react'

import AdsBox from '../../common_common/AdsBox';
import PeopleBox from '../../common_common/PeopleBox';
import ProfileBox from '../../common_common/ProfileBox';
import SimilarJobsBox from '../../common_common/SimilarJobsBox';

function AsideRight(props) {

    const jobProfile = props.jobProfile;
    return (
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            {jobProfile.contact == 'approved' || jobProfile.contact == 'pending' ?
                <ProfileBox name={jobProfile.clientUsername} job="Client" avatar={jobProfile.clientAvatar} btn="View profile" /> : null}
            {/* <button type="button" className="btn btn-lg btn-block btn-danger mb-3"> <i className="feather-bell"></i> Set alert for jobs </button> */}
            {/* <SimilarJobsBox /> */}
            {/* <PeopleBox title="Who viewed your profile" btnStyle="btn-outline-primary" btn="Connent" btnIcon="" /> */}
            {/* <AdsBox img="img/ads1.png" title="Olink Premium" titleStyle="text-gold" desc="Grow &amp; nurture your network" btn=" ACTIVATE " btnStyle="btn-outline-gold" /> */}
        </aside>
    );
}

export default AsideRight;