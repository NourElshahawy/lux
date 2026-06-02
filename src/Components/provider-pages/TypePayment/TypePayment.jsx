import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mastercard from '../../../assets/images/mastercard.png';
import visa from '../../../assets/images/visa.png';
import mada from '../../../assets/images/mada.png';
import applePay from '../../../assets/images/apple-pay.png';
import bank from '../../../assets/images/bank.png';

const paymentOptions = [
    { img: mastercard, label: 'MasterCard' },
    { img: visa, label: 'Visa' },
    { img: mada, label: 'Mada' },
    { img: applePay, label: 'Apple Pay' },
    { img: bank, label: 'Bank' },
];

export default function TypePayment() {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const navigate = useNavigate();

    const handlePay = () => {
        if (selectedPayment === null) return;
    navigate('/transferFunds');
    };

    return (
        <section className="section">
            <div className="main-container">
                <div className="addvertisement">
                    <div className="addvertisement-card">
                        <div className="get-paid">
                            <h2>اختر وسيلة الدفع المناسبة لك:</h2>
                            <div className="payment-container">
                                {paymentOptions.map((option, i) => (
                                    <div
                                        key={i}
                                        className={`payment-option ${selectedPayment === i ? 'selected' : ''}`}
                                        onClick={() => setSelectedPayment(i)}
                                    >
                                        <div className="logo-area">
                                            <div className="visa-logo">
                                                <img src={option.img} alt={option.label} />
                                            </div>
                                        </div>
                                        <div className={`radio-circle ${selectedPayment === i ? 'active' : ''}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="button">
                            <button
                                type="button"
                                className="main-btn"
                                onClick={handlePay}
                                disabled={selectedPayment === null}
                            >
                                انتقل الى الدفع
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}