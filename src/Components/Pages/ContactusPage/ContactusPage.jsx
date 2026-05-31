import React from 'react';
import locationIcon from '../../../assets/images/location.svg';
import phoneIcon from '../../../assets/images/phone.svg';
import emailIcon from '../../../assets/images/email.svg';

export default function ContactusPage() {
    return <>

        <section className="profile contact-us section">
            <div className="main-container">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="contact-heading">
                            <h2>ابق على توصل دائم معنا:</h2>
                            <p>
                                تواصل معنا لأي استفسار أو مساعدة، فريقنا جاهز للرد عليك في أسرع وقت.
                            </p>
                        </div>
                        <div className="types-contact">
                            <div className="location">
                                <div className="contact-icon">
                                    <img src={locationIcon} loading="lazy" alt="location" />
                                </div>
                                <div className="contact-head">
                                    <h3>
                                        العنوان
                                    </h3>
                                    <p>
                                        الرياض
                                    </p>
                                </div>
                            </div>
                            <div className="phone">
                                <div className="contact-icon">
                                    <img src={phoneIcon} loading="lazy" alt="phone" />
                                </div>
                                <div className="contact-head">
                                    <h3>
                                        رقم التواصل
                                    </h3>
                                    <p>
                                        01025365845
                                    </p>
                                </div>
                            </div>
                            <div className="mail">
                                <div className="contact-icon">
                                    <img src={emailIcon} loading="lazy" alt="mail" />
                                </div>
                                <div className="contact-head">
                                    <h3>
                                        البريد الالكترونى
                                    </h3>
                                    <a href="#">
                                        Lux Horse@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="form-profile">
                            <form id="form">
                                <h3>تواصل معنا</h3>
                                <div className="input-group">
                                    <label htmlFor="name">الاسم</label>
                                    <input type="text" placeholder="Nour Elshahawy" name='' id="name" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="name">الايميل</label>
                                    <input type="email" placeholder="nour@gmail.com" name='' id="email" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="subject">الموضوع</label>
                                    <textarea name="subject" id="subject" defaultValue={""} />
                                </div>
                                <div className="btnGroub">
                                    <button type="submit" className="main-btn w-100">
                                        ارسال
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>
}
