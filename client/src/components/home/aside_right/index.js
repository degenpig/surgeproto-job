import React from 'react'

import PeopleBox from '../../common_common/PeopleBox';
import PhotosBox from '../../common_common/PhotosBox';
import AdsBox from '../../common_common/AdsBox';
import JobsBox from './JobsBox';
import PostJobBox from '../../common_common/PostJobBox';

function AsideRight() {
    return (
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            {/* <PeopleBox title="People you might know" btnStyle="btn-light" btnIcon="feather-user-plus" btn="" /> */}
            {/* <PhotosBox /> */}
            {/* <AdsBox img="img/ads1.png" title="Olink Premium" titleStyle="text-gold" desc="Grow & nurture your network" btn="ACTIVATE" btnStyle="btn-outline-gold" /> */}
            {/* <JobsBox /> */}

            <PostJobBox />
        </aside>
    );
}

export default AsideRight;