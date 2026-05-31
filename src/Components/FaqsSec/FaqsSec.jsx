import React, { useState } from 'react';
import Title from '../Title/Title';
import aboutus1 from '../../assets/images/aboutus1.webp';
import aboutus2 from '../../assets/images/aboutus2.webp';

export default function FaqsSec() {


    const [openIndex, setOpenIndex] = useState(null);


    const faqs = [
        {
            q: "كيف أتواصل مع صاحب الإعلان؟",
            a: "يمكنك التواصل مباشرة من داخل التطبيق أو الاتصال به المسجل في الإعلان."
        },
        {
            q: "كيف يمكنني إضافة إعلان جديد؟",
            a: "لا، يتم مراجعة جميع الإعلانات من قبل الإدارة لادخل إلى لوحة التحكم، ثم اختر “إضافة إعلان” وأدخل تفاصيل الخيل والصور وبيانات التواصل. لتأكد من توافقها مع سياسات وشروط التطبيق قبل نشرها."
        },
        {
            q: "كيف أتواصل مع صاحب الإعلان؟",
            a: "يمكنك التواصل مباشرة من داخل التطبيق أو الاتصال به المسجل في الإعلان."
        },
        {
            q: "كيف يمكنني إضافة إعلان جديد؟",
            a: "لا، يتم مراجعة جميع الإعلانات من قبل الإدارة لادخل إلى لوحة التحكم، ثم اختر “إضافة إعلان” وأدخل تفاصيل الخيل والصور وبيانات التواصل. لتأكد من توافقها مع سياسات وشروط التطبيق قبل نشرها."
        },
    ];






    return <>
        <section className="ask-home mr-section" id="ask-home">
            <div className="main-container">

                <Title value="الاسئلة الشائعة" />

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="text-ask-aboutus">
                            <ul>

                                {faqs.map((faq, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={openIndex === index ? "active" : ""} >
                                            <h2 onClick={() =>
                                                setOpenIndex(openIndex === index ? null : index)
                                            }>
                                                {faq.q}
                                                <div className="puls-que" />
                                            </h2>

                                            <p> {faq.a} </p>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-aboutus">
                            <div className="img-aboutus-container">
                                <img src={aboutus1} loading="lazy" alt='' className="aboutus-img-1" />
                                <img src={aboutus2} loading="lazy" className="bg-about-us aboutus-img-2" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
