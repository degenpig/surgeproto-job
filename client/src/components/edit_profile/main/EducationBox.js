import React, { useEffect, useState } from 'react'
import Education from './Education';

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
                        <Education key={i} desc="There is no data..." border="border-bottom" />
                        :
                        <Education key={i} publicId={'education' + i} id={item._id} title={item.school} subTitle={item.degree} from={item.from} to={item.to} period="Oct 2020 - Present (4 year 7 month) " img="img/l6.png" desc={item.description} border="border-bottom" />
                })
            }
        </div>
    );
}

export default EducationBox;