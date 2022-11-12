import React from 'react'

function SkillsBox(props) {
    return (
        <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
                <h6 className="m-0">Skills & Endorsements</h6>
            </div>
            <div className="box-body">
                <div className="d-flex align-items-center osahan-post-header p-3 border-bottom people-list">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="img/l4.png" alt="" />
                    </div>
                    <div className="font-weight-bold">
                        <div className="text-truncate">Character Concept <span className="badge badge-dark ml-1">1</span></div>
                        <div className="small text-muted"><span className="text-primary">You and 1 connection</span> have given endorsements for this skill
                        </div>
                    </div>
                </div>
                {/* <div className="d-flex align-items-center osahan-post-header p-3 border-bottom people-list">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="img/l8.png" alt="" />
                    </div>
                    <div className="font-weight-bold">
                        <div className="text-truncate">Digital Painting <span className="badge badge-danger ml-1">6</span></div>
                        <div className="small text-muted"><span className="text-primary">Ask</span> has given an endorsement for this skill
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center osahan-post-header p-3 people-list">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="img/l5.png" alt="" />
                    </div>
                    <div className="font-weight-bold">
                        <div className="text-truncate">Adobe Photoshop <span className="badge badge-info ml-1">3</span></div>
                        <div className="small text-muted"><span className="text-primary">Julia Cox</span> has given an endorsement for this skill
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default SkillsBox;