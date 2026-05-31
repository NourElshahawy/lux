import React from 'react';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';
import searchIcon from '../../assets/images/search.svg';
import saveIcon from '../../assets/images/save.svg';
import lastAds from '../../assets/images/last-ads.png';
import lastAds2 from '../../assets/images/last-ads2.png';
import adressIcon from '../../assets/images/adress.svg';
import ChatDotsIcon from '../../assets/images/ChatDots.svg';
import ryalIcon from '../../assets/images/ryal.svg';
import MainBtn from '../MainBtn/MainBtn';
import CardAds from '../CardAds/CardAds';



export default function LastAds() {

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
        <section className="last-ads">
            <div className="main-container">

                <Title value={"احدث الاعلانات"} />

                <form className="last-ads-filter">
                    <div className="search">
                        <img src={searchIcon} alt='' />
                        <input type="text" placeholder="ابحث عن اعلان" />
                    </div>
                    <div className="filter">
                        <Link to="#" className="main-btn2">
                            تدريب
                        </Link>
                        <Link to="#" className="main-btn2">
                            ايواء
                        </Link>
                        <Link to="#" className="main-btn2">
                            نقل
                        </Link>
                        <Link to="#" className="main-btn2">
                            مستلزمات
                        </Link>
                        <Link to="#" className="main-btn2">
                            خيول
                        </Link>
                    </div>
                </form>

                <div className="last-ads-list">
                    <div className="row row-gap-3">

                        {cards.map((card) => {
                            return (
                                <CardAds key={card.id} card={card} />
                            )
                        })}
                    </div>

                    <MainBtn href="/AdsPage" value="عرض الكل" className="show-all-ads" />
                </div>
            </div>
        </section>

    </>
}
