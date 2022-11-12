import React, { useEffect, useState } from 'react'
import axios from 'axios';
import JobItem from '../../common_common/JobItem';
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import { API_URL } from '../../../config/api';

function SliderBox() {
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        getJoblist();
    }, []);
    const getJoblist = () => {
        axios.get(`${API_URL}/job/getAllJobs`)
            .then(res => {
                console.log(res.data);
                setJobList(res.data)
            })
    }

    useEffect(() => {
        setTimeout(() => {
            getJoblist();
        }, 3000);
    });
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div className="mb-3 shadow-sm rounded box bg-white osahan-slider-main">
            <div className="osahan-slider">
                <div className="osahan-slider-item " style={{ paddingTop: '16px' }}>
                    <Slider {...settings}>
                        {jobList &&
                            jobList.map((item, i) => {
                                return jobList[i].state == true ?
                                    <JobItem id={item._id} creator={item.creator} username={item.username} key={i} title={item.title} company={item.company} location={item.location} walletAddress={item.walletAddress} price={item.price} avatar={item.avatar} clientAvatar={item.clientAvatar} clientUsername={item.clientUsername} createdAt={item.createdAt} contact={item.contact} border="border" col="col-md-12" />
                                    : null
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SliderBox;