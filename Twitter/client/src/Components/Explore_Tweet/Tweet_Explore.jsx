import React from 'react';
import './Tweet_Explore.scss'

const TweetExplore = ({text, ava, name, time, key}) => {
    return (
        <div className="tweetExplore" key={key}>
            <div className="tweetExplore_top">
                <img src={ava} alt="" />
                <span>{name}</span>
                <span className="tweetExplore_top_time">{time}</span>
            </div>
            <div className="tweetExplore_bot">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default TweetExplore;