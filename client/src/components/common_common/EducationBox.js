import React, { useEffect, useState } from 'react'

import Experience from './Experience';

function EducationBox(props) {
    const [experienceList, setExperienceList] = useState([]);
    const data = props.education;

    useEffect(() => {
        setExperienceList(data)
    }, []);
    console.log(experienceList);
    return (
        <div className="box shadow-sm border rounded bg-white mb-3">
            <h1></h1>
            <div className="box-title border-bottom p-3">
                <h6 className="m-0">Education</h6>
            </div>
            {experienceList &&
                experienceList.map((item, i) => {
                    return experienceList === null || experienceList === undefined ?
                        <Experience desc="There is no data..." border="border-bottom" />
                        :
                        <Experience title={item.school} subTitle={item.degree} period="Oct 2020 - Present (4 year 7 month) " img="img/l6.png" desc={item.description} border="border-bottom" />
                })
            }
        </div>
    );
}

export default EducationBox;