import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// استبدل الـ imports دي بالمسارات الصح عندك
import statistics1 from '../../../assets/images/statistics1.svg';
import statistics2 from '../../../assets/images/statistics2.svg';
import statistics3 from '../../../assets/images/statistics3.svg';
import statistics4 from '../../../assets/images/statistics4.svg';
import statistics5 from '../../../assets/images/statistics5.svg';
import statistics6 from '../../../assets/images/statistics6.svg';
import searchIcon from '../../../assets/images/search.svg';
import filterIcon from '../../../assets/images/filter.svg';
import rayalIcon from '../../../assets/images/Rayal 1.svg';
import eyeIcon from '../../../assets/images/eye.svg';
import tableImg from '../../../assets/images/table-img.png';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';


const statsData = [
    { img: statistics1, count: 10, label: 'الاعلانات النشطة', className: 'active' },
    { img: statistics2, count: 10, label: 'قيد المراجعة', className: 'pending' },
    { img: statistics3, count: 10, label: 'الاعلانات المرفوضة', className: 'cancelled' },
    { img: statistics4, count: 10, label: 'اجمالى الطلبات', className: 'orders' },
    { img: statistics5, count: 10, label: 'اجمالى المبيعات', className: 'sales' },
    { img: statistics6, count: 10, label: 'اجمالى العمولة', className: 'commission' },
];

const tableData = [
    { img: tableImg, name: 'خيل الماني اصيل', category: 'مستلزمات', date: '2026-05-20', price: 500, priceType: 'سعر ثابت', status: 'active', statusLabel: 'نشط' },
    { img: tableImg, name: 'خيل عربى اصيل', category: 'مستلزمات', date: '2026-05-20', price: 500, priceType: 'سعر ثابت', status: 'pending', statusLabel: 'قيد المراجعة' },
    { img: tableImg, name: 'خيل مصري اصيل', category: 'مستلزمات', date: '2026-05-20', price: 500, priceType: 'على السوم', status: 'cancelled', statusLabel: 'مرفوض' },
    { img: tableImg, name: 'خيل بحراوي اصيل', category: 'مستلزمات', date: '2026-05-20', price: 500, priceType: 'سعر ثابت', status: 'stopped', statusLabel: 'متوقف' },
    { img: tableImg, name: 'خيل ليبي اصيل', category: 'مستلزمات', date: '2026-05-20', price: 500, priceType: 'على السوم', status: 'sales', statusLabel: 'مباع' },
];

export default function StatisticsPage() {
    const [filterOpen, setFilterOpen] = useState(false);
    const [search, setSearch] = useState('');

    const filteredData = tableData.filter(item =>
        item.name.includes(search)
    );

    return (
        <>
        <HeaderTitle value="الصفحة الشخصية" valuePage="احصائياتى " />
            {/* Statistics Cards */}
            <section className="statistics">
                <div className="main-container">
                    <div className="row row-gap-3">
                        {statsData.map((stat, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                                <div className={`statistics-item ${stat.className}`}>
                                    <div className="item-img">
                                        <img src={stat.img} loading="lazy" alt="" />
                                    </div>
                                    <div className="item-text">
                                        <span>{stat.count}</span>
                                        <p>{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Table */}
            <section className="statistics-table section">
                <div className="main-container">
                    <div className="head">
                        <h3>احدث الاعلانات</h3>
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
                                            {['خيول', 'مستلزمات', 'نقل', 'ايواء', 'تدريب'].map((type, i) => (
                                                <React.Fragment key={i}>
                                                    <input className="input-filter" type="checkbox" id={`type-${i}`} />
                                                    <label htmlFor={`type-${i}`}>{type}</label>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        <label>حالة الاعلان</label>
                                        <div className="filter-status">
                                            {[
                                                { value: 'pending', label: 'قيد المراجعة' },
                                                { value: 'active', label: 'نشط' },
                                                { value: 'stopped', label: 'متوقف' },
                                                { value: 'cancelled', label: 'مرفوض' },
                                                { value: 'sales', label: 'مباع' },
                                            ].map((s, i) => (
                                                <React.Fragment key={i}>
                                                    <input className="input-filter" type="checkbox" id={s.value} />
                                                    <label htmlFor={s.value} className={`status ${s.value}`}>{s.label}</label>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        <div className="filter-actions">
                                            <button type="button" className="main-btn">تصفية النتائج</button>
                                            <button type="button" className="main-btn2" onClick={() => setFilterOpen(false)}>حذف التصفية</button>
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
                                {filteredData.map((item, i) => (
                                    <tr key={i}>
                                        <td className="ads-img">
                                            <img src={item.img} loading="lazy" alt="" />
                                        </td>
                                        <td><p>{item.name}</p></td>
                                        <td><p>{item.category}</p></td>
                                        <td><span>{item.date}</span></td>
                                        <td className="price-td">
                                            <p>{item.price} <img src={rayalIcon} loading="lazy" alt="" /></p>
                                        </td>
                                        <td className="status active"><p>{item.priceType}</p></td>
                                        <td>
                                            <span className={`status ${item.status}`}>{item.statusLabel}</span>
                                        </td>
                                        <td className="show-icon">
                                            <Link to="/AdsDeatails">
                                                <img src={eyeIcon} loading="lazy" alt="" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}