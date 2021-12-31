import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'beyonce',
            url: "https://i.ytimg.com/vi/qxRxHpaR--Y/hqdefault.jpg"
        },
        {
            name: 'danzig',
            url: "https://external-preview.redd.it/eJHQW4G0ntsWpe_p2oRY49YHNaY9o0bP0DKGes3D_EI.png?auto=webp&s=e7953fac03b7bcd684e99a601071652808708949"
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
            name: 'gina carano',
            url: "https://d.newsweek.com/en/full/1618477/gina-carano.jpg?w=790&f=771d739fcb1663910750fcbe42b9d3de"
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
        </div>
    )
}

export default TinderCards
