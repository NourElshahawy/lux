import React from 'react';
import { Link } from 'react-router-dom';
import poosterGoogle from '../../assets/images/pooster-google-play.webp';
import poosterApp from '../../assets/images/pooster-app-store.webp';
import poster from '../../assets/images/poster.webp';



export default function PoosterSec() {
    return <>
        <section className="pooster mr-sectionv" id="pooster">
            <div className="main-container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 ">
                        <div className="pooster-title">
                            <div className="pooster-text">
                                <h3>قم بتحميل التطبيق</h3>
                                <p> التطبيق متوفر الآن علي جميع منصات <br />التحميل جوجل بلاي و آب استور !</p>
                            </div>
                            <div className="download-app">
                                <Link to="#">
                                    <img src={poosterGoogle} alt='' />
                                </Link>
                                <Link to="#">
                                    <img src={poosterApp} alt='' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="pooster-img">
                            <img src={poster} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}
