import React from 'react'

import { Link } from 'react-router-dom'

function OverviewBox() {
    return (
        <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
                <h6 className="m-0">Overview</h6>
            </div>
            <div className="box-body">
                <table className="table table-borderless mb-0">
                    <tbody>
                        <tr className="border-bottom">
                            <th className="p-3">Website</th>
                            <td className="p-3"><Link to="#">www.google.com</Link></td>
                        </tr>
                        <tr className="border-bottom">
                            <th className="p-3">Industry</th>
                            <td className="p-3">Internet</td>
                        </tr>
                        <tr className="border-bottom">
                            <th className="p-3">Company size</th>
                            <td className="p-3">10,001+ employees <i data-toggle="tooltip" data-placement="top" title="Google’s mission is to organize the world‘s information and make it universally accessible and useful.
              " className="feather-info text-info"></i> </td>
                        </tr>
                        <tr className="border-bottom">
                            <th className="p-3">Headquarters</th>
                            <td className="p-3">Mountain View, CA</td>
                        </tr>
                        <tr className="border-bottom">
                            <th className="p-3">Type</th>
                            <td className="p-3">Public Company</td>
                        </tr>
                        <tr className="border-bottom">
                            <th className="p-3">Founded</th>
                            <td className="p-3">1998</td>
                        </tr>
                        <tr>
                            <th className="p-3">Specialties</th>
                            <td className="p-3">search, ads, mobile, android, online video, apps, machine learning, virtual reality, cloud, hardware, artificial intelligence, youtube, and software</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OverviewBox;