import { useState, useRef } from 'react';
import card from '../../../assets/images/Bank.svg';
import card1 from '../../../assets/images/Credit-Card.svg';
import uploadIcon from '../../../assets/images/Images.svg'; // ← import الصورة

const cardsData = [
    { img: card, label: 'اسم المستفيد', title: 'شركة Lux Horse' },
    { img: card, label: 'اسم البنك', title: 'مصرف الراجحى' },
    { img: card1, label: 'رقم الايبان', title: 'SA118000052860801022323' },
    { img: card, label: 'رقم الحساب', title: '52860801022323' },
];

export default function TransferFund() {
    const [preview, setPreview] = useState(null); // ← state للصورة
    const fileInputRef = useRef(null);             // ← ref بدل onclick

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا هتبعت الـ API
    };
    

    return (
        <main>
            <section className="section">
                <div className="main-container">
                    <div className="transfer-fund">
                        <div className="transfer-fund-card">
                            <h2>بيانات التحويل</h2>
                            <div className="row g-4">
                                {cardsData.map((item, i) => (
                                    <div key={i} className="col-md-6 col-sm-12">
                                        <div className="content-card">
                                            <div className="card-img">
                                                <img src={item.img} loading="lazy" alt="" />
                                            </div>
                                            <div className="item-text">
                                                <span>{item.label}</span>
                                                <p className="card-title">{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2>بيانات الحساب</h2>
                            <form onSubmit={handleSubmit}> {/* ← onSubmit بدل action */}
                                <div className="input-group">
                                    <label htmlFor="ownerName">اسم صاحب الحساب</label>
                                    <input type="text" id="ownerName" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="phone">رقم الجوال</label>
                                    <input type="tel" id="phone" /> {/* ← tel بدل number */}
                                </div>
                                <div className="input-group">
                                    <label>ارفق ايصال التحويل</label>
                                    <div
                                        className="image-upload-area"
                                        onClick={() => fileInputRef.current.click()} // ← ref بدل onclick
                                    >
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            accept="image/*"
                                            hidden
                                            onChange={handleImageChange} // ← onChange بدل onchange
                                        />
                                        {!preview ? (
                                            <div className="upload-placeholder">
                                                <img src={uploadIcon} alt="" />
                                                <span>اضف صورة التحويل</span>
                                            </div>
                                        ) : (
                                            <img src={preview} alt="preview" style={{ width: '100%' }} />
                                        )}
                                    </div>
                                </div>
                            </form>

                            <div className="button">
                                <button
                                    type="button"
                                    className="main-btn"
                                    onClick={handleSubmit} // ← button بدل a
                                >
                                    دفع العمولة 500 ريال
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}