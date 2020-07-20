import React, { useState } from 'react';
import './My_Tweets.scss'
import Button from '../../Components/UI/Button/Button'
import TweetContainer from '../../Components/Tweet/TweetContainer'
import Preloader from '../../Uttils/Preloader/Preloader'

const My_Tweets = ({ user, avatar, fullName, newTweet, tweets }) => {

    const [textValue, setTextValue] = useState('');

    let onSubmitForm = (e) => {
        e.preventDefault()
        let tweet = e.target.tweet.value
        newTweet(tweet)
        setTextValue('')
    }

    return (
        <div className="main_content tweetPage">
            <h1>Home</h1>
            <div className="tweet_wrap">
                <div className="tweet_wrap_post">
                    <img src={avatar} alt="" />
                    <form onSubmit={onSubmitForm}>
                        <textarea
                            className="tweet_wrap_post_textarea"
                            name="tweet"
                            value={textValue}
                            onChange={e => setTextValue(e.target.value)}
                            placeholder="Whats happening?"
                        ></textarea>
                        <div className="tweet_wrap_panel">
                            <Button color="yellow">Tweet</Button>
                        </div>
                    </form>
                </div>

            </div>
            <div className="line"></div>
            {tweets.length === 0 && <h3>You have 0 Tweets</h3>}
            {
                tweets
                    ? tweets.map(el => <TweetContainer
                        key={el._id}
                        id={el._id}
                        name={fullName}
                        text={el.tweet_text}
                        date={el.tweet_date}
                        ava={avatar}
                    />)
                    : <Preloader />
            }
        </div>
    );
}

export default My_Tweets;