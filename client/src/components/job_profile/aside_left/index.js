import React from 'react'

import PostJobBox from '../../common_common/PostJobBox';
import ProfileBox from '../../common_common/ProfileBox';

function AsideLeft(props) {
    const jobProfile = props.jobProfile
    return (
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            <ProfileBox profile_id={jobProfile.creator} name={jobProfile.username} job={jobProfile.createdAt} avatar={jobProfile.avatar} btn="View profile" />
            <PostJobBox />
        </aside>
    );
}

export default AsideLeft;