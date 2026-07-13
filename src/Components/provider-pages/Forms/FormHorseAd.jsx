import { useState, useRef } from "react";
import uploadImg from "../../../assets/images/upload-img.svg";
import priceIcon from "../../../assets/images/price-icon.svg";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "./SuccessPopup";

export default function FormHorseAd() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [isAuction, setIsAuction] = useState(false);
  const [mediaFiles, setMediaFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [previews, setPreviews] = useState([]);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    city_id: "",
    height_cm: "",
    age: "",
    breed: "",
    mother_breed: "",
    father_breed: "",
    price: "",
    description: "",
  });

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
      const body = new FormData();
      body.append("title", formData.title);
      body.append("city_id", formData.city_id);
      body.append("height_cm", formData.height_cm);
      body.append("age", formData.age);
      body.append("breed", formData.breed);
      body.append("mother_breed", formData.mother_breed);
      body.append("father_breed", formData.father_breed);
      body.append("price", formData.price);
      body.append("description", formData.description);
      body.append("is_price_negotiable", isAuction ? "1" : "0");
      mediaFiles.forEach((file) => body.append("images[]", file));

      const res = await api.post("/provider/ads/horse-sale", body);

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
                  <h3>اعلان بيع خيول</h3>
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
                    {errors.images && (
                      <span style={{ color: "red", fontSize: "13px" }}>
                        {errors.images}
                      </span>
                    )}

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
                <div className="box-form one">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="input-group">
                        <label htmlFor="name">اسم الاعلان</label>
                        <input
                          type="text"
                          id="name"
                          value={formData.title}
                          onChange={(e) => {
                            setFormData({ ...formData, title: e.target.value });
                             // 👈
                          }}
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
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                city_id: e.target.value,
                              });
                              setErrors({ ...errors, city_id: "" });
                            }}
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
                    <div className="col-md-6">
                      <div className="input-group">
                        <label htmlFor="height">الطول</label>
                        <div className="input-box">
                          <input
                            type="tel"
                            id="height"
                            value={formData.height_cm}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                height_cm: e.target.value,
                              });

                              
                            }}
                          />
                          {errors.height_cm && <span style={{ color: 'red', fontSize: '13px' }}>{errors.height_cm}</span>}

                          <p className="unit">سم</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group">
                        <label htmlFor="age">العمر</label>
                        <input
                          type="tel"
                          id="age"
                          value={formData.age}
                          onChange={(e) => {
                            setFormData({ ...formData, age: e.target.value });
                            
                          }}
                        />
                        {errors.age && <span style={{ color: 'red', fontSize: '13px' }}>{errors.age}</span>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-group">
                        <label htmlFor="theGroup">الفصيلة</label>
                        <input
                          type="text"
                          id="theGroup"
                          value={formData.breed}
                          onChange={(e) => {
                            
                            setFormData({ ...formData, breed: e.target.value });
                          }}
                        />
                        {errors.breed && <span style={{ color: 'red', fontSize: '13px' }}>{errors.breed}</span>}

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group">
                        <label htmlFor="type-father">فصيلة الاب</label>
                        <input
                          type="text"
                          id="type-father"
                          value={formData.father_breed}
                          onChange={(e) => {
                            
                            setFormData({
                              ...formData,
                              father_breed: e.target.value,
                            });
                          }}
                        />
                        {errors.father_breed && <span style={{ color: 'red', fontSize: '13px' }}>{errors.father_breed}</span>}

                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-group">
                        <label htmlFor="type-mother">فصيلة الام</label>
                        <input
                          type="text"
                          id="type-mother"
                          value={formData.mother_breed}
                          onChange={(e) => {
                            
                            setFormData({
                              ...formData,
                              mother_breed: e.target.value,
                            });
                          }}
                        />
                        {errors.mother_breed && <span style={{ color: 'red', fontSize: '13px' }}>{errors.mother_breed}</span>}

                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-group">
                        <label>الوصف</label>
                        <textarea
                          id="messageInput"
                          className="form-control"
                          value={formData.description}
                          onChange={(e) => {
                            
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            });
                          }}
                        ></textarea>
                        {errors.description && <span style={{ color: 'red', fontSize: '13px' }}>{errors.description}</span>}

                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 2 - Price */}
                <div className="box-form">
                  <div className="input-group">
                    <label htmlFor="price">سعر الخيل</label>
                    <div className="input-box">
                      <input
                        type="tel"
                        id="price"
                        disabled={isAuction}
                        value={formData.price}
                        onChange={(e) => {
                          setFormData({ ...formData, price: e.target.value });
                          
                        }}
                      />
                      {errors.price && (
                        <span style={{ color: "red", fontSize: "13px" }}>
                          {errors.price}
                        </span>
                      )}

                      <img src={priceIcon} alt="" />
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
                        على السوم
                      </label>
                    </div>
                  </div>
                </div>

                {/* Box 3 - Account Details */}
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
