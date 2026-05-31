import React from 'react';
import { Link } from 'react-router-dom';
import MainBtn from '../MainBtn/MainBtn';

import searchIcon from '../../assets/images/search.svg';
import saveIcon from '../../assets/images/save.svg';
import adressIcon from '../../assets/images/adress.svg';
import ChatDotsIcon from '../../assets/images/ChatDots.svg';
import ryalIcon from '../../assets/images/ryal.svg';




export default function CardAds({ card }) {
    return <>

        <div className="col-lg-3 col-md-6 col-sm-12">

            <div className="last-ads-item">
                <span className="save-ads">
                    <img src={saveIcon} alt='' />
                </span>

                <Link to="/AdsDeatails" className='w-100'>
                    <div className="last-ads-item-img">
                        <img src={card.img} alt='' />
                    </div>
                    <div className="last-ads-item-text">
                        <p className="category-name">{card.categoryName}</p>
                        <div className="description">
                            <h3>{card.description}</h3>
                            <p>
                                <img src={adressIcon} alt='' />
                                {card.adress}
                            </p>
                        </div>
                    </div>
                </Link>


                <div className="price">
                    <MainBtn img={ChatDotsIcon} value="تواصل مع البائع" />
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

    </>
}
