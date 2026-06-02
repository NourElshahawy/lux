import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import globalLogo from '../../assets/images/global.svg';
import profileIcon from '../../assets/images/avatar.svg'; 
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/AuthContext';




export default function Navbar() {

     const [menuToggle, setMenuToggle] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user } = useAuth();

    const loggedInLinks = () => (
        <div className="fast-links">
            <Link to="#" className="lang">
                <img src={globalLogo} alt='' />
                العربية
            </Link>
            <div className="profile-dropdown">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="profile-btn">
                    <img src={profileIcon} alt='' />
                    ▼
                </button>
                {dropdownOpen && (
                    <ul className="dropdown-menu">
                        <li><Link to="/statistics">احصائياتى</Link></li>
                        <li><Link to="/adsPageProvider">اعلاناتى</Link></li>
                        {/* <li><Link to={`/${user?.role}/messages`}>محادثاتى</Link></li> */}
                        <hr />
                        <li><Link to="/Profile">الملف الشخصى</Link></li>
                    </ul>
                )}
            </div>
            <Link to="/create-ad" className="main-btn">
                اضف اعلان
            </Link>
        </div>
    );

    const guestLinks = (
        <div className="fast-links">
            <Link to="#" className="lang">
                <img src={globalLogo} alt='' />
                العربية
            </Link>
            <Link to="/Login">سجل الدخول</Link>
            <Link to="/Login" className="main-btn">اضف اعلان</Link>
        </div>
    );


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
                            {user ? loggedInLinks() : guestLinks}
                        </div>
                    </ul>
                        {user ? loggedInLinks() : guestLinks}

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
