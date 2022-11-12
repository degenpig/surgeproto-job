import React, { useContext } from 'react'
import axios from 'axios';

import { Link } from "react-router-dom";
import AuthService from '../../services/auth';
import { useNavigate } from "react-router-dom";
import UserContext from '../common/UserContext';
import { API_URL } from '../../config/api';

function NavNonSerch() {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    let navigate = useNavigate();
    const handleLogout = () => {
        AuthService.logout().then(navigate("/login"))
            ;
    };

    const id = profile._id;
    const connectWallet = async () => {
        // alert("adsfdas");
        try {
            const { solana } = window;
            if (solana) {
                if (solana.isPhantom) {
                    // console.log("phantom wallet found");
                    const response = await solana.connect({ onlyIfTrusted: false });
                    // setWalletAddress(response.publicKey);
                    const walletAddress = response.publicKey
                    alert(walletAddress);
                    // setWalletAddress(response.publicKey.toString());
                    axios.post(`${API_URL}/userProfile/updateUserProfile/${id}`, {
                        walletAddress: walletAddress
                    }).then(() => {
                        console.log("Wallet Address was Updated!");
                    })
                        .catch(err => {
                            console.log(err);
                        })
                } else {
                    alert("Please install phantom wallet");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <nav className="navbar navbar-expand navbar-light bg-white osahan-nav-top p-0">
            <div className="container">
                <Link className="navbar-brand mr-2" to="/"><img src="img/logo.png" alt="" />
                </Link>
                <ul className="navbar-nav ml-auto d-flex align-items-center">
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <Link className="nav-link dropdown-toggle" to="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="feather-search mr-2"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in" aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control border-0 shadow-none" placeholder="Search people, jobs and more..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn" type="button">
                                            <i className="feather-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    {
                        profile.role == "admin" ? (
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin"><i className="feather-user mr-2"></i><span className="d-none d-lg-inline">Admin Page</span></Link>
                            </li>
                        ) : null
                    }
                    <li className="nav-item">
                        <Link className="nav-link" to="/jobs"><i className="feather-briefcase mr-2"></i><span className="d-none d-lg-inline">Jobs</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/connection"><i className="feather-users mr-2"></i><span className="d-none d-lg-inline">Connection</span></Link>
                    </li>
                    <li className="nav-item dropdown mr-2">
                        <Link className="nav-link dropdown-toggle pr-0" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="feather-file-text mr-2"></i><span className="d-none d-lg-inline">Pages</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right shadow-sm">
                            <Link className="dropdown-item" to="/jobs"><i className="feather-briefcase mr-1"></i> Jobs</Link>
                            <Link className="dropdown-item" to="/profile"><i className="feather-user mr-1"></i> Profile</Link>
                            <Link className="dropdown-item" to="/connection"><i className="feather-users mr-1"></i> Connection</Link>
                            <Link className="dropdown-item" to="/messages"><i className="feather-message-circle mr-1"></i> Messages</Link>
                            {/* <Link className="dropdown-item" to="/company_profile"><i className="feather-user-plus mr-1"></i> Company Profile</Link>
                            <Link className="dropdown-item" to="/job_profile"><i className="feather-globe mr-1"></i> Job Profile</Link>
                            <Link className="dropdown-item" to="/notifications"><i className="feather-bell mr-1"></i> Notifications</Link>
                            <Link className="dropdown-item" to="/not_found"><i className="feather-alert-triangle mr-1"></i> 404 Not Found</Link>
                            <Link className="dropdown-item" to="/faq"><i className="feather-help-circle mr-1"></i> FAQ</Link>
                            <Link className="dropdown-item" to="/terms"><i className="feather-book mr-1"></i> Terms</Link>
                            <Link className="dropdown-item" to="/privacy"><i className="feather-list mr-1"></i> Privacy</Link><Link className="dropdown-item" to="/blog"><i className="feather-book mr-1"></i> Blog</Link>
                            <Link className="dropdown-item" to="/blog_single"><i className="feather-book-open mr-1"></i> Blog Single</Link>
                            <Link className="dropdown-item" to="/contact"><i className="feather-mail mr-1"></i> Contact</Link>
                            <Link className="dropdown-item" to="/pricing"><i className="feather-credit-card mr-1"></i> Pricing</Link>
                            <Link className="dropdown-item" to="/maintence"><i className="feather-clock mr-1"></i> Maintence</Link>
                            <Link className="dropdown-item" to="/coming_soon"><i className="feather-cloud mr-1"></i> Coming Soon</Link>
                            <Link className="dropdown-item" to="/components"><i className="feather-list mr-1"></i> Components</Link>
                            <Link className="dropdown-item" to="/login"><i className="feather-log-in mr-1"></i> Sign In</Link>
                            <Link className="dropdown-item" to="/register"><i className="feather-lock mr-1"></i> Sign Up</Link> */}
                        </div>
                    </li>
                    <li className="nav-item">
                        <button type="submit" onClick={connectWallet} className="btn btn-primary btn-sm rounded" >
                            <i className="feather-dollar-sign"></i> Connect Wallet
                        </button>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="feather-message-square"></i>
                            <span className="badge badge-danger badge-counter">8</span>
                        </Link>
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                            <h6 className="dropdown-header">
                                Message Center
                            </h6>
                            <Link className="dropdown-item d-flex align-items-center" to="/messages">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/p1.png" alt="" />
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div className="font-weight-bold overflow-hidden">
                                    <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </Link>
                            <Link className="dropdown-item d-flex align-items-center" to="/messages">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/p2.png" alt="" />
                                    <div className="status-indicator"></div>
                                </div>
                                <div className="overflow-hidden">
                                    <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                                    <div className="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </Link>
                            <Link className="dropdown-item d-flex align-items-center" to="/messages">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/p3.png" alt="" />
                                    <div className="status-indicator bg-warning"></div>
                                </div>
                                <div className="overflow-hidden">
                                    <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </Link>
                            <Link className="dropdown-item d-flex align-items-center" to="/messages">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/p4.png" alt="" />
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div className="overflow-hidden">
                                    <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                                    <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </Link>
                            <Link className="dropdown-item text-center small text-gray-500" to="messages.html">Read More Messages</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="feather-bell"></i>
                            <span className="badge badge-info badge-counter">6</span>
                        </Link>
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                            <h6 className="dropdown-header">
                                Alerts Center
                            </h6>
                            <Link className="dropdown-item d-flex align-items-center" to="/notifications">
                                <div className="mr-3">
                                    <div className="icon-circle bg-primary">
                                        <i className="feather-download-cloud text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 12, 2019</div>
                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </Link>
                            <Link className="dropdown-item d-flex align-items-center" to="/notifications">
                                <div className="mr-3">
                                    <div className="icon-circle bg-success">
                                        <i className="feather-edit text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </Link>
                            <Link className="dropdown-item d-flex align-items-center" to="/notifications">
                                <div className="mr-3">
                                    <div className="icon-circle bg-warning">
                                        <i className="feather-folder text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </Link>
                            <Link className="dropdown-item text-center small text-gray-500" to="/notifications">Show All Alerts</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow ml-1 osahan-profile-dropdown">
                        <Link className="nav-link dropdown-toggle pr-0" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="img-profile rounded-circle" src={profile.avatar} alt="" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right shadow-sm">
                            <div className="p-3 d-flex align-items-center">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src={profile.avatar} alt="" />
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div className="font-weight-bold">
                                    <div className="text-truncate">{profile.name}</div>
                                    <div className="small text-gray-500">{profile.username}</div>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/profile"><i className="feather-edit mr-1"></i> My Account</Link>
                            <Link className="dropdown-item" to="/edit_profile"><i className="feather-user mr-1"></i> Edit Profile</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" onClick={handleLogout}><i className="feather-log-out mr-1"></i> Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavNonSerch;