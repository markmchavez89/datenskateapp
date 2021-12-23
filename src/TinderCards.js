import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'emma watson',
            url: "https://www.plasticsurgerypeople.com/wp-content/uploads/2018/03/emma-watson-featured.jpg"
        },
        {
            name: 'selena gomez',
            url: "https://celebrityinsider.org/wp-content/uploads/2020/06/Selena-Gomez-Rare-Beauty.jpg"
        },
        {
            name: 'beyonce',
            url: "https://i.ytimg.com/vi/qxRxHpaR--Y/hqdefault.jpg"
        },
        {
            name: 'danzig',
            url: "https://external-preview.redd.it/eJHQW4G0ntsWpe_p2oRY49YHNaY9o0bP0DKGes3D_EI.png?auto=webp&s=e7953fac03b7bcd684e99a601071652808708949"
        },
        {
            name: 'joe biden',
            url: "https://foodandeverythingelsetoo.com/wp-content/uploads/2019/04/Screenshot-2019-04-01-20.17.27.png"
        },
        {
            name: 'donald trump',
            url: "https://uploads.disquscdn.com/images/6c73a5b9ede57b92a1547f4b842f0d1fad564d565271fc03719633158eb3291e.jpg"
        },
        {
            name: 'sasha banks',
            url: "https://wrestlingnews.co/wp-content/uploads/2019/04/Sasha-Banks-3.jpg"
        },
        {
            name: 'anna jay',
            url: "https://www.ringsidenews.com/wp-content/uploads/2020/10/anna-jay.jpg"
        },
        {
            name: 'abadon',
            url: "https://www.ringsidenews.com/wp-content/uploads/2020/08/abadon-942.jpg"
        },
        {
            name: 'lizzo',
            url: "https://i.ytimg.com/vi/BPfFoG5DRE4/maxresdefault.jpg"
        },
        {
            name: 'mya',
            url: "https://cdn.images.express.co.uk/img/dynamic/79/590x/487213_1.jpg"
        },
        {
            name: 'ellen',
            url: "https://media2.s-nbcnews.com/j/newscms/2018_50/1394343/ellen-degeneres-today-main-181212-02_a992640575d6a56cf26428a22934796b.1200;630;7;70;2.jpg"

        },
        {
            name: 'gina carano',
            url: "https://d.newsweek.com/en/full/1618477/gina-carano.jpg?w=790&f=771d739fcb1663910750fcbe42b9d3de"
        },
        {
            name: 'skinny kitty',
            url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/149097999_4253747297987959_3657246541990775910_n.jpg?_nc_cat=102&ccb=3&_nc_sid=730e14&_nc_ohc=TkTsHgo1ZDsAX_E-H0P&_nc_ht=scontent-sjc3-1.xx&oh=18d97a645a3bbe622c764fbc9c518f52&oe=604BAA8A"
        },
        {
            name: 'leticia bufoni',
            url: "https://img.redbull.com/images/c_crop,w_6530,h_4353,y_0,x_0/c_scale,w_1500/f_auto,q_auto/redbullcom/2017/10/23/9ff44f58-323c-4a03-9e4f-bb2deda21ef5/leticia-bufoni-pablo-vaz.jpg"
        },
        {
            name: 'elissa steamer',
            url: "http://3.bp.blogspot.com/_mbNLj_I0b-A/S-p-8VUtUAI/AAAAAAAAAFI/BrhRHtP6JUY/s1600/Elissa+Steamer.jpg"
        },
        {
            name: 'lizzie armanto',
            url: "https://64.media.tumblr.com/ab5da4641ee5787ccbfee384feb80abd/tumblr_mpid2j9nYg1sucv2qo1_500.jpg"
        },
        {
            name: 'monica torres',
            url: "https://www.californiastreet.net/wp-content/uploads/2019/10/monica-torres-face.jpg"
        }
    ]);
    return (
        <div>
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})`}}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCard>
            
            ))}
            </div>
            <h2 className="oops">Error!Error!No Matches. Error!User Too Ugly(Error#138)</h2>
            <h2 className="oops">Error!Error!Please Return To The Zoo(Error#289)</h2>
        </div>
    )
}

export default TinderCards
