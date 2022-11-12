import React, { useContext } from 'react'

import ProfileBox from '../../common_common/ProfileBox';
// import SkillsBox from './SkillsBox';
import PostJobBox from '../../common_common/PostJobBox';

function AsideLeft(props) {
    const profile = props.userProfile;
    return (
        <aside className="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
            <ProfileBox name={profile == undefined ? '' : profile.name} job={profile == undefined ? '' : profile.job} avatar={profile == undefined ? '' : profile.avatar} username={profile == undefined ? '' : profile.username} btn="Log out" />
            {/* <SkillsBox skills={profile.skills} /> */}
            <PostJobBox />
        </aside>
    );
}

export default AsideLeft;