import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';

import { Link } from "react-router-dom";
import AuthService from '../../services/auth';
import { useNavigate } from "react-router-dom";
import UserContext from '../common/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API_URL } from '../../config/api';

function Nav() {
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    let navigate = useNavigate();
    const [id, setID] = useState('');
    if (profile == undefined || profile == null) {
        navigate("/login");
    }

    useEffect(() => {
        console.log('useeffect');
        if (profile._id == null || profile._id == undefined) {
            // navigate("/login");
            // console.log('Profile reloaded!');
            getProfile();
            // console.log("done");
        } else {
            setID(profile._id);
        }
    }, []);

    const getProfile = async () => {
        await axios.get(`${API_URL}/getProfile`)
            .then(res => {
                console.log(res.data);
                userContext.setProfile(res.data)
            })
        setID(profile._id);
    }

    // const [walletAddress, setWalletAddress] = useState('');

    const handleLogout = () => {
        AuthService.logout().then(navigate("/login"));
    };

    console.log('test');
    console.log(id);
    const connectWallet = async () => {
        try {
            const { solana } = window;
            if (solana == undefined) {
                warningMsgSucNotify();
            }
            if (solana) {
                if (solana.isPhantom) {
                    // console.log("phantom wallet found");
                    const response = await solana.connect({ onlyIfTrusted: false });
                    // setWalletAddress(response.publicKey);
                    const walletAddress = response.publicKey
                    sendMsgSucNotify();
                    // setWalletAddress(response.publicKey.toString());
                    axios.post(`${API_URL}/userProfile/updateUserProfile/${id}`, {
                        walletAddress: walletAddress
                    }).then(() => {
                        // sendMsgSucNotify();
                        console.log("Wallet Address was Updated!");
                    })
                        .catch(err => {
                            errorMsgSucNotify();
                            console.log(err);
                        })
                } else {
                    warningMsgSucNotify();
                    alert("Please install phantom wallet");
                }
            }
        } catch (error) {
            errorMsgSucNotify();
            console.log(error);
        }
    }
    const warningMsgSucNotify = () => toast.warning('Please install the Phantom Wallet on your browser!', {
        position: "top-right",
        theme: 'dark',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const sendMsgSucNotify = () => toast.success('Your wallet is successfully connected!', {
        position: "top-right",
        theme: 'dark',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const errorMsgSucNotify = () => toast.danger('Someting has error...', {
        position: "top-right",
        theme: 'dark',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const toProfile = (e) => {
        // alert(props.profile_id);
        e.preventDefault();
        navigate('/profile', { state: profile._id });
    }
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0">

            <div className="container">
                <Link className="navbar-brand mr-2" to="/"><img src="img/nav_logo.png" alt="" />
                </Link>
                {/* <form className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control shadow-none border-0" placeholder="Search people, jobs & more..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn" type="button">
                                <i className="feather-search"></i>
                            </button>
                        </div>
                    </div>
                </form> */}
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
                        <Link className="nav-link" to="/gigs"><i className="feather-heart mr-2"></i><span className="d-none d-lg-inline">Gigs</span></Link>
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
                            <Link className="dropdown-item" to="/gigs"><i className="feather-briefcase mr-1"></i> Gigs</Link>
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
                        <button type="button" onClick={connectWallet} className="btn btn-primary btn-sm rounded" >
                            <i className="feather-dollar-sign"></i> Connect Wallet
                        </button>
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
                            <Link className="dropdown-item" onClick={toProfile}><i className="feather-edit mr-1"></i> My Account</Link>
                            <Link className="dropdown-item" to="/edit_profile"><i className="feather-user mr-1"></i>{profile.profile_sign == false ? " Create Profile" : " Edit Profile"}</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" onClick={handleLogout}><i className="feather-log-out mr-1"></i> Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </nav>
    );
}

export default Nav;