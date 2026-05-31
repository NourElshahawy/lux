import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import globalLogo from '../../assets/images/global.svg';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';




export default function Navbar() {

    const [menuToggle, setMenuToggle] = useState(false);


    return <>

        <nav className="navbar" id="navbar">
            <div className="main-container">
                <div className="main-nav">
                    <Link to="/" className="logo">
                        <img src={logo} alt='' />
                    </Link>
                    <ul className={`links ${menuToggle ? "active" : ""}`}>
                        <li className=''>
                            <NavLink to="/">الرئيسية</NavLink>
                        </li>
                        <li>
                            <NavLink to="/AdsPage">الاعلانات </NavLink>
                        </li>
                        <li>
                            <Link to="/#about">من نحن</Link>
                        </li>
                        <li>
                            <NavLink to="/ContactusPage">تواصل معنا </NavLink>
                        </li>
                        <div className="fast-links mobile">
                            <Link to="#" className="lang">
                                <img src={globalLogo} alt='' />
                                العربية
                            </Link>
                            <Link to="">
                                سجل الدخول
                            </Link>
                            <Link to="" className="main-btn">
                                اضف اعلان
                            </Link>
                        </div>
                    </ul>
                    <div className="fast-links">
                        <Link to="#" className="lang">
                            <img src={globalLogo} alt='' />
                            العربية
                        </Link>
                        <Link to="">
                            سجل الدخول
                        </Link>
                        <Link to="" className="main-btn">
                            اضف اعلان
                        </Link>
                    </div>
                    <div onClick={() => setMenuToggle(!menuToggle)} className="menu-toggle">
                        <span className="menu-toggle-line top" />
                        <span className="menu-toggle-line middle" />
                        <span className="menu-toggle-line bottom" />
                    </div>
                </div>
            </div>
            <div className="sub-nav">
                <ul>
                    <li>
                        <Link to="#">
                            بيع خيول
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            ايواء
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            مستلزمات
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            نقل
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            تدريب
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    </>
}
