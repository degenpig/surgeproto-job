import React, { useContext } from 'react'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import Experience from './ExperiencePanel';
import Education from './EducationPanel';
import UserContext from '../../common/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../../config/api';

function Main(props) {

    const userContext = useContext(UserContext);
    const profile = userContext.profile;
    let navigate = useNavigate();
    const formList = props.formList;

    console.log("formList");
    console.log(formList);

    const [id, setID] = useState(profile._id);
    const [name, setName] = useState(profile.name);
    const [username, setUsername] = useState(profile.username);
    const [email, setEmail] = useState(profile.email);
    const [location, setLocation] = useState(profile.location);

    console.log(id);
    // console.log(profile);
    console.log('before useEffect');
    useEffect(() => {
        console.log('useEffect');
        console.log(id);
        if (id == null || id == undefined) {
            navigate("/home");
            console.log("done");
        }
    });

    useEffect(() => {
        setInterval(() => {
            getProfile();
        }, 3000);
    }, []);

    const getProfile = async () => {
        await axios.get(`${API_URL}/getProfile`)
            .then(res => {
                console.log(res.data);
                userContext.setProfile(res.data)
            })
    }

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

    const updateItem = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/userProfile/updateUserProfile/${id}`, {
            name: name,
            username: username,
            email: email,
            location: location,
            profile_sign: true
        }).then(() => {
            sucNotify();
        })
            .catch(err => {
                console.log(err);
                alert(err);
            })

    }
    return (
        <main className="col-md-8">
            <div className="border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                    <h6 className="m-0">Edit Basic Info</h6>
                    <p className="mb-0 mt-0 small">Lorem ipsum dolor sit amet, consecteturs.
                    </p>
                </div>
                <div className="box-body p-3">
                    <form className="js-validate" noValidate="noValidate">
                        <div className="row">
                            {formList &&
                                formList.map((item, i) => {
                                    return item.name == "name" && item.state == true ?
                                        <div className="col-sm-6 mb-2">
                                            <div className="js-form-message">
                                                <label id="nameLabel" className="form-label">
                                                    Name
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" aria-label="Enter your name" required="" aria-describedby="nameLabel" data-msg="Please enter your name." data-error-class="u-has-error" data-success-class="u-has-success" />
                                                    <small className="form-text text-muted">Displayed on your public profile, notifications and other places.</small>
                                                </div>
                                            </div>
                                        </div> : null
                                })
                            }
                            {formList &&
                                formList.map((item, i) => {
                                    return item.name == "username" && item.state == true ?
                                        <div className="col-sm-6 mb-2">
                                            <div className="js-form-message">
                                                <label id="usernameLabel" className="form-label">
                                                    Username
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" aria-label="Enter your username" required="" aria-describedby="usernameLabel" data-msg="Please enter your username." data-error-class="u-has-error" data-success-class="u-has-success" />
                                                </div>
                                            </div>
                                        </div> : null
                                })
                            }
                        </div>
                        {/* <label className="form-label">
                            Birth date
                            <span className="text-danger">*</span>
                        </label>
                        <div className="row">
                            <div className="col-md-6 mb-3 mb-sm-6">
                                <div className="js-form-message">
                                    <div className="form-group">
                                        <select className="form-control custom-select" required="" data-msg="Please select month." data-error-class="u-has-error" data-success-class="u-has-success">
                                            <option defaultValue="">Select month</option>
                                            <option defaultValue="birthMonthSelect1">January</option>
                                            <option defaultValue="birthMonthSelect2">February</option>
                                            <option defaultValue="birthMonthSelect3">March</option>
                                            <option defaultValue="birthMonthSelect4" selected="selected">April</option>
                                            <option defaultValue="birthMonthSelect5">May</option>
                                            <option defaultValue="birthMonthSelect6">June</option>
                                            <option defaultValue="birthMonthSelect7">July</option>
                                            <option defaultValue="birthMonthSelect8">August</option>
                                            <option defaultValue="birthMonthSelect9">September</option>
                                            <option defaultValue="birthMonthSelect10">October</option>
                                            <option defaultValue="birthMonthSelect11">November</option>
                                            <option defaultValue="birthMonthSelect12">December</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 mb-3 mb-sm-6">
                                <div className="js-form-message">
                                    <div className="form-group">
                                        <select className="form-control custom-select" required="" data-msg="Please select date." data-error-class="u-has-error" data-success-class="u-has-success">
                                            <option defaultValue="">Select date</option>
                                            <option defaultValue="birthDateSelect1">1</option>
                                            <option defaultValue="birthDateSelect2">2</option>
                                            <option defaultValue="birthDateSelect3">3</option>
                                            <option defaultValue="birthDateSelect4">4</option>
                                            <option defaultValue="birthDateSelect5">5</option>
                                            <option defaultValue="birthDateSelect6">6</option>
                                            <option defaultValue="birthDateSelect7">7</option>
                                            <option defaultValue="birthDateSelect8">8</option>
                                            <option defaultValue="birthDateSelect9">9</option>
                                            <option defaultValue="birthDateSelect10">10</option>
                                            <option defaultValue="birthDateSelect11">11</option>
                                            <option defaultValue="birthDateSelect12" selected="selected">12</option>
                                            <option defaultValue="birthDateSelect13">13</option>
                                            <option defaultValue="birthDateSelect14">14</option>
                                            <option defaultValue="birthDateSelect15">15</option>
                                            <option defaultValue="birthDateSelect16">16</option>
                                            <option defaultValue="birthDateSelect17">17</option>
                                            <option defaultValue="birthDateSelect18">18</option>
                                            <option defaultValue="birthDateSelect19">19</option>
                                            <option defaultValue="birthDateSelect20">20</option>
                                            <option defaultValue="birthDateSelect21">21</option>
                                            <option defaultValue="birthDateSelect22">22</option>
                                            <option defaultValue="birthDateSelect23">23</option>
                                            <option defaultValue="birthDateSelect24">24</option>
                                            <option defaultValue="birthDateSelect25">25</option>
                                            <option defaultValue="birthDateSelect26">26</option>
                                            <option defaultValue="birthDateSelect27">27</option>
                                            <option defaultValue="birthDateSelect28">28</option>
                                            <option defaultValue="birthDateSelect29">29</option>
                                            <option defaultValue="birthDateSelect30">30</option>
                                            <option defaultValue="birthDateSelect31">31</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 mb-3 mb-sm-6">
                                <div className="js-form-message">
                                    <div className="form-group">
                                        <select className="form-control custom-select" required="" data-msg="Please select year." data-error-class="u-has-error" data-success-class="u-has-success">
                                            <option defaultValue="">Select year</option>
                                            <option defaultValue="birthYearSelect1900">1900</option>
                                            <option defaultValue="birthYearSelect1901">1901</option>
                                            <option defaultValue="birthYearSelect1902">1902</option>
                                            <option defaultValue="birthYearSelect1903">1903</option>
                                            <option defaultValue="birthYearSelect1904">1904</option>
                                            <option defaultValue="birthYearSelect1905">1905</option>
                                            <option defaultValue="birthYearSelect1906">1906</option>
                                            <option defaultValue="birthYearSelect1907">1907</option>
                                            <option defaultValue="birthYearSelect1908">1908</option>
                                            <option defaultValue="birthYearSelect1909">1909</option>
                                            <option defaultValue="birthYearSelect1910">1910</option>
                                            <option defaultValue="birthYearSelect1911">1911</option>
                                            <option defaultValue="birthYearSelect1912">1912</option>
                                            <option defaultValue="birthYearSelect1913">1913</option>
                                            <option defaultValue="birthYearSelect1914">1914</option>
                                            <option defaultValue="birthYearSelect1915">1915</option>
                                            <option defaultValue="birthYearSelect1916">1916</option>
                                            <option defaultValue="birthYearSelect1917">1917</option>
                                            <option defaultValue="birthYearSelect1918">1918</option>
                                            <option defaultValue="birthYearSelect1919">1919</option>
                                            <option defaultValue="birthYearSelect1920">1920</option>
                                            <option defaultValue="birthYearSelect1921">1921</option>
                                            <option defaultValue="birthYearSelect1922">1922</option>
                                            <option defaultValue="birthYearSelect1923">1923</option>
                                            <option defaultValue="birthYearSelect1924">1924</option>
                                            <option defaultValue="birthYearSelect1925">1925</option>
                                            <option defaultValue="birthYearSelect1926">1926</option>
                                            <option defaultValue="birthYearSelect1927">1927</option>
                                            <option defaultValue="birthYearSelect1928">1928</option>
                                            <option defaultValue="birthYearSelect1929">1929</option>
                                            <option defaultValue="birthYearSelect1930">1930</option>
                                            <option defaultValue="birthYearSelect1931">1931</option>
                                            <option defaultValue="birthYearSelect1932">1932</option>
                                            <option defaultValue="birthYearSelect1933">1933</option>
                                            <option defaultValue="birthYearSelect1934">1934</option>
                                            <option defaultValue="birthYearSelect1935">1935</option>
                                            <option defaultValue="birthYearSelect1936">1936</option>
                                            <option defaultValue="birthYearSelect1937">1937</option>
                                            <option defaultValue="birthYearSelect1938">1938</option>
                                            <option defaultValue="birthYearSelect1939">1939</option>
                                            <option defaultValue="birthYearSelect1940">1940</option>
                                            <option defaultValue="birthYearSelect1941">1941</option>
                                            <option defaultValue="birthYearSelect1942">1942</option>
                                            <option defaultValue="birthYearSelect1943">1943</option>
                                            <option defaultValue="birthYearSelect1944">1944</option>
                                            <option defaultValue="birthYearSelect1945">1945</option>
                                            <option defaultValue="birthYearSelect1946">1946</option>
                                            <option defaultValue="birthYearSelect1947">1947</option>
                                            <option defaultValue="birthYearSelect1948">1948</option>
                                            <option defaultValue="birthYearSelect1949">1949</option>
                                            <option defaultValue="birthYearSelect1950">1950</option>
                                            <option defaultValue="birthYearSelect1951">1951</option>
                                            <option defaultValue="birthYearSelect1952">1952</option>
                                            <option defaultValue="birthYearSelect1953">1953</option>
                                            <option defaultValue="birthYearSelect1954">1954</option>
                                            <option defaultValue="birthYearSelect1955">1955</option>
                                            <option defaultValue="birthYearSelect1956">1956</option>
                                            <option defaultValue="birthYearSelect1957">1957</option>
                                            <option defaultValue="birthYearSelect1958">1958</option>
                                            <option defaultValue="birthYearSelect1959">1959</option>
                                            <option defaultValue="birthYearSelect1960">1960</option>
                                            <option defaultValue="birthYearSelect1961">1961</option>
                                            <option defaultValue="birthYearSelect1962">1962</option>
                                            <option defaultValue="birthYearSelect1963">1963</option>
                                            <option defaultValue="birthYearSelect1964">1964</option>
                                            <option defaultValue="birthYearSelect1965">1965</option>
                                            <option defaultValue="birthYearSelect1966">1966</option>
                                            <option defaultValue="birthYearSelect1967">1967</option>
                                            <option defaultValue="birthYearSelect1968">1968</option>
                                            <option defaultValue="birthYearSelect1969">1969</option>
                                            <option defaultValue="birthYearSelect1970">1970</option>
                                            <option defaultValue="birthYearSelect1971">1971</option>
                                            <option defaultValue="birthYearSelect1972">1972</option>
                                            <option defaultValue="birthYearSelect1973">1973</option>
                                            <option defaultValue="birthYearSelect1974">1974</option>
                                            <option defaultValue="birthYearSelect1975">1975</option>
                                            <option defaultValue="birthYearSelect1976">1976</option>
                                            <option defaultValue="birthYearSelect1977">1977</option>
                                            <option defaultValue="birthYearSelect1978">1978</option>
                                            <option defaultValue="birthYearSelect1979">1979</option>
                                            <option defaultValue="birthYearSelect1980">1980</option>
                                            <option defaultValue="birthYearSelect1981">1981</option>
                                            <option defaultValue="birthYearSelect1982">1982</option>
                                            <option defaultValue="birthYearSelect1983">1983</option>
                                            <option defaultValue="birthYearSelect1984">1984</option>
                                            <option defaultValue="birthYearSelect1985">1985</option>
                                            <option defaultValue="birthYearSelect1986" selected="selected">1986</option>
                                            <option defaultValue="birthYearSelect1987">1987</option>
                                            <option defaultValue="birthYearSelect1988">1988</option>
                                            <option defaultValue="birthYearSelect1989">1989</option>
                                            <option defaultValue="birthYearSelect1990">1990</option>
                                            <option defaultValue="birthYearSelect1991">1991</option>
                                            <option defaultValue="birthYearSelect1992">1992</option>
                                            <option defaultValue="birthYearSelect1993">1993</option>
                                            <option defaultValue="birthYearSelect1994">1994</option>
                                            <option defaultValue="birthYearSelect1995">1995</option>
                                            <option defaultValue="birthYearSelect1996">1996</option>
                                            <option defaultValue="birthYearSelect1997">1997</option>
                                            <option defaultValue="birthYearSelect1998">1998</option>
                                            <option defaultValue="birthYearSelect1999">1999</option>
                                            <option defaultValue="birthYearSelect2000">2000</option>
                                            <option defaultValue="birthYearSelect2001">2001</option>
                                            <option defaultValue="birthYearSelect2002">2002</option>
                                            <option defaultValue="birthYearSelect2003">2003</option>
                                            <option defaultValue="birthYearSelect2004">2004</option>
                                            <option defaultValue="birthYearSelect2005">2005</option>
                                            <option defaultValue="birthYearSelect2006">2006</option>
                                            <option defaultValue="birthYearSelect2007">2007</option>
                                            <option defaultValue="birthYearSelect2008">2008</option>
                                            <option defaultValue="birthYearSelect2009">2009</option>
                                            <option defaultValue="birthYearSelect2010">2010</option>
                                            <option defaultValue="birthYearSelect2011">2011</option>
                                            <option defaultValue="birthYearSelect2012">2012</option>
                                            <option defaultValue="birthYearSelect2013">2013</option>
                                            <option defaultValue="birthYearSelect2014">2014</option>
                                            <option defaultValue="birthYearSelect2015">2015</option>
                                            <option defaultValue="birthYearSelect2016">2016</option>
                                            <option defaultValue="birthYearSelect2017">2017</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 mb-2">
                                <div className="js-form-message">
                                    <div className="form-group">
                                        <select className="form-control custom-select" required="" data-msg="Please select your gender." data-error-class="u-has-error" data-success-class="u-has-success">
                                            <option defaultValue="genderSelect1" selected="">Male</option>
                                            <option defaultValue="genderSelect2">Female</option>
                                            <option defaultValue="genderSelect3">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="row">
                            {formList &&
                                formList.map((item, i) => {
                                    return item.name == "email" && item.state == true ?
                                        <div className="col-sm-6 mb-2">
                                            <div className="js-form-message">
                                                <label id="emailLabel" className="form-label">
                                                    Email address
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" aria-label="Enter your email address" required aria-describedby="emailLabel" data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                                                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                                </div>
                                            </div>
                                        </div> : null
                                })
                            }
                            {formList &&
                                formList.map((item, i) => {
                                    return item.name == "location" && item.state == true ?
                                        <div className="col-sm-6 mb-2">
                                            <div className="js-form-message">
                                                <label id="locationLabel" className="form-label">
                                                    Location
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter your location" aria-label="Enter your location" required="" aria-describedby="locationLabel" data-msg="Please enter your location." data-error-class="u-has-error" data-success-class="u-has-success" />
                                                </div>
                                            </div>
                                        </div> : null
                                })
                            }
                        </div>
                        {/* <div className="row">
                            <div className="col-sm-6 mb-2">
                                <div className="js-form-message">
                                    <label id="organizationLabel" className="form-label">
                                        Organization
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="organization" defaultValue="Wrapbootstrap Ltd." placeholder="Enter your organization name" aria-label="Enter your organization name" required="" aria-describedby="organizationLabel" data-msg="Please enter your organization name" data-error-class="u-has-error" data-success-class="u-has-success" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-2">
                                <div className="js-form-message">
                                    <label id="websiteLabel" className="form-label">
                                        Website
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-group">
                                        <input className="form-control" type="url" name="website" defaultValue="https://wrapbootstrap.com/" placeholder="Enter your website" aria-label="Enter your website" required="" aria-describedby="websiteLabel" data-msg="Password enter a valid website" data-error-class="u-has-error" data-success-class="u-has-success" />
                                        <small className="form-text text-muted">Your home page, blog or company site, e.g. http://example.com</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 mb-2">
                                <div className="js-form-message">
                                    <label id="phoneNumberLabel" className="form-label">
                                        Phone number
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-group">
                                        <input className="form-control" type="tel" name="phoneNumber" defaultValue="+91 85680 79956" placeholder="Enter your phone number" aria-label="Enter your phone number" required="" aria-describedby="phoneNumberLabel" data-msg="Please enter a valid phone number" data-error-class="u-has-error" data-success-class="u-has-success" />
                                    </div>
                                </div>
                                <a className="d-inline-block u-text-muted" href="#">
                                    <span className="mr-1">+</span>
                                    Add phone number
                                </a>
                            </div>
                            <div className="col-sm-6 mb-2">
                                <div className="js-form-message">
                                    <label className="form-label">
                                        Preferred language
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-group">
                                        <select className="custom-select">
                                            <option defaultValue="">Select language</option>
                                            <option defaultValue="languageSelect1" selected="">English</option>
                                            <option defaultValue="languageSelect2">Français</option>
                                            <option defaultValue="languageSelect3">Deutsch</option>
                                            <option defaultValue="languageSelect4">Português</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <Link type="submit" className="font-weight-bold btn btn-light rounded p-3 d-block" to="#" onClick={updateItem}> SAVE </Link>
                    </form>
                </div>
            </div>

            {formList &&
                formList.map((item, i) => {
                    return item.name == "experience" && item.state == true ?
                        <Experience experience={profile.experience} /> : null
                })
            }
            {formList &&
                formList.map((item, i) => {
                    return item.name == "education" && item.state == true ?
                        <Education education={profile.education} /> : null
                })
            }
            <div className="mb-3 text-right">
                <Link className="font-weight-bold btn btn-link rounded p-3" to="/home"> &nbsp;&nbsp;&nbsp;&nbsp; Cancel &nbsp;&nbsp;&nbsp;&nbsp; </Link>
            </div>
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
        </main>
    );
}

export default Main;