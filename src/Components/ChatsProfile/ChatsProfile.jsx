import React, { useRef, useState } from 'react';
import personalDataImg from '../../assets/images/personalDataImg.jpg';

export default function ChatsProfile() {

    const chats = [
        {
            id: 1,
            img: personalDataImg,
            time: "10 صباحا",
            notification: 1,
            name: "محمود احمد",
            lastMessage: "هل الخيل متاح للبيع؟",
        },
        {
            id: 2,
            img: personalDataImg,
            time: "10 صباحا",
            notification: 1,
            name: "محمود احمد",
            lastMessage: "هل الخيل متاح للبيع؟",
        },
        {
            id: 3,
            img: personalDataImg,
            time: "10 صباحا",
            notification: 1,
            name: "محمود احمد",
            lastMessage: "هل الخيل متاح للبيع؟",
        },
        {
            id: 4,
            img: personalDataImg,
            time: "10 صباحا",
            notification: 0,
            name: "محمود احمد",
            lastMessage: "هل الخيل متاح للبيع؟",
        },
    ];

    const [selectedChat, setSelectedChat] = useState(null);

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "لوسمحت الخيل لسه متاح للبيع؟",
            time: "9:22 صباحا",
            type: "message",
        },
    ]);

    const messagesEndRef = useRef(null);

    //* إرسال الرسالة
    const sendMessage = () => {

        if (message.trim() === "") return;

        const now = new Date();

        const time = now.toLocaleTimeString("ar-EG", {
            hour: "2-digit",
            minute: "2-digit",
        });

        const newMessage = {
            id: Date.now(),
            text: message,
            time,
            type: "myMessage",
        };

        setMessages([...messages, newMessage]);

        setMessage("");

        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth",
            });
        }, 100);
    };

    //* Enter Send
    const handleKeyDown = (e) => {

        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }

    };

    return (
        <>

            <section className="chat-page">

                {/* المحادثات */}

                <div className={`chatsBox ${selectedChat ? "hide" : ""}`}>

                    <div className="input-search">

                        <input
                            type="search"
                            placeholder="ابحث فالمحادثات"
                        />

                        <i className="fa-solid fa-magnifying-glass iconSearch" />

                    </div>

                    <div className="chats">

                        {chats.map((chat) => (

                            <div
                                key={chat.id}
                                className="chat"
                                onClick={() => setSelectedChat(chat)}
                            >

                                <figure>

                                    <img
                                        src={chat.img}
                                        alt={chat.name}
                                    />

                                    <figcaption>

                                        <h4>{chat.name}</h4>

                                        <p>
                                            {chat.lastMessage}
                                        </p>

                                    </figcaption>

                                </figure>

                                <div className="box-chat">

                                    <span className="time">
                                        {chat.time}
                                    </span>

                                    {chat.notification > 0 && (
                                        <span className="notification">
                                            {chat.notification}
                                        </span>
                                    )}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* تفاصيل الشات */}

                <div className={`chat-deatails ${selectedChat ? "active" : ""}`}>

                    <div className="head">

                        <div className="user">

                            <figure>

                                <img
                                    src={selectedChat?.img}
                                    alt={selectedChat?.name}
                                />

                                <figcaption>
                                    {selectedChat?.name}
                                </figcaption>

                            </figure>

                        </div>

                        <button
                            id="backBtn"
                            onClick={() => setSelectedChat(null)}
                        >

                            <i className="fa-solid fa-backward" />

                        </button>

                    </div>

                    <div className="body">

                        <div className="messagesBox">

                            <span className="date">
                                اليوم
                            </span>

                            {messages.map((msg) => (

                                <div
                                    key={msg.id}
                                    className={msg.type}
                                >

                                    <p>{msg.text}</p>

                                    <span className="time">
                                        {msg.time}
                                    </span>

                                </div>

                            ))}

                            <div ref={messagesEndRef}></div>

                        </div>

                    </div>

                    <div className="inputSend">

                        <textarea
                            placeholder="اكتب رسالة"
                            className="form-control bg-body-tertiary"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />

                        <button
                            type="button"
                            onClick={sendMessage}
                        >

                            <i className="fa-solid fa-paper-plane" />

                        </button>

                    </div>

                </div>

            </section>

        </>
    );
}