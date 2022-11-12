import React from 'react'

import JobItem from '../../common_common/JobItem';
import PeopleBox from '../../common_common/PeopleBox';

function AsideRight() {
    return (
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            {/* <div className="pb-3">
                <h6 className="font-weight-bold text-dark mb-1">Because you viewed</h6>
                <p className="mb-0 text-muted">Designer at Google?</p>
            </div> */}
            {/* <JobItem job="Product Director" company="Spotify Inc." location=" India, Punjab" img="img/l3.png" border="" /> */}
            {/* <JobItem job=".NET Developer" company="Invision" location=" London, UK" img="img/l4.png" border="" /> */}

            {/* <PeopleBox title="People you might know" btnStyle="btn-outline-primary" btnIcon="feather-user-plus" /> */}
        </aside>
    );
}

export default AsideRight;