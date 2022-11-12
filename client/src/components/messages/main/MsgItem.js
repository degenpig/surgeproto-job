import React from 'react'

function MsgItem(props) {
    return (
        <div>
            {props.direction == 'go' ?
                <div>
                    <div className="text-center my-3">
                        <span className="px-3 py-2 small bg-white shadow-sm rounded">{props.createdAt.substr(0, 10)}</span>
                    </div>
                    <div className="d-flex align-items-center osahan-post-header">
                        <span className="mr-auto mb-auto">
                            <div className="text-right text-muted pt-1 small">{props.createdAt.substr(11, 5)}</div>
                        </span>
                        <div className="mr-1">
                            <div className="text-truncate h6 mb-3">{props.myName}
                            </div>
                            <p>{props.msg}
                            </p>
                        </div>
                        <div className="dropdown-list-image mr-3 mb-auto"><img className="rounded-circle" src={props.myAvatar} alt="" /></div>
                    </div>
                </div> :
                <div>
                    <div className="text-center my-3">
                        <span className="px-3 py-2 small bg-white shadow-sm rounded">{props.createdAt.substr(0, 10)}</span>
                    </div>
                    <div className="d-flex align-items-center osahan-post-header">
                        <div className="dropdown-list-image mr-3 mb-auto"><img className="rounded-circle" src={props.hisAvatar} alt="" /></div>
                        <div className="mr-1">
                            <div className="text-truncate h6 mb-3">{props.hisName}
                            </div>
                            <p>{props.msg}
                            </p>
                        </div>
                        <span className="ml-auto mb-auto">
                            <div className="text-right text-muted pt-1 small">{props.createdAt.substr(11, 5)}</div>
                        </span>
                    </div>
                </div>
            }
        </div>
    );
}

export default MsgItem;