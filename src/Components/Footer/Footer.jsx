import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import loginLogo from '../../assets/images/login-logo.svg';
import X from '../../assets/images/X.svg';
import instagram from '../../assets/images/Instagram.svg';
import facebook from '../../assets/images/face.svg';




export default function Footer() {
    return <>
        <footer className="footer mr-section" id="footer">
            <div className="main-container">
                <div className="footer-logo">
                    <Link to="index.html">
                        <img src={loginLogo} loading="lazy" alt="logo" />
                    </Link>
                </div>
                <div className="footer-links">
                    <ul className="links">
                        <li className="active">
                            <Link to="#">بيع خيول</Link>
                        </li>
                        <li>
                            <Link to="#">ايواء </Link>
                        </li>
                        <li>
                            <Link to="#">مستلزمات </Link>
                        </li>
                        <li>
                            <Link to="#">نقل </Link>
                        </li>
                        <li>
                            <Link to="#">تدريب </Link>
                        </li>
                        <li>
                            <Link to="#">سياسة العمولة </Link>
                        </li>
                    </ul>
                </div>
                <div className="end-footer row">
                    <div className="footer-contact col-lg-4">
                        <Link to="https://jaadara.com" target="_blank">
                            تصميم وتطوير جدارة
                        </Link>
                    </div>
                    <div className="jadara col-lg-4">
                        <ul>
                            <li>
                                <Link to="#">
                                    <img src={instagram} loading="lazy" alt='' />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img src={X} loading="lazy" alt='' />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img src={facebook} loading="lazy" alt='' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-copyright col-lg-4">
                        <p>جميع الحقوق محفوظة 2026 <span>© </span> lUX HORSE</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
}
