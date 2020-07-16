import React from 'react';
import './My_Tweets.scss'
import Button from '../../Components/UI/Button/Button'
import Tweet from '../../Components/Tweet/Tweet'

const My_Tweets = () => {
    return (
        <div className="main_content tweetPage">
            <h1>Home</h1>
            <div className="tweet_wrap">
                <div className="tweet_wrap_post">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/19/8d/35/ba/villages-nature-paris.jpg" alt="" />
                    <div>
                        <textarea
                            className="tweet_wrap_post_textarea"
                            name="tweet"
                            placeholder="Whats happening?"
                        ></textarea>
                    </div>
                </div>
                <div className="tweet_wrap_panel">
                    <Button color="yellow">Tweet</Button>
                </div>
            </div>
            <div className="line"></div>
            <Tweet
                name="Rob Gronkowski"
                text='Its first tweet'
                tweet_img="https://i.insider.com/5a77dce785cdd41d008b4f89?width=1100&format=jpeg&auto=webp"
                date={new Date(Date.now()).toLocaleString()}
                ava="https://media-cdn.tripadvisor.com/media/photo-s/19/8d/35/ba/villages-nature-paris.jpg"
            />
        </div>
    );
}

export default My_Tweets;