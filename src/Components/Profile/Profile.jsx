import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../../services/api';

import personalDataIcon from "../../assets/images/personalData-Icon.svg";
import archivesIcon from "../../assets/images/archives-icon.svg";
import chatIcon from "../../assets/images/chat-icon.svg";
import logoutIcon from "../../assets/images/logout-icon.svg";



export default function Profile() {


    



    
    return <>

        <section className="profile section">
            <div className="main-container">
                <div className="row g-4">
                    <div className="col-lg-3">
                        {/*? =========== Nav-Profile =========== */}
                        <nav className="nav-profile">
                            <ul>
                                {/* البيانات الشخصية */}
                                <li className="nav-item">
                                    <NavLink to="PersonalData" className="nav-link">
                                        <figure>
                                            <img src={personalDataIcon} alt='' />
                                        </figure>
                                        <p>البيانات الشخصية</p>
                                    </NavLink>
                                </li>

                                {/* المحفوظات */}
                                <li className="nav-item">
                                    <NavLink to="Archives" className="nav-link">
                                        <figure>
                                            <img src={archivesIcon} alt='' />
                                        </figure>
                                        <p>المحفوظات</p>
                                    </NavLink>
                                </li>

                                {/* المحادثات */}
                                <li className="nav-item">
                                    <NavLink to="ChatsProfile" className="nav-link">
                                        <figure>
                                            <img src={chatIcon} alt='' />
                                        </figure>
                                        <p>المحادثات</p>
                                    </NavLink>
                                </li>

                                {/* تسجيل الخروج */}
                                <li className="nav-item">
                                    <NavLink to="LogoutProfile" className="nav-link logout">
                                        <figure>
                                            <img src={logoutIcon} alt='' />
                                        </figure>
                                        <p>تسجيل الخروج</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/*? =========== Content =========== */}
                    <div className="col-lg-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>


    </>
        
}

