import React, { useState, useRef } from 'react';
import uploadImg from '../../../assets/images/upload-img.svg';
import priceIcon from '../../../assets/images/price-icon.svg';

export default function FormTransferAd() {
    const [isAuction, setIsAuction] = useState(false);
    const [insurance, setInsurance] = useState('yes');
    const [transportRange, setTransportRange] = useState('');
    const [mediaFiles, setMediaFiles] = useState([]);
    const fileInputRef = useRef(null);
    const [previews, setPreviews] = useState([]);

    // لما بيختار "داخل وخارج النطاق" يظهر حقلين للسعر
    const showSplitPrices = transportRange === 'داخل وخارج النطاق';

    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا هتبعت الـ API
    };

    
        const handleFileChange = (e) => {
            const newFiles = [...e.target.files];
            const updatedFiles = [...mediaFiles, ...newFiles];
            setMediaFiles(updatedFiles);
            const newPreviews = newFiles.map(file => URL.createObjectURL(file));
            setPreviews(prev => [...prev, ...newPreviews]);
        };
    
        const removeFile = (index) => {
            setMediaFiles(prev => prev.filter((_, i) => i !== index));
            setPreviews(prev => prev.filter((_, i) => i !== index));
        };


    return (
        <main className="provider-main">
            <section className="form-create-horse-adSec">
                <div className="main-container">
                    <form onSubmit={handleSubmit}>
                        <div className="row">

                            {/* Upload */}
                            <div className="col-lg-4">
                                <div className="upload-img-box">
                                    <h3>اعلان نقل</h3>
                                    <div className="upload-form-box">
                                                                            <p className="title">الصور</p>
                                                                            <input
                                                                                type="file"
                                                                                ref={fileInputRef}
                                                                                multiple
                                                                                accept="image/*,video/*"
                                                                                hidden
                                                                                onChange={handleFileChange}
                                                                            />
                                                                            <div className="upload-img-input" onClick={() => fileInputRef.current.click()}>
                                                                                {previews.length > 0 ? (
                                                                                    <div className="previews-grid">
                                                                                        {previews.map((url, i) => (
                                                                                            <div key={i} style={{ position: 'relative', display: 'inline-block' }}>
                                                                                                <img src={url} alt={`preview-${i}`} style={{ width: '80px', height: '80px', objectFit: 'cover', margin: '4px' }} />
                                                                                                <button
                                                                                                    type="button"
                                                                                                    onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                                                                                                    style={{ position: 'absolute', top: 0, right: 0, background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer' }}
                                                                                                >×</button>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="content">
                                                                                        <div className="image">
                                                                                            <img src={uploadImg} alt="" />
                                                                                        </div>
                                                                                        <p>اضف صور للاعلان</p>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                            {mediaFiles.length > 0 && <p className="hint">{mediaFiles.length} ملف تم اختياره</p>}
                                                                            <p className="hint">يرجى اضافة صور وفيديو للاعلان</p>
                                                                        </div>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="col-lg-8">

                                {/* Box 1 - Basic Info */}
                                <div className="box-form one">
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <label htmlFor="name">اسم الاعلان</label>
                                                <input type="text" id="name" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="select-group">
                                                <label htmlFor="site">الموقع</label>
                                                <div className="select-box">
                                                    <select id="site" defaultValue="">
                                                        <option value="" disabled>اختر المدينة</option>
                                                        <option>الرياض</option>
                                                        <option>جدة</option>
                                                        <option>مكة</option>
                                                    </select>
                                                    <i className="fa-solid fa-caret-down arrow"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Box 2 - Transfer Details */}
                                <div className="box-form">
                                    <div className="col-md-12">
                                        <div className="select-group">
                                            <label htmlFor="transport-range">نطاق النقل</label>
                                            <div className="select-box">
                                                <select
                                                    id="transport-range"
                                                    value={transportRange}
                                                    onChange={(e) => setTransportRange(e.target.value)}
                                                >
                                                    <option value="" disabled>نطاق النقل</option>
                                                    <option>داخل النطاق</option>
                                                    <option>خارج النطاق</option>
                                                    <option>داخل وخارج النطاق</option>
                                                </select>
                                                <i className="fa-solid fa-caret-down arrow"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* سعر عادي */}
                                    {!showSplitPrices && (
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <label htmlFor="price">سعر النقل</label>
                                                <div className="input-box">
                                                    <input type="tel" id="price" disabled={isAuction} />
                                                    <img src={priceIcon} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* سعر داخل وخارج النطاق */}
                                    {showSplitPrices && (
                                        <>
                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <label htmlFor="inside-price">سعر النقل داخل النطاق</label>
                                                    <div className="input-box">
                                                        <input type="tel" id="inside-price" />
                                                        <img src={priceIcon} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <label htmlFor="outside-price">سعر النقل خارج النطاق</label>
                                                    <div className="input-box">
                                                        <input type="tel" id="outside-price" />
                                                        <img src={priceIcon} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="top-bar-status">
                                        <div className="checkbox-container">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="switchCheckDefault"
                                                    checked={isAuction}
                                                    onChange={() => setIsAuction(!isAuction)}
                                                />
                                            </div>
                                            <label className="form-check-label" htmlFor="switchCheckDefault">
                                                على السوم
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Box 3 - Insurance */}
                                <div className="box-form">
                                    <div className="col-md-12">
                                        <div className="insurance-check">
                                            <p className="title">هل يوجد تأمين على النقل؟</p>
                                            <div className="check-wrapper">
                                                <div className="form-check custom-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="insurance"
                                                        id="yes"
                                                        value="yes"
                                                        checked={insurance === 'yes'}
                                                        onChange={() => setInsurance('yes')}
                                                    />
                                                    <label className="form-check-label" htmlFor="yes">نعم</label>
                                                </div>
                                                <div className="form-check custom-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="insurance"
                                                        id="no"
                                                        value="no"
                                                        checked={insurance === 'no'}
                                                        onChange={() => setInsurance('no')}
                                                    />
                                                    <label className="form-check-label" htmlFor="no">لا</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Box 4 - Account Details */}
                                <h3 className="deatails-account">تفاصيل الحساب</h3>
                                <div className="box-form">
                                    <div className="input-group">
                                        <label htmlFor="username">اسم المستخدم</label>
                                        <input type="text" id="username" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="phone">رقم الجوال</label>
                                        <input type="tel" id="phone" />
                                    </div>
                                </div>

                                <button type="submit" className="main-btn w-100 mt-4">
                                    ارسل الاعلان للمراجعة
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}