import React from 'react';
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Ellen"
                message="U turned me straight Mark!"
                timestamp="40 seconds ago"
                profilePic="https://media2.s-nbcnews.com/j/newscms/2018_50/1394343/ellen-degeneres-today-main-181212-02_a992640575d6a56cf26428a22934796b.1200;630;7;70;2.jpg"
            />
            <Chat
                name="Gina Carano"
                message="Hey cutie did you fall from heaven?"
                timestamp="23 seconds ago"
                profilePic="https://d.newsweek.com/en/full/1618477/gina-carano.jpg?w=790&f=771d739fcb1663910750fcbe42b9d3de"
            />
            <Chat
                name="Lizzo"
                message="Ya I have crabs. But I eat them"
                timestamp="17 seconds ago"
                profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lizzo-1574702817.png?resize=768:*"
            />
            <Chat
                name="Joe Biden"
                message="Lemme get a lil sniffy sniff of that hair tho"
                timestamp="2 minutes ago"
                profilePic="https://foodandeverythingelsetoo.com/wp-content/uploads/2019/04/Screenshot-2019-04-01-20.17.27.png"
            />
        </div>
    );
}

export default Chats
