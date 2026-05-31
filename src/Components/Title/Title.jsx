import React from 'react';

export default function Title({value, className}) {
    return <>
        <div className={`ads-categories-header ${className}`}>
            <span />
            <h2>
                {value}
            </h2>
        </div>
    </>
}
