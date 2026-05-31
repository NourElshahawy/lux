import React, { useState } from 'react';
import './Login.css';

import loginLogo from "../../assets/images/login-logo.svg";
import loginAvatar1 from "../../assets/images/login-avatar1.svg";
import loginAvatar2 from "../../assets/images/login-avatar2.svg";
import { Link } from 'react-router-dom';

export default function Login() {

    const [selectedUser, setSelectedUser] = useState(null);


    return (
        <>
            <div className="bg-login">

                <div className="login-container">

                    <div
                        className="grid-bg"
                        id="grid-bg"
                    ></div>

                    <div className="login-logo">

                        <img
                            src={loginLogo}
                            loading="lazy"
                            alt="login-logo"
                        />

                    </div>

                    <h3 className="login-text">

                        منصة متكاملة تشمل كل خدمات الخيول
                        في مكان واحد من تدريب, ايواء,
                        نقل, مستلزمات وبيع الخيول

                    </h3>

                </div>

                {/* Users Section */}
                <div className="login-users" id="usersSection">
                    <div className="users-page">
                        <div className="login-users-text">
                            <h2> حدد نوع الحساب للمتابعة </h2>
                        </div>

                        <div className="users-container">
                            <Link to="#" className={`buyer ${selectedUser === "buyer" ? "active" : "" }`}
                                onClick={() => setSelectedUser("buyer")} >
                                <div className="users-img">
                                    <img src={loginAvatar2} loading="lazy" alt="img-buyer" />
                                </div>
                                <span> مشتري </span>
                            </Link>

                            <Link to="#" className={`vendor ${selectedUser === "vendor" ? "active" : "" }`}
                                onClick={() => setSelectedUser("vendor")} >
                                <div className="users-img">
                                    <img src={loginAvatar1} loading="lazy" alt="img-vendor" />
                                </div>
                                <span>بائع</span>
                            </Link>
                        </div>

                        <Link to="#formLogin" className="btn-login" data-goto="formLogin" >
                            التالي
                        </Link>
                    </div>
                </div>

                {/* Login Form */}
                <div
                    className="form-login login-users"
                    id="formLogin"
                >

                    <form>

                        <div className="login-users-text">

                            <h2>
                                تسجيل الدخول
                            </h2>

                            <span>
                                قم بادخال رقم الموبايل
                                لارسال كود التحقق
                            </span>

                        </div>

                        <div className="field-wrap">

                            <label
                                className="field-label"
                                htmlFor="phone"
                            >
                                رقم الجوال
                            </label>

                            <input
                                className="phone-input"
                                type="tel"
                                id="phone"
                                placeholder="010123456789"
                            />

                        </div>

                        <div className="verfication">

                            <Link
                                to="#activationCode"
                                className="btn-login"
                                data-goto="activationCode"
                            >
                                ارسال رمز التحقق
                            </Link>

                            <Link
                                to="#"
                                className="create-account"
                                data-goto="register"
                            >

                                <span>
                                    ليس لديك حساب؟
                                </span>

                                انشاء حساب

                            </Link>

                        </div>

                    </form>

                </div>

                {/* OTP */}
                <div
                    className="form-login login-users activation-code"
                    id="activationCode"
                >

                    <form>

                        <div className="login-users-text">

                            <h2>
                                كود التفعيل OTP
                            </h2>

                            <span>
                                قم بادخال كود التحقق
                                المرسل على رقم الهاتف
                            </span>

                        </div>

                        <div className="field-wrap">

                            <label
                                className="field-label"
                                htmlFor="otp"
                            >
                                رمز التحقق
                            </label>

                            <div className="otp-inputs">

                                <input
                                    type="text"
                                    maxLength={1}
                                    inputMode="numeric"
                                />

                                <input
                                    type="text"
                                    maxLength={1}
                                    inputMode="numeric"
                                />

                                <input
                                    type="text"
                                    maxLength={1}
                                    inputMode="numeric"
                                />

                                <input
                                    type="text"
                                    maxLength={1}
                                    inputMode="numeric"
                                />

                                <input
                                    type="text"
                                    maxLength={1}
                                    inputMode="numeric"
                                />

                                <input
                                    type="text"
                                    maxLength={1}
                                    inputMode="numeric"
                                />

                            </div>

                        </div>

                        <div className="verfication">

                            <Link
                                to="#"
                                className="btn-login"
                                data-goto="usersSection"
                            >
                                سجل الدخول
                            </Link>

                            <Link
                                to="#"
                                className="create-account"
                            >
                                اعد ارسال الرمز
                            </Link>

                        </div>

                    </form>

                </div>

                {/* Register */}
                <div
                    className="form-login login-users"
                    id="register"
                >

                    <form>

                        <div className="login-users-text">

                            <h2>
                                انشئ حساب
                            </h2>

                            <span>
                                قم بادخال رقم الموبايل
                                لارسال كود التحقق
                            </span>

                        </div>

                        <div className="field-wrap">

                            <label className="field-label">
                                اسم المستخدم
                            </label>

                            <input
                                className="text-input"
                                type="text"
                                placeholder="NourElshahawy"
                            />

                        </div>

                        <div className="field-wrap">

                            <label
                                className="field-label"
                                htmlFor="register-phone"
                            >
                                رقم الجوال
                            </label>

                            <input
                                className="phone-input"
                                type="tel"
                                id="register-phone"
                                placeholder="010123456789"
                            />

                        </div>

                        <div className="field-wrap">

                            <label className="field-label">
                                العنوان
                            </label>

                            <input
                                className="text-input"
                                type="text"
                                placeholder="القاهرة"
                            />

                        </div>

                        <div className="verfication">

                            <Link
                                to="#activationCode"
                                className="btn-login"
                                data-goto="activationCode"
                            >
                                ارسال رمز التحقق
                            </Link>

                            <Link
                                to="#formLogin"
                                className="create-account"
                                data-goto="formLogin"
                            >

                                <span>
                                    لديك حساب بالفعل؟
                                </span>

                                تسجيل الدخول

                            </Link>

                        </div>

                    </form>

                </div>

            </div>
        </>
    );
}