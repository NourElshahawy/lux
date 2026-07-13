// SuccessPopup.jsx
import React from 'react';

export default function SuccessPopup({ onClose }) {
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.5)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', zIndex: 9999
        }}>
            <div style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '3px',
                background: 'linear-gradient(45deg, #846937, #A28245)',
                width: '360px',
            }}>
                <div style={{
                    background: '#fff',
                    borderRadius: '14px',
                    padding: '40px 30px',
                    textAlign: 'center',
                }}>
                    <div style={{
                        width: '70px', height: '70px', borderRadius: '50%',
                        background: 'linear-gradient(45deg, #846937, #A28245)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 20px',
                    }}>
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 style={{
                        background: 'linear-gradient(45deg, #846937, #A28245)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        fontSize: '20px', fontWeight: '700', marginBottom: '8px'
                    }}>
                        تم تسجيل اعلانك بنجاح
                    </h3>
                    <button onClick={onClose} style={{
                        marginTop: '24px',
                        padding: '10px 40px',
                        border: 'none', borderRadius: '8px', cursor: 'pointer',
                        background: 'linear-gradient(45deg, #846937, #A28245)',
                        color: '#fff', fontSize: '16px', fontWeight: '600',
                    }}>
                        حسناً
                    </button>
                </div>
            </div>
        </div>
    );
}