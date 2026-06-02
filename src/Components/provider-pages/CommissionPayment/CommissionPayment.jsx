import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ryalIcon from '../../../assets/images/ryal.svg';

export default function CommissionPayment() {
    const navigate = useNavigate();

    return (
        <section className="section">
            <div className="main-container">
                <div className="addvertisement">
                    <div className="addvertisement-card">
                        <div className="add-code">
                            <label htmlFor="saleAmount">ادخل مبلغ البيع</label>
                            <div className="group-input">
                                <input type="tel" id="saleAmount" />
                            </div>
                        </div>

                        <div className="add-code">
                            <label htmlFor="discountCode">ادخل كود الخصم</label>
                            <div className="group-input">
                                <input type="text" id="discountCode" placeholder="كود الخصم" />
                                <button type="button" className="main-btn">تطبيق الخصم</button>
                                <span className="success">تم حصولك على خصم 2% على العمولة</span>
                            </div>
                        </div>

                        <div className="add-details">
                            <div className="add-details-content price">
                                <p>سعر البيع</p>
                                <span>200 <img src={ryalIcon} alt="" /></span>
                            </div>
                            <div className="add-details-content price">
                                <p>نسبة العمولة</p>
                                <span>5%</span>
                            </div>
                            <div className="add-details-content price">
                                <p>العمولة المستحقة</p>
                                <span>200 <img src={ryalIcon} alt="" /></span>
                            </div>
                            <div className="add-details-content price">
                                <p>نسبة كوبون الخصم</p>
                                <span>2%</span>
                            </div>
                        </div>

                        <div className="total-commission">
                            <div className="price">
                                <p>اجمالى العمولة</p>
                                <span>200 <img src={ryalIcon} alt="" /></span>
                            </div>
                        </div>

                        <div className="button">
                            <button
                                type="button"
                                className="main-btn"
                                onClick={() => navigate('/payment-type')}
                            >
                                اختر وسيلة الدفع
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}