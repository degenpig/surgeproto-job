import React, { useContext } from 'react'
import TextBox from '../../common_common/TextBox';
import EducationBox from '../../common_common/EducationBox';
import ExperienceBox from '../../common_common/ExperienceBox';

function Main(props) {

    const profile = props.userProfile;

    return (
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
            <TextBox title="About You" text1={profile == undefined ? '' : profile.about} />
            <ExperienceBox experience={profile == undefined ? '' : profile.experience} />
            <EducationBox education={profile == undefined ? '' : profile.education} />
        </main>
    );
}

export default Main;