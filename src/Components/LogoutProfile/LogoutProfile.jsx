import React from 'react';
import logOutImg from "../../assets/images/logOut-img.svg";

export default function LogoutProfile() {
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
                        <button type="submit" className="main-btn">
                            نعم, تسجيل الخروج
                        </button>
                        <button className="main-btn cancel">
                            الغاء
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </>
}
