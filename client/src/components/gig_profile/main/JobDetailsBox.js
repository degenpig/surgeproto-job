import React from 'react'

function JobDetailsBox() {
    return (
        <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
                <h6 className="m-0">Job Details</h6>
            </div>
            <div className="box-body">
                <table className="table table-borderless mb-0">
                    <tbody>
                        <tr className="border-bottom">
                            <th className="p-3">Seniority Level</th>
                            <td className="p-3">Mid-Senior level
                            </td>
                        </tr>
                        <tr className="border-bottom">
                            <th className="p-3">Industry</th>
                            <td className="p-3">Internet Information Technology & Services</td>
                        </tr>
                        <tr className="border-bottom">
                            <th className="p-3">Employment Type</th>
                            <td className="p-3">Full-time
                            </td>
                        </tr>
                        <tr className="border-bottom">
                            <th className="p-3">Job Functions</th>
                            <td className="p-3">Other</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default JobDetailsBox;