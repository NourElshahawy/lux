import React, { useState, useRef } from "react";
import uploadImg from "../../../assets/images/upload-img.svg";
import priceIcon from "../../../assets/images/price-icon.svg";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "./SuccessPopup";

export default function FormTransferAd() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [isAuction, setIsAuction] = useState(false);
  const [insurance, setInsurance] = useState("yes");
  const [transportRange, setTransportRange] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [previews, setPreviews] = useState([]);
    const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    city_id: "",
    price_within_scope: "",
    price_outside_scope: "",
  });

  // لما بيختار "داخل وخارج النطاق" يظهر حقلين للسعر
  const showSplitPrices = transportRange === "داخل وخارج النطاق";
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("User type:", user?.type);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
      const newErrors = {};
      if (!formData.title) newErrors.title = "اسم الإعلان مطلوب";
      if (!formData.city_id) newErrors.city_id = "الموقع مطلوب";
      if (!formData.height_cm) newErrors.height_cm = "الطول مطلوب";
      if (!formData.age) newErrors.age = "العمر مطلوب";
      if (!formData.breed) newErrors.breed = "الفصيلة مطلوبة";
      if (!formData.father_breed) newErrors.father_breed = "فصيلة الاب مطلوبة";
      if (!formData.mother_breed) newErrors.mother_breed = "فصيلة الام مطلوبة";
      if (!formData.description) newErrors.description = "الوصف مطلوب";
      if (!isAuction && !formData.price) newErrors.price = "السعر مطلوب";
      if (mediaFiles.length === 0)
        newErrors.images = "يجب إضافة صورة واحدة على الأقل";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      // تحديد transport_scope
      let transport_scope = "";
      if (transportRange === "داخل النطاق") transport_scope = "within_scope";
      else if (transportRange === "خارج النطاق")
        transport_scope = "outside_scope";
      else if (transportRange === "داخل وخارج النطاق")
        transport_scope = "within_scope,outside_scope";

      const body = new FormData();
      body.append("title", formData.title);
      body.append("city_id", formData.city_id);
      body.append("transport_scope", transport_scope);
      body.append("price_within_scope", formData.price_within_scope);
      body.append("price_outside_scope", formData.price_outside_scope);
      body.append("is_price_negotiable", isAuction ? "1" : "0");
      body.append("includes_insurance", insurance === "yes" ? "1" : "0");
      mediaFiles.forEach((file) => body.append("images[]", file));

      const res = await api.post("/provider/ads/transport", body, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.status) {
        setShowPopup(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleFileChange = (e) => {
    const newFiles = [...e.target.files];
    const updatedFiles = [...mediaFiles, ...newFiles];
    setMediaFiles(updatedFiles);
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
                    {errors.images && <span style={{ color: 'red', fontSize: '13px' }}>{errors.images}</span>}

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
                        {errors.title && <span style={{ color: 'red', fontSize: '13px' }}>{errors.title}</span>}
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
                        {errors.city_id && <span style={{ color: 'red', fontSize: '13px' }}>{errors.city_id}</span>}
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
                          <option value="" disabled>
                            نطاق النقل
                          </option>
                          <option>داخل النطاق</option>
                          <option>خارج النطاق</option>
                          <option>داخل وخارج النطاق</option>
                        </select>
                        <i className="fa-solid fa-caret-down arrow"></i>
                      </div>
                      {errors.transport_range && <span style={{ color: 'red', fontSize: '13px' }}>{errors.transport_range}</span>}
                    </div>
                  </div>

                  {/* سعر عادي */}
                  {!showSplitPrices && (
                    <div className="col-md-12">
                      <div className="input-group">
                        <label htmlFor="price">سعر النقل</label>
                        <div className="input-box">
                          <input
                            type="tel"
                            id="price"
                            value={formData.price_within_scope}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                price_within_scope: e.target.value,
                              })
                            }
                            disabled={isAuction}
                          />
                            {errors.price && <span style={{ color: 'red', fontSize: '13px' }}>{errors.price}</span>}
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
                          <label htmlFor="inside-price">
                            سعر النقل داخل النطاق
                          </label>
                          <div className="input-box">
                            <input
                              type="tel"
                              id="inside-price"
                              value={formData.price_within_scope}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  price_within_scope: e.target.value,
                                })
                              }
                            />
                            {errors.price_within_scope && <span style={{ color: 'red', fontSize: '13px' }}>{errors.price_within_scope}</span>}
                            <img src={priceIcon} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-group">
                          <label htmlFor="outside-price">
                            سعر النقل خارج النطاق
                          </label>
                          <div className="input-box">
                            <input
                              type="tel"
                              id="outside-price"
                              value={formData.price_outside_scope}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  price_outside_scope: e.target.value,
                                })
                              }
                            />
                            {errors.price_outside_scope && <span style={{ color: 'red', fontSize: '13px' }}>{errors.price_outside_scope}</span>}
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
                      <label
                        className="form-check-label"
                        htmlFor="switchCheckDefault"
                      >
                        على الرسوم
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
                            checked={insurance === "yes"}
                            onChange={() => setInsurance("yes")}
                          />
                          <label className="form-check-label" htmlFor="yes">
                            نعم
                          </label>
                        </div>
                        <div className="form-check custom-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="insurance"
                            id="no"
                            value="no"
                            checked={insurance === "no"}
                            onChange={() => setInsurance("no")}
                          />
                          <label className="form-check-label" htmlFor="no">
                            لا
                          </label>
                        </div>
                      </div>
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
