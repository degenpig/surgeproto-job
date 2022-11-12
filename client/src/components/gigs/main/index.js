import React, { useEffect, useState } from 'react'
import axios from 'axios';

import GigItem from '../../common_common/GigItem';
import { API_URL } from '../../../config/api';

function Main() {
    const [gigList, setGigList] = useState([]);

    useEffect(() => {
        getGiglist();
    }, []);
    const getGiglist = () => {
        axios.get(`${API_URL}/gig/getAllGigs`)
            .then(res => {
                console.log(res.data);
                setGigList(res.data)
            })
    }

    useEffect(() => {
        setTimeout(() => {
            getGiglist();
        }, 3000);
    });

    // const deleteData = (id) => {
    //     axios.get(`${API_URL}/gig/deleteJob/${id}`)
    //         .then(() => {
    //             getJoblist();
    //         })
    // }
    return (
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                <div className="box-title border-bottom p-3">
                    <h4 className="m-0">Gigs</h4>
                </div>
                {/* <form className="job-search p-3 border-bottom">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search gigs" aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">
                                <i className="feather-search"></i>
                            </button>
                        </div>
                    </div>
                </form> */}
                {/* <ul className="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Category</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Title</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Location</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="type-tab" data-toggle="tab" href="#type" role="tab" aria-controls="type" aria-selected="false">Type</a>
                    </li>
                </ul> */}
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        {/* <div className="p-3 job-tags">
                            <button type="button" className="btn btn-outline-secondary btn-sm mr-1">All</button>
                            <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Sales</button>
                            <button type="button" className="btn btn-outline-primary btn-sm mr-1">Design</button>
                            <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Products</button>
                            <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Developer</button>
                            <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Business Analyst</button>
                        </div> */}
                        <div className="p-3 border-top">
                            <div className="row">
                                {gigList &&
                                    gigList.map((item, i) => {
                                        return gigList[i].state == true ?
                                            <GigItem id={item._id} creator={item.creator} username={item.username} key={i} title={item.title} company={item.company} location={item.location} walletAddress={item.walletAddress} price={item.price} avatar={item.avatar} clientAvatar={item.clientAvatar} clientUsername={item.clientUsername} createdAt={item.createdAt} contact={item.contact} border="border" col="col-md-6" />
                                            : null
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="p-3 w-100">
                            <div className="row">
                                {gigList &&
                                    gigList.map((item, i) => {
                                        return (<div className="col-md-6">
                                            <JobItem2 key={i} job={item.title} img="img/l3.png" border="border" />
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="p-3 w-100">
                            <div className="row">
                                <div className="col-md-6">
                                    <Card url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501889.172354371!2d73.15671299623955!3d31.003573085499198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1575738201305!5m2!1sen!2sin" title="Postal Address" desc="PO Box 16122 Collins Street West Victoria 8007 Australia" />
                                </div>
                                <div className="col-md-6">
                                    <Card url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658166621!2d75.78663235513761!3d30.900473637624447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1575738867148!5m2!1sen!2sin" title="Envato HQ" desc="121 King Street, Melbourne Victoria 3000 Australia" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="type" role="tabpanel" aria-labelledby="type-tab">
                        <div className="p-3 w-100">
                            <div className="row">
                                <NetworkItem name="John Doe" job="Traveler" img="img/p2.png" border="border" col="col-md-6" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </main>
    );
}

export default Main;