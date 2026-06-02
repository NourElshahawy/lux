import React, { useEffect } from 'react';
import HeroSec from '../../HeroSec/HeroSec';
import AdsCategories from '../../AdsCategories/AdsCategories';
import LastAds from '../../LastAds/LastAds';
import AboutSec from '../../AboutSec/AboutSec';
import PoosterSec from '../../PoosterSec/PoosterSec';
import FaqsSec from '../../FaqsSec/FaqsSec';
import { useLocation } from 'react-router-dom';

export default function HomePage() {

    const location = useLocation();

    useEffect(() => {
        const id = location.hash.replace('#', '');

        if (id) {
            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [location]);

    return <>

        
        <HeroSec />
        <AdsCategories />
        <LastAds />
        <AboutSec />
        <PoosterSec />
        <FaqsSec />

    </>
}
