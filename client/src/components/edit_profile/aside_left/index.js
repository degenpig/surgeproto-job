import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
// import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import UserContext from '../../common/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../../config/api';


function AsideLeft(props) {
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    const formList = props.formList;

    const [about, setAbout] = useState(profile.about);
    const [bio, setBio] = useState(profile.bio);
    const [avatar, setAvatar] = useState([profile.avatar]);
    const [instagram, setInstagram] = useState('');
    const [facebook, setFaceBook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [youtube, setYoutube] = useState('');
    const [github, setGithub] = useState('');
    const [id, setID] = useState(profile._id);

    useEffect(() => {
        console.log('useeffect');
        if (!profile._id) {
            navigate("/home");
            console.log("done");
            return;
        } else {
            setInstagram(profile.social.instagram);
            setFaceBook(profile.social.facebook);
            setTwitter(profile.social.twitter);
            setYoutube(profile.social.youtube);
            setGithub(profile.social.github);
        }
    }, []);

    const sucNotify = () => toast.success('Successfully updated!', {
        position: "top-right",
        theme: 'dark',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    // useEffect(() => {

    // }, [avatar]);
    const updateSocial = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/userProfile/updateUserProfile/${id}`, {
            social: {
                instagram: instagram,
                twitter: twitter,
                facebook: facebook,
                github: github,
                youtube: youtube,
                profile_sign: true
            },
        }).then(() => {
            sucNotify();
        })
            .catch(err => {
                alert(err);
            })

    }
    const updateItem = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/userProfile/updateUserProfile/${id}`, {
            about: about,
            bio: bio,
            profile_sign: true
        }).then(() => {
            sucNotify();
        })
            .catch(err => {
                alert(err);
            })

    }
    const updateAvatar = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/userProfile/updateUserProfile/${id}`, {
            avatar: avatar
        }).then(() => {
            sucNotify();
        })
            .catch(err => {
                alert(err);
            })

    }
    return (
        <aside className="col-md-4">
            {/* <div className="mb-3 border rounded bg-white profile-box text-center w-10">
                <div className="p-4 d-flex align-items-center">
                    <img src={avatar} className="img-fluid rounded-circle" alt="" />
                    <div className="p-4">
                        <label data-toggle="tooltip" data-placement="top" data-original-title="Upload New Picture" className="btn btn-info m-0" htmlFor="fileAttachmentBtn">
                            <i className="feather-image"></i>
                            <input id="fileAttachmentBtn" name="file-attachment" type="file" className="d-none" onChange={(e) => setAvatar(e.target.files[0])} />
                        </label>
                        <button data-toggle="tooltip" data-placement="top" data-original-title="Delete" type="submit" className="btn btn-danger"><i className="feather-trash-2"></i></button>
                    </div>
                </div>
            </div> */}
            <div className="border rounded bg-white mb-3">
                {formList &&
                    formList.map((item, i) => {
                        return item.name == "about" && item.state == true ?
                            <div className="box-title border-bottom p-3">
                                <h6 className="m-0">About</h6>
                                <p className="mb-0 mt-0 small">Tell about yourself in two sentences.
                                </p>
                                <div className="position-relative mt-1">
                                    <textarea className="form-control" rows="4" name="text" value={about} placeholder="Enter About" onChange={(e) => setAbout(e.target.value)}></textarea>
                                </div>
                            </div> : null
                    })
                }
                <div className="box-body">
                    {formList &&
                        formList.map((item, i) => {
                            return item.name == "bio" && item.state == true ?

                                <div className="p-3 border-bottom">
                                    <div className="form-group mb-4">
                                        <label className="mb-1">BIO</label>
                                        <div className="position-relative">
                                            <textarea className="form-control" rows="4" name="text" value={bio} placeholder="Enter Bio" onChange={(e) => setBio(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                    {/* <div className="form-group mb-0">
                                        <label className="mb-1 w-100">SKILLS</label>
                                        <div className="custom-control custom-checkbox d-inline mr-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">JavaScript, jQuery</label>
                                        </div>
                                        <div className="custom-control custom-checkbox d-inline">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" htmlFor="customCheck2">HTML5, CSS3</label>
                                        </div>
                                    </div> */}
                                </div> : null
                        })
                    }
                    <div className="overflow-hidden text-center p-3">
                        <Link className="font-weight-bold btn btn-light rounded p-3 d-block" to="#" onClick={updateItem}> SAVE </Link>
                    </div>
                </div>
            </div>
            {formList &&
                formList.map((item, i) => {
                    return item.name == "social" && item.state == true ?

                        <div className="border rounded bg-white mb-3">
                            <div className="box-title border-bottom p-3">
                                <h6 className="m-0">Social profiles</h6>
                                <p className="mb-0 mt-0 small">Add elsewhere links to your profile.
                                </p>
                            </div>
                            <div className="box-body">
                                <div className="p-3 border-bottom">
                                    <div className="position-relative icon-form-control mb-2">
                                        <i className="feather-instagram position-absolute text-warning"></i>
                                        <input placeholder="Add Instagram link" value={instagram} type="text" className="form-control" onChange={(e) => setInstagram(e.target.value)} />
                                    </div>
                                    <div className="position-relative icon-form-control mb-2">
                                        <i className="feather-facebook position-absolute text-primary"></i>
                                        <input placeholder="Add Facebook link" value={facebook} type="text" className="form-control" onChange={(e) => setFaceBook(e.target.value)} />
                                    </div>
                                    <div className="position-relative icon-form-control mb-2">
                                        <i className="feather-twitter position-absolute text-info"></i>
                                        <input placeholder="Add Twitter link" value={twitter} type="text" className="form-control" onChange={(e) => setTwitter(e.target.value)} />
                                    </div>
                                    <div className="position-relative icon-form-control mb-2">
                                        <i className="feather-youtube position-absolute text-danger"></i>
                                        <input placeholder="Add Youtube link" value={youtube} type="text" className="form-control" onChange={(e) => setYoutube(e.target.value)} />
                                    </div>
                                    <div className="position-relative icon-form-control mb-0">
                                        <i className="feather-github position-absolute text-dark"></i>
                                        <input placeholder="Add Github link" value={github} type="text" className="form-control" onChange={(e) => setGithub(e.target.value)} />
                                    </div>
                                </div>
                                <div className="overflow-hidden text-center p-3">
                                    <Link className="font-weight-bold btn btn-light rounded p-3 d-block" to="#" onClick={updateSocial}> Update Social Profiles </Link>
                                </div>
                            </div>
                        </div> : null
                })
            }
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </aside>
    );
}

export default AsideLeft;