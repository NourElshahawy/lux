import React from 'react';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';

import searchIcon from '../../../assets/images/search.svg';
import saveIcon from '../../../assets/images/save.svg';
import lastAds from '../../../assets/images/last-ads.png';
import lastAds2 from '../../../assets/images/last-ads2.png';
import adressIcon from '../../../assets/images/adress.svg';
import ChatDotsIcon from '../../../assets/images/ChatDots.svg';
import ryalIcon from '../../../assets/images/ryal.svg';
import MainBtn from '../../MainBtn/MainBtn';
import CardAds from '../../CardAds/CardAds';




export default function AdsPage() {

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
        {
            id: 5,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
        {
            id: 6,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
        {
            id: 7,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
        {
            id: 8,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
        {
            id: 9,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
        {
            id: 10,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
        {
            id: 11,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
        {
            id: 12,
            img: lastAds,
            categoryName: "خيول",
            description: "خيل عربى اصيل",
            adress: "الرياض",
            price: "1000",
        },
    ];



    return <>
        <HeaderTitle value={"الاعلانات"} valuePage={"تفاصيل الاعلان"} />

        <section className="last-ads ads">
            <div className="main-container">
                <form className="last-ads-filter">
                    <div className="search">
                        <img src={searchIcon} alt='' />
                        <input type="text" placeholder="ابحث باسم الاعلان" />
                    </div>
                    <div className="filter">
                        <div className="select-box">
                            <select defaultValue="">
                                <option value="" disabled>
                                    نوع الاعلان
                                </option>

                                <option>بيع خيول</option>
                                <option>ايواء</option>
                                <option>مستلزمات</option>
                                <option>نقل</option>
                                <option>تدريب</option>
                            </select>
                            <i className="fa-solid fa-caret-down arrow" />
                        </div>

                        <div className="select-box">
                            <select defaultValue="">
                                <option  value="" disabled>العنوان</option>
                                <option>الرياض</option>
                                <option>جدة</option>
                                <option>مكة</option>
                            </select>
                            <i className="fa-solid fa-caret-down arrow" />
                        </div>

                        <div className="select-box">
                            <select defaultValue="">
                                <option value="" disabled>سعر الاعلان</option>
                                <option>الأقل للأعلى</option>
                                <option>الأعلى للأقل</option>
                            </select>
                            <i className="fa-solid fa-caret-down arrow" />
                        </div>

                        <div className="select-box">
                            <select defaultValue="">
                                <option value="" disabled>نوع السعر</option>
                                <option>ثابت</option>
                                <option>على السوم </option>
                            </select>
                            <i className="fa-solid fa-caret-down arrow" />
                        </div>
                    </div>
                </form>
                <div className="last-ads-list">
                    <div className="row g-4">

                        {cards.map((card) => {
                            return (
                                <CardAds key={card.id} card={card} />
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>







    </>
}
