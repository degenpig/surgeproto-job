import React, { useContext } from 'react'
// import AdsBox from '../../common_common/AdsBox';

// import JobItem from '../../common_common/JobItem';
import PeopleBox from '../../common_common/PeopleBox';
import UserContext from '../../common/UserContext';
import PostGigBox from '../../common_common/PostGigBox';

function AsideRight() {
    return (
        <aside className="col col-xl-3 order-xl-3 col-lg-12 order-lg-3 col-12">
            <PostGigBox />
            {/* <PeopleBox title="Who viewed your profile" people={profile.views} btn="Connect" btnStyle="btn-light" /> */}

            {/* <JobItem job="Product Director" company="Spotify Inc." location=" India, Punjab" img="img/l3.png" border="border" /> */}
            {/* <JobItem job=".NET Developer" company="Invision" location=" London, UK" img="img/l4.png" border="border" /> */}
        </aside>
    );
}

export default AsideRight;