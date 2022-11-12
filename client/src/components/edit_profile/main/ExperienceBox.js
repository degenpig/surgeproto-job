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
                    return experienceList === null || experienceList === undefined ?
                        <Experience key={i} desc="There is no data..." border="border-bottom" />
                        :
                        <Experience key={i} publicId={'experience' + i} id={item._id} title={item.title} subTitle={item.company} from={item.from} to={item.to} img="img/l6.png" desc={item.description} border="border-bottom" />
                })
            }
        </div>
    );
}

export default ExperienceBox;