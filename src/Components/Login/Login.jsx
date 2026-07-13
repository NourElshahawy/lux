import React, { useState } from "react";
import "./Login.css";

import loginLogo from "../../assets/images/login-logo.svg";
import loginAvatar1 from "../../assets/images/login-avatar1.svg";
import loginAvatar2 from "../../assets/images/login-avatar2.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { sendOTP, verifyOTP, registerUser } from "../../services/authService";

export default function Login() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentStep, setCurrentStep] = useState("usersSection");

  const { login } = useAuth();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);

  const [registerData, setRegisterData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleSendOTP = async () => {
    try {
      const type = selectedUser === "vendor" ? "provider" : "user";

      // login flow بيستخدم phone، register flow بيستخدم registerData.phone
      const phoneToSend =
        currentStep === "register" || registerData.phone
          ? registerData.phone || phone
          : phone;

      const action = registerData.phone ? "register" : "login";
      console.log("Sending:", {
        phoneToSend,
        type,
        action,
        name: registerData.name,
      });

      const response = await sendOTP(
        phoneToSend,
        type,
        action,
        registerData.name,
      );

      if (response.status) {
        if (registerData.phone) {
          localStorage.setItem("registerData", JSON.stringify(registerData));
        }
        setCurrentStep("activationCode");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // أرقام بس

    const newOtp = [...otpValues];
    newOtp[index] = value.slice(-1); // رقم واحد بس في كل box
    setOtpValues(newOtp);
    setOtp(newOtp.join("")); // لازم setOtp يفضل شغال عشان handleLogin

    // ينتقل للـ box الجاي تلقائي
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    // لو مسح يرجع للـ box اللي قبله
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleLogin = async () => {
    try {
      const type = selectedUser === "vendor" ? "provider" : "user";

      if (currentStep === "activationCode" && registerData.phone) {
        // Register flow
        const response = await registerUser(
          registerData.name,
          registerData.phone,
          registerData.address,
          otp,
          type,
        );
        if (response.status) {
          login(response.data.user, response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
      } else {
        // Login flow
        const response = await verifyOTP(phone, otp, type);
        if (response.status) {
          login(response.data.user, response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-login">
        <div className="login-container">
          <div className="grid-bg" id="grid-bg"></div>

          <div className="login-logo">
            <img src={loginLogo} loading="lazy" alt="login-logo" />
          </div>

          <h3 className="login-text">
            منصة متكاملة تشمل كل خدمات الخيول في مكان واحد من تدريب, ايواء, نقل,
            مستلزمات وبيع الخيول
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
                <Link
                  to="#"
                  className={`buyer ${selectedUser === "buyer" ? "active" : ""}`}
                  onClick={() => setSelectedUser("buyer")}
                >
                  <div className="users-img">
                    <img src={loginAvatar2} loading="lazy" alt="img-buyer" />
                  </div>
                  <span>مشتري</span>
                </Link>
                <Link
                  to="#"
                  className={`vendor ${selectedUser === "vendor" ? "active" : ""}`}
                  onClick={() => setSelectedUser("vendor")}
                >
                  <div className="users-img">
                    <img src={loginAvatar1} loading="lazy" alt="img-vendor" />
                  </div>
                  <span>بائع</span>
                </Link>
              </div>
              <button
                type="button"
                className="btn-login"
                onClick={() => selectedUser && setCurrentStep("formLogin")}
              >
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
                <label className="field-label" htmlFor="phone">
                  رقم الجوال
                </label>
                <input
                  className="phone-input"
                  type="tel"
                  id="phone"
                  placeholder="010123456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="verfication">
                <button
                  type="button"
                  className="btn-login"
                  onClick={handleSendOTP}
                >
                  ارسال رمز التحقق
                </button>
                <button
                  type="button"
                  className="create-account"
                  onClick={() => setCurrentStep("register")}
                >
                  <span>ليس لديك حساب؟</span>
                  انشاء حساب
                </button>
              </div>
            </form>
          </div>
        )}

        {/* OTP */}
        {currentStep === "activationCode" && (
          <div
            className="form-login login-users activation-code"
            id="activationCode"
          >
            <form>
              <div className="login-users-text">
                <h2>كود التفعيل OTP</h2>
                <span>قم بادخال كود التحقق المرسل على رقم الهاتف</span>
              </div>
              <div className="field-wrap">
                <label className="field-label" htmlFor="otp">
                  رمز التحقق
                </label>
                <div className="otp-inputs">
                  {[...Array(6)].map((_, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={otpValues[i]}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    />
                  ))}
                  {/* <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="ادخل كود التحقق"
                                /> */}
                </div>
              </div>
              <div className="verfication">
                <button
                  type="button"
                  onClick={handleLogin}
                  className="btn-login"
                >
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
                <input
                  className="text-input"
                  type="text"
                  value={registerData.name}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, name: e.target.value })
                  }
                  placeholder="NourElshahawy"
                />
              </div>
              <div className="field-wrap">
                <label className="field-label" htmlFor="register-phone">
                  رقم الجوال
                </label>
                <input
                  className="phone-input"
                  type="tel"
                  id="register-phone"
                  placeholder="010123456789"
                  value={registerData.phone}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, phone: e.target.value })
                  }
                />
              </div>
              <div className="field-wrap">
                <label className="field-label">العنوان</label>
                <input
                  className="text-input"
                  type="text"
                  placeholder="القاهرة"
                  value={registerData.address}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div className="verfication">
                <button
                  type="button"
                  className="btn-login"
                  onClick={handleSendOTP}
                >
                  ارسال رمز التحقق
                </button>
                <button
                  type="button"
                  className="create-account"
                  onClick={() => setCurrentStep("formLogin")}
                >
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
