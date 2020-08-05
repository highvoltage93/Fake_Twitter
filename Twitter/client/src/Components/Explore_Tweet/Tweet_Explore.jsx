import React from 'react';
import './Tweet_Explore.scss'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TweetExplore = ({text, ava, name, time, key, tweet_img}) => {
    return (
        <div className="tweetExplore" key={key}>
            <div className="tweetExplore_top">
                <img src={ava} alt="" />
                <span>{name}</span>
                <span className="tweetExplore_top_time">{formatDistanceToNow(Date.parse(time), { includeSeconds: true, addSuffix: true })}</span>
            </div>
            <div className="tweetExplore_bot">
                <p>{text}</p>
                <img src={tweet_img} alt=""/>
            </div>
        </div>
    );
}

export default TweetExplore;