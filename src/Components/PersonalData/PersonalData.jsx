import React, { useRef, useState } from 'react';
import personalDataImg from '../../assets/images/personalDataImg.jpg';



export default function PersonalData() {

    // Upload Image-Profile
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(personalDataImg);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };






    return <>

        <section>
            <div className="form-profile">
                <form id="form">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="image-profile" onClick={handleImageClick}>
                                <figure>
                                    <img src={preview} alt='' />
                                    <span className="iconCamera">
                                        <i className="fa-solid fa-camera" />
                                    </span>
                                </figure>
                                <input type="file" accept="image/*" hidden ref={fileInputRef} onChange={handleImageChange} />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label htmlFor="name">الاسم</label>
                                        <input type="text" placeholder="محمود احمد" id="name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <label htmlFor="phone">رقم الجوال</label>
                                        <input type="tel" placeholder="0101234567" id="phone" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="select-group">
                                        <label htmlFor="city">العنوان</label>
                                        <div className="select-box">
                                            <select defaultValue="">
                                                <option value="" disabled>العنوان</option>
                                                <option>الرياض</option>
                                                <option>جدة</option>
                                                <option>مكة</option>
                                            </select>
                                            <i className="fa-solid fa-caret-down arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btnGroub">
                                <button type="submit" className="main-btn">
                                    حفظ التعديلات
                                </button>
                                <button className="main-btn cancel">
                                    الغاء
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>


    </>
}
