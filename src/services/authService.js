import api from './api';

// إرسال OTP
export const sendOTP = async (phone, type, action = "login", name = "") => {
    try {
        const body = {
            phone,
            type,
            action,
            device_id: crypto.randomUUID(),
            token_firebase: "token_here"
        };

        if (action === "register") {
            body.name = name;
        }

        console.log("Body being sent:", body);
        console.log("Body being sent:", JSON.stringify(body));

        const res = await api.post('/request-otp', body);
        return res.data;

    } catch (error) {
        console.log("FULL ERROR RESPONSE:");
        console.log(error.response?.data);
        throw error;
    }
};

// تسجيل الدخول بالـ OTP
export const verifyOTP = async (phone, otp, type) => {
    const res = await api.post('/login', {
        phone,
        code: otp,
        type
    });

    return res.data;
};

export const registerUser = async (name, phone, address, code, type) => {
        try {
        const res = await api.post('/register', {
            name,
            phone,
            address,
            code,
            type,
            device_id: crypto.randomUUID(),
            token_firebase: "token_here"
        });
        return res.data;
    } catch (error) {
        console.log("Register ERROR:", error.response?.data); 
        throw error;
    }
};