import React from 'react';

import SharePostBox from './SharePostBox';
import PostBox from '../../common_common/PostBox';
import SliderBox from './SliderBox';
import PostDetailBox from '../../common_common/PostDetailBox';

import { Link } from 'react-router-dom'
import ImgSliderBox from './ImgSliderBox';

function Main() {
    return (
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                    <h4>Welcome to SURGE!</h4>
                </div>

                {/* <SharePostBox /> */}
                <ImgSliderBox />
                <SliderBox />
                {/* <div className="p-3 border-bottom osahan-post-body">
                    <p>Lorem ipsum dolor sit amet, consectetur 😍😎 adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <Link to="#">laboris consequat.</Link></p>
                    <img src="img/post2.png" className="img-fluid" alt="" />
                </div> */}
            </div>
            {/* <PostBox /> */}
            {/* <PostDetailBox /> */}


        </main>
    );
}

export default Main;