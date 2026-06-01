import React from 'react';
import { Link } from 'react-router-dom';

import transferIcon from '../../../assets/images/transfer-icon.svg';
import trainingIcon from '../../../assets/images/training-icon.svg';
import sellingIcon from '../../../assets/images/selling-horses-icon.svg';
import shelterIcon from '../../../assets/images/shelter-icon.svg';
import suppliesIcon from '../../../assets/images/supplies-icon.svg';

const adTypes = [
    { icon: transferIcon, label: 'نقل', path: '/create-ad/transfer' },
    { icon: trainingIcon, label: 'تدريب', path: '/create-ad/training' },
    { icon: sellingIcon, label: 'بيع خيول', path: '/create-ad/horses' },
    { icon: shelterIcon, label: 'ايواء', path: '/create-ad/shelter' },
    { icon: suppliesIcon, label: 'مستلزمات', path: '/create-ad/supplies' },
];

export default function CreateAdvertisement() {
    return (
        <main className="provider-main">
            <section>
                <div className="ad-type-container">
                    <div className="ad-type-content-wrapper">
                        <h2>حدد نوع الاعلان</h2>
                        <div className="ad-type-list">
                            {adTypes.map((type, i) => (
                                <Link to={type.path} key={i}>
                                    <div className="ad-type-card">
                                        <div className="ad-type-content">
                                            <div className="icon">
                                                <img src={type.icon} alt="" />
                                            </div>
                                            <p>{type.label}</p>
                                        </div>
                                        <i className="fa-solid fa-angle-left arrow" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="commission-info">
                            <p>علما بان بعد بيع الاعلان يقوم البائع بسداد العمولة بناء على النسبة المحددة من قبل التطبيق</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}