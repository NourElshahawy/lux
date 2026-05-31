import React from 'react';

export default function HeaderTitle({value, valuePage}) {
    return <>
        <div className="head-title">
            <div className="content">
                <h2><span>{value}</span> &gt;&gt; {valuePage}</h2>
            </div>
        </div>

    </>
}
