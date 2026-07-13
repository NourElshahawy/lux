import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { Link } from "react-router-dom";
import lastAds from "../../assets/images/last-ads.png";
import saveIcon from "../../assets/images/save.svg";
import heightIcon from "../../assets/images/Height.svg";
import duotoneIcon from "../../assets/images/Duotone.svg";
import horseIcon from "../../assets/images/Horse.svg";

import LocationIcon from "../../assets/images/Location01.svg";
import chatDotsIcon from "../../assets/images/ChatDots.svg";
import ryalIcon from "../../assets/images/ryal.svg";
import personalDataImg from "../../assets/images/personalDataImg.jpg";
import endCall from "../../assets/images/EndCall.svg";
import brandWhatsapp from "../../assets/images/BrandWhatsapp.svg";
import star from "../../assets/images/star.svg";
import comment from "../../assets/images/Comment1.svg";
import send from "../../assets/images/Send.svg";
import adressIcon from "../../assets/images/adress.svg";
import Title from "../Title/Title";
import MainBtn from "../MainBtn/MainBtn";

export default function AdsDeatails() {
  const [mainImage, setMainImage] = useState(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [relatedAds, setRelatedAds] = useState([]);

  const { id } = useParams();
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const res = await api.get(`/provider/ads/${id}`);
        if (res.data.status) {
          setAd(res.data.data);
          setMainImage(res.data.data.details?.images?.[0]?.url);
        }
        const relatedRes = await api.get("/provider/ads");
        if (relatedRes.data.status) {
          setRelatedAds(
            relatedRes.data.data
              .filter((item) => item.id !== Number(id))
              .slice(0, 4),
          );
        }
      } catch (error) {
        console.log(error.response?.data);
      } finally {
        setLoading(false);
      }
    };
    fetchAd();
  }, [id]);

  const handleChangeImage = (url, index) => {
    setMainImage(url);
    setActiveIndex(index);
  };

  if (loading)
    return (
      <p style={{ textAlign: "center", padding: "40px" }}>جاري التحميل...</p>
    );
  if (!ad)
    return (
      <p style={{ textAlign: "center", padding: "40px" }}>الإعلان غير موجود</p>
    );

  const details = ad.details;
  const images = details?.images || [];

  // const cards = [
  //     {
  //         id: 1,
  //         img: lastAds,
  //         categoryName: "خيول",
  //         description: "خيل عربى اصيل",
  //         adress: "الرياض",
  //         price: "1000",
  //     },
  //     {
  //         id: 2,
  //         img: lastAds,
  //         categoryName: "خيول",
  //         description: "خيل عربى اصيل",
  //         adress: "الرياض",
  //         price: "1000",
  //     },
  //     {
  //         id: 3,
  //         img: lastAds,
  //         categoryName: "خيول",
  //         description: "خيل عربى اصيل",
  //         adress: "الرياض",
  //         price: "1000",
  //     },
  //     {
  //         id: 4,
  //         img: lastAds,
  //         categoryName: "خيول",
  //         description: "خيل عربى اصيل",
  //         adress: "الرياض",
  //         price: "1000",
  //     },
  // ];

  return (
    <>
      <HeaderTitle value="الاعلانات" valuePage="تفاصيل الاعلان" />

      <section className="section">
        <div className="main-container">
          <div className="page-grid row g-4">
            <div className="col-md-6">
              <div className="right-col">
                <div className="main-img">
                  <span className="save-ads">
                    <img src={saveIcon} alt="" />
                  </span>
                  <img
                    src={mainImage || lastAds}
                    alt="horse"
                    className="preview-image"
                  />
                </div>
                <div className="thumb-row">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`thumb ${activeIndex === index ? "active" : ""}`}
                      onClick={() => handleChangeImage(img.url, index)}
                    >
                      <img src={img.url} loading="lazy" alt="advertise-img" />
                    </div>
                  ))}
                </div>
                {ad.type === "horse_sale_ads" && (
                  <div className="details-box">
                    <div className="details-title">التفاصيل</div>
                    <div className="detail-row">
                      <span className="detail-label">
                        <img src={heightIcon} loading="lazy" alt="height-svg" />
                        الطول
                      </span>
                      <span className="detail-val">
                        {details?.height_cm} سم
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">
                        <img src={heightIcon} loading="lazy" alt="height-svg" />
                        العمر
                      </span>
                      <span className="detail-val">{details?.age} سنوات</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">
                        <img
                          src={duotoneIcon}
                          loading="lazy"
                          alt="Duotone-svg"
                        />
                        الفصيلة
                      </span>
                      <span className="detail-val">{details?.breed}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">
                        <img src={horseIcon} loading="lazy" alt="Horse-svg" />
                        الأب
                      </span>
                      <span className="detail-val">
                        {details?.father_breed}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">
                        <img src={horseIcon} loading="lazy" alt="Horse-svg" />
                        الأم
                      </span>
                      <span className="detail-val">
                        {details?.mother_breed}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="left-col">
                <div className="top-bar">
                  <div className="top-bar-top">
                    <div className="title-row">
                      <p>{ad.type}</p>
                      <h2 className="horse-title">{ad.title}</h2>
                      <div className="hourse-location">
                        <img
                          src={LocationIcon}
                          loading="lazy"
                          alt="location-svg"
                        />
                        {details?.city}
                      </div>
                    </div>
                    <div className="price">
                      <p>
                        <span>
                          {details?.price} <img src={ryalIcon} alt="" />
                        </span>
                        <span>
                          {details?.is_price_negotiable === "price_negotiable"
                            ? "على الرسوم"
                            : "سعر ثابت"}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="top-bar-bottom">
                    <div className="contact-name">
                        <div className="avatar">
                            <img src={user?.avatar || personalDataImg} loading="lazy" alt="person-image" />
                        </div>
                        <p>{user?.name}</p>
                    </div>
                    <div className="contact-icons">
                      <div className="icon-btn">
                        <a href={`tel:${user?.phone}`}>
                            <img src={endCall} alt="" />
                        </a>
                      </div>
                      <div className="icon-btn">
                        <a href={`https://wa.me/${user?.phone}`} target="_blank" rel="noreferrer">
                        <img src={brandWhatsapp} alt="" />
                    </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="middel-bar">
                  <div className="section-title">الوصف</div>
                  <p className="desc">{details?.description}</p>
                </div>
                <div className="bottom-bar">
                  <div className="section-title">التعليقات</div>
                  <div className="review-item">
                    <div className="contact-name">
                      <div className="avatar">
                        <img
                          src={personalDataImg}
                          loading="lazy"
                          alt="person-image"
                        />
                      </div>
                      <div className="comment-text">
                        <p>محمود على</p>
                        <p>هل السعر قابل للتفاوض؟</p>
                      </div>
                    </div>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} className="active" alt="" />
                      <img src={star} className="active" alt="" />
                      <img src={star} className="active" alt="" />
                    </div>
                  </div>
                  <div className="review-item">
                    <div className="contact-name">
                      <div className="avatar">
                        <img
                          src={personalDataImg}
                          loading="lazy"
                          alt="person-image"
                        />
                      </div>
                      <div className="comment-text">
                        <p>محمود على</p>
                        <p>هل السعر قابل للتفاوض؟</p>
                      </div>
                    </div>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} className="active" alt="" />
                      <img src={star} className="active" alt="" />
                      <img src={star} className="active" alt="" />
                      <img src={star} className="active" alt="" />
                    </div>
                  </div>
                  <div className="comment-box">
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                    <div className="comment-box-input-container">
                      <div className="avatar">
                        <img
                          src={personalDataImg}
                          loading="lazy"
                          alt="person-image"
                        />
                      </div>
                      <div className="comment-box-input">
                        <input type="text" placeholder="اكتب تعليقك" />
                        <img src={comment} alt="" />
                      </div>
                      <div className="icon-btn">
                        <img src={send} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="related-ads">
            <Title value="اعلانات ذات صلة" className="justify-content-start" />

            <div className="last-ads-list">
              <div className="row">
                {relatedAds.map((card) => (
                  <div key={card.id} className="col-lg-3 col-md-6 col-12">
                    <div className="last-ads-item">
                      <Link to={`/AdsDeatails/${card.id}`} className="save-ads">
                        <img src={saveIcon} alt="" />
                      </Link>
                      <div className="last-ads-item-img">
                        <img src={card.first_image || lastAds} alt="" />
                      </div>
                      <div className="last-ads-item-text">
                        <p className="category-name">{card.type}</p>
                        <div className="description">
                          <h3>{card.title}</h3>
                          <p>
                            <img src={adressIcon} alt="" />
                            {card.details?.city}
                          </p>
                        </div>
                        <div className="price">
                          <MainBtn value="تواصل مع البائع" img={chatDotsIcon} />
                          <p>
                            <span>
                              {card.price} <img src={ryalIcon} alt="" />
                            </span>
                            <span>
                              {card.details?.is_price_negotiable ===
                              "price_negotiable"
                                ? "على الرسوم"
                                : "سعر ثابت"
                                 }
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
