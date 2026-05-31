import React from 'react';
import CardAds from '../CardAds/CardAds';
import lastAds from '../../assets/images/last-ads.png';




export default function Archives() {

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
    ];



    return <>
        <section>
            <div className="row g-4">
                {cards.map((card) => {
                    return (
                        <CardAds key={card.id} card={card} />
                    )
                })}
            </div>
        </section>
    </>
}
