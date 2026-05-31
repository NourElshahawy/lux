import React from 'react';
import imgHero from '../../assets/images/img-hero.webp';
import shape from '../../assets/images/shape.svg';



export default function HeroSec() {
    return <>

        <header>
            <div className="main-container">
                <div className="hero">
                    <div className="grid-bg" />
                    <div className="caption">
                        <h1>كل ما يخص الخيول في مكان واحد</h1>
                        <p> منصه متكاملة تشمل جميع خدمات الخيول في مكان واحد مثل بيع و شراء الخيول ، تدريب ، ايواء ، نقل ،
                            مستلزمات الخيل</p>
                    </div>
                    <div className="img-hero">
                        <img src={imgHero} className="img-hero" alt="img-hero" />
                        <img src={shape} className="sahpe" alt="img-hero" />
                        <img src={shape} className="sahpe-2" alt="img-hero" />
                    </div>
                </div>
            </div>

        </header>

    </>
}
