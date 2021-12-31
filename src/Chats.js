import React from 'react';
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Gina Carano"
                message="Hey cutie did you fall from heaven?"
                timestamp="23 seconds ago"
                profilePic="https://d.newsweek.com/en/full/1618477/gina-carano.jpg?w=790&f=771d739fcb1663910750fcbe42b9d3de"
            />
            <Chat
                name="Monica Torres"
                message="Are you up for a game of SKATE?"
                timestamp="2 minutes ago"
                profilePic="https://www.californiastreet.net/wp-content/uploads/2019/10/monica-torres-face.jpg"
            />
        </div>
    );
}

export default Chats
