import React, { useState, useRef } from "react";
import uploadImg from "../../../assets/images/upload-img.svg";
import priceIcon from "../../../assets/images/price-icon.svg";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "./SuccessPopup";

export default function FormSuppliesAd() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [isAuction, setIsAuction] = useState(false);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const fileInputRef = useRef(null);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    city_id: "",
    price: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    const newErrors = {};
    if (!formData.title) newErrors.title = "اسم الإعلان مطلوب";
    if (!formData.city_id) newErrors.city_id = "الموقع مطلوب";
    if (!isAuction && !formData.price) newErrors.price = "السعر مطلوب";
    if (!formData.description) newErrors.description = "الوصف مطلوب";
    if (mediaFiles.length === 0)
      newErrors.images = "يجب إضافة صورة واحدة على الأقل";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const body = new FormData();
      body.append("title", formData.title);
      body.append("city_id", formData.city_id);
      body.append("price", formData.price);
      body.append("description", formData.description);
      body.append("is_price_negotiable", isAuction ? "1" : "0");
      mediaFiles.forEach((file) => body.append("images[]", file));

      const res = await api.post("/provider/ads/supply", body);

      if (res.data.status) {
        setShowPopup(true);
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleFileChange = (e) => {
    const newFiles = [...e.target.files];
    setMediaFiles((prev) => [...prev, ...newFiles]);
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeFile = (index) => {
    setMediaFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
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
                  <h3>اعلان مستلزمات</h3>
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
                    <div
                      className="upload-img-input"
                      onClick={() => fileInputRef.current.click()}
                    >
                      {previews.length > 0 ? (
                        <div className="previews-grid">
                          {previews.map((url, i) => (
                            <div
                              key={i}
                              style={{
                                position: "relative",
                                display: "inline-block",
                              }}
                            >
                              <img
                                src={url}
                                alt={`preview-${i}`}
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  objectFit: "cover",
                                  margin: "4px",
                                }}
                              />
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFile(i);
                                }}
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  right: 0,
                                  background: "red",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "50%",
                                  width: "20px",
                                  height: "20px",
                                  cursor: "pointer",
                                }}
                              >
                                ×
                              </button>
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
                    {mediaFiles.length > 0 && (
                      <p className="hint">{mediaFiles.length} ملف تم اختياره</p>
                    )}
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
                        <input
                          type="text"
                          id="name"
                          value={formData.title}
                          onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                          }
                        />
                        {errors.title && (
                          <span style={{ color: "red", fontSize: "13px" }}>
                            {errors.title}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="select-group">
                        <label htmlFor="site">الموقع</label>
                        <div className="select-box">
                          <select
                            id="site"
                            value={formData.city_id}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                city_id: e.target.value,
                              })
                            }
                          >
                            <option value="" disabled>
                              اختر المدينة
                            </option>
                            <option value="1">الرياض</option>
                            <option value="2">جدة</option>
                            <option value="3">مكة</option>
                          </select>
                          <i className="fa-solid fa-caret-down arrow"></i>
                        </div>
                        {errors.city_id && (
                          <span style={{ color: "red", fontSize: "13px" }}>
                            {errors.city_id}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 2 - Description */}
                <div className="box-form">
                  <div className="col-md-12">
                    <div className="input-group">
                      <label htmlFor="messageInput">الوصف</label>
                      <textarea
                        id="messageInput"
                        className="form-control"
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                      ></textarea>
                      {errors.description && (
                        <span style={{ color: "red", fontSize: "13px" }}>
                          {errors.description}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Box 3 - Price */}
                <div className="box-form">
                  <div className="col-md-12">
                    <div className="input-group">
                      <label htmlFor="price">السعر</label>
                      <div className="input-box">
                        <input
                          type="tel"
                          id="price"
                          disabled={isAuction}
                          value={formData.price}
                          onChange={(e) =>
                            setFormData({ ...formData, price: e.target.value })
                          }
                        />
                        {errors.price && (
                          <span style={{ color: "red", fontSize: "13px" }}>
                            {errors.price}
                          </span>
                        )}
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
                      <label
                        className="form-check-label"
                        htmlFor="switchCheckDefault"
                      >
                        على الرسوم
                      </label>
                    </div>
                  </div>
                </div>

                {/* Box 4 - Account Details */}
                {/* <h3 className="deatails-account">تفاصيل الحساب</h3>
                                <div className="box-form">
                                    <div className="input-group">
                                        <label htmlFor="username">اسم المستخدم</label>
                                        <input type="text" id="username" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="phone">رقم الجوال</label>
                                        <input type="tel" id="phone" />
                                    </div>
                                </div> */}

                <button type="submit" className="main-btn w-100 mt-4">
                  ارسل الاعلان للمراجعة
                </button>
              </div>
            </div>
          </form>
          {showPopup && (
            <SuccessPopup
              onClose={() => {
                setShowPopup(false);
                navigate("/");
              }}
            />
          )}
        </div>
      </section>
    </main>
  );
}
