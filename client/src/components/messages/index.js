import React from 'react'

import Nav from '../layout/Nav';
import AsideRight from './aside_right';
import Main from './main';

function Messages() {
    return (
        <div>
            <Nav />
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <Main />
                        <AsideRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;
