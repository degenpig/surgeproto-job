import React, { useEffect, useState } from 'react'

import Experience from './Experience';

function ExperienceBox(props) {
    const [experienceList, setExperienceList] = useState([]);
    const data = props.experience;

    useEffect(() => {
        setExperienceList(data)
    }, []);

    return (
        <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
                <h6 className="m-0">Experience</h6>
            </div>
            {experienceList &&
                experienceList.map((item, i) => {
                    return (
                        <Experience title={item.title} subTitle={item.company} period="Oct 2020 - Present (4 year 7 month) " img="img/l6.png" desc={item.description} border="border-bottom" />
                    )
                })
            }
        </div>
    );
}

export default ExperienceBox;