import React from 'react'

import Nav from '../layout/Nav';
import Main from './main';
import AsideLeft from './aside_left';
import AsideRight from './aside_right';

function Jobs() {
    return (
        <div>
            <Nav />
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <Main />
                        <AsideLeft />
                        <AsideRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jobs;