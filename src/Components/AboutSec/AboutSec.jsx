import React from 'react';
import aboutImg from '../../assets/images/about.webp';
import bgAboutImg from '../../assets/images/bg-about.webp';

export default function AboutSec() {
    return <>
        <section id="about" className="about mr-section">
            <div className="main-container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 about-img-container">
                        <div className="about-img" data-aos="fade-up">
                            <img src={aboutImg} className="about-img-img" loading="lazy" />
                            <img src={bgAboutImg} loading="lazy" className="about-bg" />
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <div className="about-text" data-aos="fade-up">
                            <div className="about-header">
                                <div className="about-header-title">
                                    <span />
                                    <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration={200}>عن التطبيق
                                    </p>
                                </div>
                                <h3> تعرف اكثر عن تطبيق Lux Horse</h3>
                            </div>
                            <div className="about-body">
                                <p>
                                    منصة رقمية متخصصة في عالم الخيول والفروسية، تهدف إلى تجميع كل ما يخص الخيول في مكان
                                    واحد.
                                </p>
                                <p>
                                    توفر محتوى موثوق، خدمات متخصصة، ومعلومات تساعد الملاك، المدربين، والمهتمين بالخيول
                                    للوصول إلى احتياجاتهم بسهولة دون البحث في مصادر متعددة.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}
