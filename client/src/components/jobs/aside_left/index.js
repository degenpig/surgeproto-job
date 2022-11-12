import React from 'react'

import { Link } from 'react-router-dom';
import JobItem2 from '../../common_common/JobItem2';
import PostGigBox from '../../common_common/PostGigBox';
import PostJobBox from '../../common_common/PostJobBox';

function AsideLeft() {
    return (
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            <PostJobBox />
            {/* <PostGigBox /> */}
            {/* <JobItem2 img="img/l3.png" job="C# Developer" /> */}
            {/* <JobItem2 img="img/l2.png" job="Junior UX Designer" /> */}
        </aside>
    );
}

export default AsideLeft;