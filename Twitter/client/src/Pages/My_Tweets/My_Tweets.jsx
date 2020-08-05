import React, { useState, useCallback } from 'react';
import './My_Tweets.scss'
import Button from '../../Components/UI/Button/Button'
import TweetContainer from '../../Components/Tweet/TweetContainer'
import Preloader from '../../Uttils/Preloader/Preloader'

const My_Tweets = React.memo(({ user, avatar, fullName, newTweet, tweets }) => {

    const [textValue, setTextValue] = useState('');
    const [picture, setPicture] = useState();
    const [info, setInfo] = useState({});

    let onSubmitForm = (e) => {
        e.preventDefault()
        let tweet = {
            tweet_text: e.target.tweet.value,
            tweet_img: info
        }
        newTweet(tweet)
        setTextValue('')
        setPicture()
        setInfo('')
    }

    let pictureHandler = (e) => {
        setPicture(e.target.files[0])
        const fileReader = new FileReader()
        fileReader.onload = () => setPicture(fileReader.result)
        fileReader.readAsDataURL(e.target.files[0])
        setInfo(e.target.files[0])
    }

    return (
        <div className="main_content tweetPage">
            <h1>Home</h1>
            <div className="tweet_wrap">
                <div className="tweet_wrap_post">
                    <img className="ava" src={avatar} alt="" />
                    <form onSubmit={onSubmitForm}>
                        <textarea
                            className="tweet_wrap_post_textarea"
                            name="tweet"
                            value={textValue}
                            onChange={e => setTextValue(e.target.value)}
                            placeholder="Whats happening?"
                        ></textarea>
                        {picture && <img className="picture" src={picture} alt="" />}
                        <div className="tweet_wrap_panel">
                            <div className="tweet_wrap_panel_icons">
                                <label htmlFor="picture" className="label">
                                    <input onChange={pictureHandler} type="file" name="picture" id="picture" />
                                    <svg viewBox="0 0 24 24" ><g><path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path><circle cx="8.868" cy="8.309" r="1.542"></circle></g></svg>
                                </label>
                            </div>
                            <div><Button disable={textValue ? false : true} color="yellow">Tweet</Button></div>
                        </div>
                    </form>
                </div>

            </div>
            <div className="line"></div>
            {tweets.length === 0 && <h3>You have 0 Tweets</h3>}
            {
                tweets
                    ? tweets.sort((a, b) => {
                        if (a.tweet_date > b.tweet_date) {
                            return -1
                        }
                        if (a.tweet_date < b.tweet_date) {
                            return 1;
                        }
                        return 1;
                    }).map(el => <TweetContainer
                        key={el._id}
                        id={el._id}
                        name={el.tweet_author_fullName}
                        text={el.tweet_text}
                        date={el.tweet_date}
                        ava={el.tweet_author_avatar}
                        tweet_img={el.tweet_img}
                        likes={el.likes}
                        pinned={el.pinned}
                        authorID={user._id}
                        tweet_author={el.tweet_author}
                    />)
                    : <Preloader />
            }
        </div>
    );
})

export default My_Tweets;

// tweets.sort((a, b) => {
//     if (a.pinned > b.pinned) {
//         return -1
//     }
//     if (a.pinned < b.pinned) {
//         return 1;
//     }
//     return 1;
// }).

// sort((a, b) => {
//     if (a.tweet_date > b.tweet_date) {
//         return 1
//     }
//     if (a.tweet_date < b.tweet_date) {
//         return -1;
//     }
//     return 1;
// }).