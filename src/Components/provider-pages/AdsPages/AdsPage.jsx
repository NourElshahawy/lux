import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../../services/api";

import searchIcon from "../../../assets/images/search.svg";
import filterIcon from "../../../assets/images/filter.svg";
import rayalIcon from "../../../assets/images/Rayal 1.svg";
import eyeIcon from "../../../assets/images/eye.svg";
import tableImg from "../../../assets/images/table-img.png";
import HeaderTitle from "../../HeaderTitle/HeaderTitle";


export default function AdsPage() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const fetchAds = async (params = {}) => {
    try {
      setLoading(true);
      const res = await api.get("/provider/ads", { params });
      if (res.data.status) {
        setTableData(res.data.data);
      }
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadAds = async () => {
        try {
            setLoading(true);
            const res = await api.get("/provider/ads");
            console.log("All ads:", res.data);
            if (res.data.status) {
                setTableData(res.data.data);
            }
        } catch (error) {
            console.log(error.response?.data);
        } finally {
            setLoading(false);
        }
    };
    
    loadAds();
}, []);

  // لما يضغط تصفية النتائج
  const handleFilter = () => {
    const params = {};
    if (search) params.search = search;
    if (selectedTypes.length === 1) params.type = selectedTypes[0];
    if (selectedStatus.length === 1) params.status = selectedStatus[0];
    fetchAds(params);
    setFilterOpen(false);
  };

  // لما يضغط حذف التصفية
  const handleClearFilter = () => {
    setSelectedTypes([]);
    setSelectedStatus([]);
    setSearch("");
    fetchAds();
    setFilterOpen(false);
  };
  

  return (
    <>
      <HeaderTitle value="الصفحة الشخصية" valuePage="اعلاناتى " />
      {/* Table */}
      <section className="statistics-table section">
        <div className="main-container">
          <div className="head">
            <div className="left-part-form">
              <div className="search">
                <img src={searchIcon} alt="" />
                <input
                  type="text"
                  placeholder="ابحث عن اعلان"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="filter-table">
                <button
                  type="button"
                  className="main-btn"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  تصفيه
                  <img src={filterIcon} loading="lazy" alt="" />
                </button>
                {filterOpen && (
                  <div className="filter-container">
                    <label>نوع الاعلان</label>
                    <div className="filter-status">
                      {[
                        { value: "transport_ads", label: "نقل" },
                        { value: "supply_ads", label: "مستلزمات" },
                        { value: "training_ads", label: "تدريب" },
                        { value: "accommodation_ads", label: "ايواء" },
                        { value: "horse_sale_ads", label: "خيول" },
                      ].map((type, i) => (
                        <React.Fragment key={i}>
                          <input
                            className="input-filter"
                            type="checkbox"
                            id={`type-${i}`}
                            checked={selectedTypes.includes(type.value)}
                            onChange={(e) => {
                              if (e.target.checked)
                                setSelectedTypes([type.value]);
                              else setSelectedTypes([]);
                            }}
                          />
                          <label htmlFor={`type-${i}`}>{type.label}</label>
                        </React.Fragment>
                      ))}
                    </div>
                    <label>حالة الاعلان</label>
                    <div className="filter-status">
                      {[
                        { value: "pending", label: "قيد المراجعة" },
                        { value: "active", label: "نشط" },
                        { value: "stopped", label: "متوقف" },
                        { value: "rejected", label: "مرفوض" },
                      ].map((s, i) => (
                        <React.Fragment key={i}>
                          <input
                            className="input-filter"
                            type="checkbox"
                            id={s.value}
                            checked={selectedStatus.includes(s.value)}
                            onChange={(e) => {
                              if (e.target.checked)
                                setSelectedStatus([s.value]);
                              else setSelectedStatus([]);
                            }}
                          />
                          <label
                            htmlFor={s.value}
                            className={`status ${s.value}`}
                          >
                            {s.label}
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="filter-actions">
                      <button
                        type="button"
                        className="main-btn"
                        onClick={handleFilter}
                      >
                        تصفية النتائج
                      </button>
                      <button
                        type="button"
                        className="main-btn2"
                        onClick={handleClearFilter}
                      >
                        حذف التصفية
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <td>الصورة</td>
                  <td>اسم الاعلان</td>
                  <td>التصنيف</td>
                  <td>تاريخ النشر</td>
                  <td>السعر</td>
                  <td>نوع سعر</td>
                  <td>الحالة</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center" }}>
                      جاري التحميل...
                    </td>
                  </tr>
                ) : tableData.length === 0 ? (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center" }}>
                      لا توجد إعلانات
                    </td>
                  </tr>
                ) : (
                  tableData.map((item, i) => (
                    <tr key={i}>
                      <td className="ads-img">
                        <img
                          src={item.first_image || tableImg}
                          loading="lazy"
                          alt=""
                        />
                      </td>
                      <td>
                        <p>{item.title}</p>
                      </td>
                      <td>
                        <p>{item.type}</p>
                      </td>
                      <td>
                        <span>{item.created_at?.slice(0, 10)}</span>
                      </td>
                      <td className="price-td">
                        <p>
                          {item.price}{" "}
                          <img src={rayalIcon} loading="lazy" alt="" />
                        </p>
                      </td>
                      <td>
                        <p>
                          {item.is_price_negotiable ? "على الرسوم" : "سعر ثابت"}
                        </p>
                      </td>
                      <td>
                        <span className={`status ${item.status}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="show-icon">
                        <Link to={`/AdsDeatails/${item.id}`}>
                          <img src={eyeIcon} loading="lazy" alt="" />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
