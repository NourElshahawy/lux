import React from 'react';
import notFound from '../../assets/images/not-found.png';

export default function Notfound() {
    return <>
    <section>
        <img src={notFound} alt='notFound Image' className='w-50 d-flex justify-content-center align-items-center mx-auto' />
    </section>
    </>
}
