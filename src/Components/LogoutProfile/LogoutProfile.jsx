import React from 'react';
import logOutImg from "../../assets/images/logOut-img.svg";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../../services/api';

export default function LogoutProfile() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");

            await api.post(
                "/logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // clear storage
            localStorage.removeItem("user");
            localStorage.removeItem("token");

            // clear context
             logout();

            // redirect
            navigate("/");

        } catch (error) {
            console.log(error.response?.data);
        }
    };
    return <>
        <section>
            <div className="logout-form">
                <form action="">
                    <h4>تسجيل الخروج</h4>
                    <figure>
                        <img src={logOutImg} alt="" />
                        <figcaption>هل انت متأكد من انك تريد تسجيل الخروج؟</figcaption>
                    </figure>
                    <div className="btnGroup">
                        <button type="submit" className="main-btn" onClick={handleLogout}>
                            نعم, تسجيل الخروج
                        </button>
                        <button className="main-btn cancel" onClick={() => navigate("/")}>
                            الغاء
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </>
}
