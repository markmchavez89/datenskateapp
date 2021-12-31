import React, { useState } from 'react';
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import Chats from "./Chats.js";
import Chat from "./Chat.js";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Monica Torres',
            image: "https://www.californiastreet.net/wp-content/uploads/2019/10/monica-torres-face.jpg",
            message: "Hey"
        },
        {
            name: 'Monica Torres',
            image: "https://www.californiastreet.net/wp-content/uploads/2019/10/monica-torres-face.jpg",
            message: "Are you up for a game of SKATE?"
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        
        setMessages([...messages, { message: input}]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">YOU MATCHED WITH MONICA TORRES ON 02/11/2021</p>
            {messages.map(message => (
                message.name ? (

                <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
                <form className="chatScreen__input">
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text" />
                    <button 
                    onClick={handleSend}
                    type="submit"
                    className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
    );
}

export default ChatScreen;
