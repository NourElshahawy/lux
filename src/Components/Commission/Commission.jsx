import React from 'react';
import visaIcon from '../../assets/images/visa.png';
import mastercard from '../../assets/images/mastercard.png';
import mada from '../../assets/images/mada.png';
import applePay from '../../assets/images/apple-pay.png';
import shapeIcon from '../../assets/images/shape.svg';
import commission from '../../assets/images/commission.png';
import HeaderTitle from '../HeaderTitle/HeaderTitle';




export default function Commission() {
    return <>

    <HeaderTitle value="سياسة العمولة" />

        <section className="profile section">
            <div className="main-container">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="contact-heading">
                            <h2>
                                بيع منتجك عبر المنصة برسوم عمولة بسيطة.
                            </h2>

                            <p>
                                العمولة تكون على البائع، وهي نسبة تُحتسب من قيمة كل عملية بيع ناجحة عبر المنصة،
                                وتُسدد إلكترونيًا مباشرة بعد إتمام الصفقة.
                            </p>
                        </div>

                        <div className="payment">
                            <div className="payment-heading">
                                <h2>وسائل الدفع المتاحة</h2>
                            </div>

                            <div className="payment-type">
                                <div className="payment-icon">
                                    <img
                                        src={visaIcon}
                                        loading="lazy"
                                        alt="visa"
                                    />
                                </div>

                                <div className="payment-icon">
                                    <img
                                        src={mastercard}
                                        loading="lazy"
                                        alt="mastercard"
                                    />
                                </div>

                                <div className="payment-icon">
                                    <img
                                        src={mada}
                                        loading="lazy"
                                        alt="mada"
                                    />
                                </div>

                                <div className="payment-icon">
                                    <img
                                        src={applePay}
                                        loading="lazy"
                                        alt="apple-pay"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="commission-img">
                            <div className="commission-image">
                                <img
                                    src={shapeIcon}
                                    className="shape"
                                    alt="img-hero"
                                />

                                <img
                                    src={commission}
                                    loading="lazy"
                                    alt="commission-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 g-4">
                    <div className="col-md-4">
                        <div className="commission-payment">
                            <h3>من المسؤول عن دفع العمولة؟</h3>

                            <p>
                                العمولة تكون على البائع، وهي أمانة يتم سدادها بعد إتمام البيع.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="commission-payment">
                            <h3>طريقة احتساب العمولة</h3>

                            <p>
                                يتم احتساب العمولة كنسبة من سعر البيع وتحدد نسبة العمولة من قبل التطبيق
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="commission-payment">
                            <h3>متى يتم دفع العمولة؟</h3>

                            <p>
                                يتم سداد العمولة بعد كل عملية بيع وتدفع مرة واحدة على كل عملية بشكل منفصل
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
