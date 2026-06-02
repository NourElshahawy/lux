import React, { useState, useRef } from 'react';
import uploadImg from '../../../assets/images/upload-img.svg';
import priceIcon from '../../../assets/images/price-icon.svg';

export default function FormTrainingAd() {
    const [isAuction, setIsAuction] = useState(false);
    const [mediaFiles, setMediaFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const fileInputRef = useRef(null);

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

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className="provider-main">
            <section className="form-create-horse-adSec">
                <div className="main-container">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="upload-img-box">
                                    <h3>اعلان تدريب</h3>
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

                            <div className="col-lg-8">
                                <div className="box-form one">
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <label htmlFor="name">اسم الاعلان</label>
                                                <input type="text" id="name" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="map-group">
                                                <label>الموقع</label>
                                                <div className="map-box">
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.603917503!2d31.188423714863864!3d30.05955809879508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c3d5c5c0ed%3A0x6f3f2a7d4d9f4f7a!2sCairo!5e0!3m2!1sen!2seg!4v1716200000000!5m2!1sen!2seg"
                                                        width="100%" height="200" style={{ border: 0 }}
                                                        allowFullScreen="" loading="lazy" title="map"
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-form">
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <label htmlFor="messageInput">الوصف</label>
                                            <textarea id="messageInput" className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="select-group">
                                                <label htmlFor="trainingType">نوع التدريب</label>
                                                <div className="select-box">
                                                    <select id="trainingType" defaultValue="">
                                                        <option value="" disabled>نوع التدريب</option>
                                                        <option>تدريب شخصى</option>
                                                        <option>تدريب خيول</option>
                                                    </select>
                                                    <i className="fa-solid fa-caret-down arrow"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="select-group">
                                                <label>مدة التدريب</label>
                                                <div className="period-box-input">
                                                    <div className="input-group">
                                                        <div className="input-box">
                                                            <input type="tel" id="duration" />
                                                        </div>
                                                    </div>
                                                    <div className="select-box">
                                                        <select defaultValue="يوم">
                                                            <option>يوم</option>
                                                            <option>أسبوع</option>
                                                            <option>شهر</option>
                                                            <option>سنة</option>
                                                        </select>
                                                        <i className="fa-solid fa-caret-down arrow"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <label htmlFor="price">سعر التدريب</label>
                                            <div className="input-box">
                                                <input type="tel" id="price" disabled={isAuction} />
                                                <img src={priceIcon} alt="" />
                                            </div>
                                        </div>
                                    </div>
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
                                            <label className="form-check-label" htmlFor="switchCheckDefault">على السوم</label>
                                        </div>
                                    </div>
                                </div>
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