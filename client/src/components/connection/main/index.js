import React from 'react'
import { useEffect, useState } from 'react';


import NetworkItem from '../../common_common/NetworkItem'

function Main(props) {

    const data = props.connections;
    // const [connectionList, setConnectionList] = useState(data);



    console.log('this person id');
    console.log(data);

    const connectionList = data;
    console.log('this connectionlist');
    console.log(connectionList);

    return (
        <main className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                <h5 className="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">More suggestions for you</h5>
                <ul className="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">People</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Groups</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="type-tab" data-toggle="tab" href="#type" role="tab" aria-controls="type" aria-selected="false">Hashtags</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="p-3">
                            <div className="row">
                                {connectionList &&
                                    connectionList.map((item, i) => {
                                        return (
                                            <NetworkItem key={i} userId={item.person_id} border="border" col="col-md-4" />)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="p-3 w-100">
                            <h6>Soon in next free update</h6>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="p-3 w-100">
                            <h6>Soon in next free update</h6>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="type" role="tabpanel" aria-labelledby="type-tab">
                        <div className="p-3 w-100">
                            <h6>Soon in next free update</h6>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;