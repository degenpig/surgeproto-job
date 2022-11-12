import React from 'react'

import PostGigBox from '../../common_common/PostGigBox';
import ProfileBox from '../../common_common/ProfileBox';

function AsideLeft(props) {
    const gigProfile = props.gigProfile
    return (
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            <ProfileBox name={gigProfile.username} job={gigProfile.createdAt} avatar={gigProfile.avatar} btn="View profile" />
            <PostGigBox />
        </aside>
    );
}

export default AsideLeft;