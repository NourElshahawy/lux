import React from 'react';
import { Link } from 'react-router-dom';

export default function MainBtn({value, href, className, img, src, alt }) {
    return <>

        <Link to={href} className={`main-btn ${className}`}>
            {img && <img src={img} alt={alt} />}
            {value}
        </Link>
    </>
}
