import React, { useEffect, useState } from 'react'
import axios from 'axios';
import JobItem from '../../common_common/JobItem';
import Slider from "react-slick";
import { Link } from 'react-router-dom'

function ImgSliderBox() {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="mb-3 shadow-sm rounded box bg-white osahan-slider-main">
            <div className="osahan-slider">
                <div className="osahan-slider-item " style={{ paddingTop: '16px' }}>
                    <Slider {...settings}>
                        <div className="img-slide box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/1.png" className="img-fluid slider-img" alt="" />
                        </div>
                        <div className="img-slide box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/2.png" className="img-fluid slider-img" alt="" />
                        </div>
                        <div className="img-slide box shadow-sm border rounded bg-white mb-3 p-2 m-2">
                            <img src="img/slide/3.png" className="img-fluid slider-img" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ImgSliderBox;