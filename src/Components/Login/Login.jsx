import React, { useState } from 'react';
import './Login.css';

import loginLogo from "../../assets/images/login-logo.svg";
import loginAvatar1 from "../../assets/images/login-avatar1.svg";
import loginAvatar2 from "../../assets/images/login-avatar2.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {

    const [selectedUser, setSelectedUser] = useState(null);
    const [currentStep, setCurrentStep] = useState("usersSection");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        // هنا هتستبدل بالـ API response الحقيقي
        login({ role: selectedUser === "vendor" ? "vendor" : "buyer" });
        navigate('/');
    };


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
                {currentStep === "usersSection" && (
                <div className="login-users" id="usersSection">
                    <div className="users-page">
                        <div className="login-users-text">
                            <h2>حدد نوع الحساب للمتابعة</h2>
                        </div>
                        <div className="users-container">
                            <Link to="#" className={`buyer ${selectedUser === "buyer" ? "active" : ""}`}
                                onClick={() => setSelectedUser("buyer")}>
                                <div className="users-img">
                                    <img src={loginAvatar2} loading="lazy" alt="img-buyer" />
                                </div>
                                <span>مشتري</span>
                            </Link>
                            <Link to="#" className={`vendor ${selectedUser === "vendor" ? "active" : ""}`}
                                onClick={() => setSelectedUser("vendor")}>
                                <div className="users-img">
                                    <img src={loginAvatar1} loading="lazy" alt="img-vendor" />
                                </div>
                                <span>بائع</span>
                            </Link>
                        </div>
                        <button type="button" className="btn-login"
                            onClick={() => selectedUser && setCurrentStep("formLogin")}>
                            التالي
                        </button>
                    </div>
                </div>
            )}

                {/* Login Form */}
                {currentStep === "formLogin" && (
                <div className="form-login login-users" id="formLogin">
                    <form>
                        <div className="login-users-text">
                            <h2>تسجيل الدخول</h2>
                            <span>قم بادخال رقم الموبايل لارسال كود التحقق</span>
                        </div>
                        <div className="field-wrap">
                            <label className="field-label" htmlFor="phone">رقم الجوال</label>
                            <input className="phone-input" type="tel" id="phone" placeholder="010123456789" />
                        </div>
                        <div className="verfication">
                            <button type="button" className="btn-login"
                                onClick={() => setCurrentStep("activationCode")}>
                                ارسال رمز التحقق
                            </button>
                            <button type="button" className="create-account"
                                onClick={() => setCurrentStep("register")}>
                                <span>ليس لديك حساب؟</span>
                                انشاء حساب
                            </button>
                        </div>
                    </form>
                </div>
            )}

                {/* OTP */}
                {currentStep === "activationCode" && (
                <div className="form-login login-users activation-code" id="activationCode">
                    <form>
                        <div className="login-users-text">
                            <h2>كود التفعيل OTP</h2>
                            <span>قم بادخال كود التحقق المرسل على رقم الهاتف</span>
                        </div>
                        <div className="field-wrap">
                            <label className="field-label" htmlFor="otp">رمز التحقق</label>
                            <div className="otp-inputs">
                                {[...Array(6)].map((_, i) => (
                                    <input key={i} type="text" maxLength={1} inputMode="numeric" />
                                ))}
                            </div>
                        </div>
                        <div className="verfication">
                            <button type="button" onClick={handleLogin} className="btn-login">
                                سجل الدخول
                            </button>
                            <button type="button" className="create-account">
                                اعد ارسال الرمز
                            </button>
                        </div>
                    </form>
                </div>
            )}

                {/* Register */}
                {currentStep === "register" && (
                <div className="form-login login-users" id="register">
                    <form>
                        <div className="login-users-text">
                            <h2>انشئ حساب</h2>
                            <span>قم بادخال رقم الموبايل لارسال كود التحقق</span>
                        </div>
                        <div className="field-wrap">
                            <label className="field-label">اسم المستخدم</label>
                            <input className="text-input" type="text" placeholder="NourElshahawy" />
                        </div>
                        <div className="field-wrap">
                            <label className="field-label" htmlFor="register-phone">رقم الجوال</label>
                            <input className="phone-input" type="tel" id="register-phone" placeholder="010123456789" />
                        </div>
                        <div className="field-wrap">
                            <label className="field-label">العنوان</label>
                            <input className="text-input" type="text" placeholder="القاهرة" />
                        </div>
                        <div className="verfication">
                            <button type="button" className="btn-login"
                                onClick={() => setCurrentStep("activationCode")}>
                                ارسال رمز التحقق
                            </button>
                            <button type="button" className="create-account"
                                onClick={() => setCurrentStep("formLogin")}>
                                <span>لديك حساب بالفعل؟</span>
                                تسجيل الدخول
                            </button>
                        </div>
                    </form>
                </div>
            )}

            </div>
        </>
    );
}