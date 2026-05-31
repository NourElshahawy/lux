import React, { useState } from 'react';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import { Link } from 'react-router-dom';
import lastAds from "../../assets/images/last-ads.png";
import lastAds2 from "../../assets/images/last-ads2.png";
import lastAds3 from "../../assets/images/last-ads3.png";
import lastAds4 from "../../assets/images/last-ads4.png";
import saveIcon from "../../assets/images/save.svg";
import heightIcon from "../../assets/images/Height.svg";
import duotoneIcon from "../../assets/images/Duotone.svg";
import horseIcon from "../../assets/images/Horse.svg";

import LocationIcon from "../../assets/images/Location01.svg";
import chatDotsIcon from "../../assets/images/ChatDots.svg";
import ryalIcon from "../../assets/images/ryal.svg";
import personalDataImg from "../../assets/images/personalDataImg.jpg";
import endCall from "../../assets/images/EndCall.svg";
import brandWhatsapp from "../../assets/images/BrandWhatsapp.svg";
import star from "../../assets/images/star.svg";
import comment from "../../assets/images/Comment1.svg";
import send from "../../assets/images/Send.svg";
import adressIcon from "../../assets/images/adress.svg";
import Title from '../Title/Title';
import MainBtn from '../MainBtn/MainBtn';




export default function AdsDeatails() {


    const images = [
        lastAds,
        lastAds2,
        lastAds3,
        lastAds4,
    ];

    const [mainImage, setMainImage] = useState(images[0]);

    const [activeIndex, setActiveIndex] = useState(0);

    const handleChangeImage = (img, index) => {
        setMainImage(img);
        setActiveIndex(index);
    };



    const cards = [
        {
            id: 1,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
        {
            id: 2,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
        {
            id: 3,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
        {
            id: 4,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
    ];



    return <>
        <HeaderTitle value="الاعلانات" valuePage="تفاصيل الاعلان" />

        <section className="section">
            <div className="main-container">
                <div className="page-grid row g-4">

                    <div className="col-md-6">
                        <div className="right-col">
                            <div className="main-img">
                                <span className="save-ads">
                                    <img src={saveIcon} alt='' />
                                </span>
                                <img src={mainImage} alt="horse" className="preview-image" />
                            </div>
                            <div className="thumb-row">
                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`thumb ${activeIndex === index ? "active" : ""}`}
                                        onClick={() => handleChangeImage(img, index)}
                                    >

                                        <img
                                            src={img}
                                            loading="lazy"
                                            alt="advertise-img"
                                        />

                                    </div>
                                ))}
                                {/* <div className="thumb">
                                    <img src={lastAds} loading="lazy" alt="advertise-img" />
                                </div>
                                <div className="thumb">
                                    <img src={lastAds2} loading="lazy" alt="advertise-img" />
                                </div>
                                <div className="thumb">
                                    <img src={lastAds3} loading="lazy" alt="advertise-img" />
                                </div>
                                <div className="thumb">
                                    <img src={lastAds4} loading="lazy" alt="advertise-img" />
                                </div> */}
                            </div>
                            <div className="details-box">
                                <div className="details-title">التفاصيل</div>
                                <div className="detail-row">
                                    <span className="detail-label">
                                        <img src={heightIcon} loading="lazy" alt="height-svg" />
                                        الطول
                                    </span>
                                    <span className="detail-val">160 سم</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">
                                        <img src={heightIcon} loading="lazy" alt="height-svg" />
                                        العمر</span>
                                    <span className="detail-val">4 سنوات</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">
                                        <img src={duotoneIcon} loading="lazy" alt="Duotone-svg" />
                                        الجنس</span>
                                    <span className="detail-val">عربي مقتح</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">
                                        <img src={horseIcon} loading="lazy" alt="Horse-svg" />
                                        الأب</span>
                                    <span className="detail-val">فحل عربي</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">
                                        <img src={horseIcon} loading="lazy" alt="Horse-svg" />
                                        الأم
                                    </span>
                                    <span className="detail-val">فرس عربية</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="left-col">
                            <div className="top-bar">
                                <div className="top-bar-top">
                                    <div className="title-row">
                                        <p>خيول</p>
                                        <h2 className="horse-title">خيل عربي أصيل</h2>
                                        <div className="hourse-location">
                                            <img src={LocationIcon} loading="lazy" alt="location-svg" />
                                            الرياض
                                        </div>
                                    </div>
                                    <div className="price">
                                        <Link to="./profile.html#" className="main-btn">
                                            <img src={chatDotsIcon} alt='' />
                                            تواصل مع البائع
                                        </Link>
                                        <p>
                                            <span>100000
                                                <img src={ryalIcon} alt='' />
                                            </span>
                                            <span>
                                                سعر ثابت
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="top-bar-bottom">
                                    <div className="contact-name">
                                        <div className="avatar">
                                            <img src={personalDataImg} loading="lazy" alt="person-image" />
                                        </div>
                                        <p>
                                            محمد إبراهيم
                                        </p>
                                    </div>
                                    <div className="contact-icons">
                                        <div className="icon-btn">
                                            <img src={endCall} alt='' />
                                        </div>
                                        <div className="icon-btn">
                                            <img src={brandWhatsapp} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="middel-bar">
                                <div className="section-title">الوصف</div>
                                <p className="desc">
                                    حصان للبيع يتمتع بصحة ممتازة وبنية قوية، هادئ الطباعوسهل التدريب. مناسب للركوب
                                    والتدريب وتمت العناية بهبشكل مستمر من حيث
                                    التغذية والرعاية الصحية. يتمتع بصحة ممتازة وبنية
                                </p>
                            </div>
                            <div className="bottom-bar">
                                <div className="section-title">التعليقات</div>
                                <div className="review-item">
                                    <div className="contact-name">
                                        <div className="avatar">
                                            <img src={personalDataImg} loading="lazy" alt="person-image" />
                                        </div>
                                        <div className="comment-text">
                                            <p>
                                                محمود على
                                            </p>
                                            <p>
                                                هل السعر قابل للتفاوض؟
                                            </p>
                                        </div>
                                    </div>
                                    <div className="stars">
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} className="active" alt='' />
                                        <img src={star} className="active" alt='' />
                                        <img src={star} className="active" alt='' />
                                    </div>
                                </div>
                                <div className="review-item">
                                    <div className="contact-name">
                                        <div className="avatar">
                                            <img src={personalDataImg} loading="lazy" alt="person-image" />
                                        </div>
                                        <div className="comment-text">
                                            <p>
                                                محمود على
                                            </p>
                                            <p>
                                                هل السعر قابل للتفاوض؟
                                            </p>
                                        </div>
                                    </div>
                                    <div className="stars">
                                        <img src={star} alt='' />
                                        <img src={star} className="active" alt='' />
                                        <img src={star} className="active" alt='' />
                                        <img src={star} className="active" alt='' />
                                        <img src={star} className="active" alt='' />
                                    </div>
                                </div>
                                <div className="comment-box">
                                    <div className="stars">
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                    </div>
                                    <div className="comment-box-input-container">
                                        <div className="avatar">
                                            <img src={personalDataImg} loading="lazy" alt="person-image" />
                                        </div>
                                        <div className="comment-box-input">
                                            <input type="text" placeholder="اكتب تعليقك" />
                                            <img src={comment} alt='' />
                                        </div>
                                        <div className="icon-btn">
                                            <img src={send} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="related-ads">
                    <Title value="اعلانات ذات صلة" className="justify-content-start" />

                    <div className="last-ads-list">
                        <div className="row">

                            {cards.map((card) => {
                                return (
                                    <div key={card.id} className="col-lg-3 col-md-6 col-12">
                                        <div className="last-ads-item">
                                            <Link to="" className="save-ads">
                                                <img src={saveIcon} alt='' />
                                            </Link>
                                            <div className="last-ads-item-img">
                                                <img src={card.img} alt='' />
                                            </div>
                                            <div className="last-ads-item-text">
                                                <p className="category-name">
                                                    {card.categoryName}
                                                </p>
                                                <div className="description">
                                                    <h3>
                                                        {card.description}
                                                    </h3>
                                                    <p>
                                                        <img src={adressIcon} alt='' />
                                                        {card.adress}
                                                    </p>
                                                </div>
                                                <div className="price">
                                                    <MainBtn value="تواصل مع البائع" img={chatDotsIcon} />

                                                    <p>
                                                        <span>
                                                            {card.price}
                                                            <img src={ryalIcon} alt='' />
                                                        </span>
                                                        <span>
                                                            سعر ثابت
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
