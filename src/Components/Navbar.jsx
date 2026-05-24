import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "./Button";
import "./navbar.css";
import styles from "./component.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* MAIN NAV */}
      <div className={styles["main-container"]}>
        <div className="main-nav">
          {/* Logo */}
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </NavLink>

          {/* Links */}
          <ul className={`links ${menuOpen ? "active" : ""}`}>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/" onClick={closeMenu}>
                الرئيسية
              </NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/advertisement" onClick={closeMenu}>
                الإعلانات
              </NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about" onClick={closeMenu}>
                من نحن
              </NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/contact-us" onClick={closeMenu}>
                تواصل معنا
              </NavLink>
            </li>

            {/* Mobile fast links */}
            <div className="fast-links mobile">
              <NavLink to="/" className="lang" onClick={closeMenu}>
                العربية
              </NavLink>

              <NavLink to="/login" onClick={closeMenu}>
                تسجيل الدخول
              </NavLink>

              <Button children={"أضف إعلان"} variant="main-btn" onClick={closeMenu} />
            </div>
          </ul>

          {/* Desktop fast links */}
          <div className="fast-links">
            <NavLink to="/" className="lang">
              العربية
            </NavLink>

            <NavLink to="/login">تسجيل الدخول</NavLink>

            <Button children={"أضف إعلان"} variant="main-btn" onClick={closeMenu} />
          </div>

          {/* Burger Menu Toggle */}
          <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span className="menu-toggle-line top"></span>
            <span className="menu-toggle-line middle"></span>
            <span className="menu-toggle-line bottom"></span>
          </div>
        </div>
      </div>

      {/* SUB NAV */}
      <div className="sub-nav">
        <ul>
          <li>
            <NavLink to="/horses/sell">بيع خيول</NavLink>
          </li>
          <li>
            <NavLink to="/horses/boarding">إيواء</NavLink>
          </li>
          <li>
            <NavLink to="/horses/tools">مستلزمات</NavLink>
          </li>
          <li>
            <NavLink to="/horses/transport">نقل</NavLink>
          </li>
          <li>
            <NavLink to="/horses/training">تدريب</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
