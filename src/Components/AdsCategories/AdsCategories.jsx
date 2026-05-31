import React from 'react';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';
import category1 from '../../assets/images/category1.svg';
import category2 from '../../assets/images/category2.svg';
import category3 from '../../assets/images/category3.svg';
import category4 from '../../assets/images/category4.svg';
import category5 from '../../assets/images/category5.svg';

export default function AdsCategories() {


    const items = [
        {
            id: 1,
            img: category1,
            title: "تدريب",
        },
        {
            id: 2,
            img: category2,
            title: "خيول",
        },
        {
            id: 3,
            img: category3,
            title: "مستلزمات",
        },
        {
            id: 4,
            img: category4,
            title: "ايواء",
        },
        {
            id: 5,
            img: category5,
            title: "نقل",
        },
    ]


    return <>
        <section className="ads-categories">
            <div className="main-container">

                <Title value={"تصنيفات الاعلانات"} />

                <div className="ads-categories-list">

                    {items.map((item) => {
                        return (
                            <Link key={item.id} to="" className="ads-categories-item">
                                <img src={item.img} alt='' />
                                <h3>{item.title}</h3>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>

    </>
}
