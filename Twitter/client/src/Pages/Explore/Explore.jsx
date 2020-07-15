import React from 'react';
import './Explore.scss'
import TweetExplore from '../../Components/Explore_Tweet/Tweet_Explore';
import Explore_User from '../../Components/Explore_User/Explore_User';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';

const Explore = (props) => {

    let new_tweet = [
        {
            id: Math.random(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            ava: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg',
            name: 'Rob Gronkowski',
            time: '3 minutes ago'
        },
        {
            id: Math.random(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            ava: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg',
            name: 'Rob Gronkowski',
            time: '3 minutes ago'
        },
        {
            id: Math.random(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            ava: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg',
            name: 'Rob Gronkowski',
            time: '3 minutes ago'
        },
        {
            id: Math.random(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            ava: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg',
            name: 'Rob Gronkowski',
            time: '3 minutes ago'
        },
        {
            id: Math.random(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            ava: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg',
            name: 'Rob Gronkowski',
            time: '3 minutes ago'
        },
        {
            id: Math.random(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            ava: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg',
            name: 'Rob Gronkowski',
            time: '3 minutes ago'
        }
    ]

    let new_tweets = new_tweet.map(el => {
        return <TweetExplore
            key={el.id}
            ava={el.ava}
            text={el.text}
            time={el.time}
            name={el.name}
        />
    })

    let new_user = [
        {
            id: Math.random(),
            name: 'Rob Gronkowski',
            avatar: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg'
        },
        {
            id: Math.random(),
            name: 'Rob Gronkowski',
            avatar: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg'
        },
        {
            id: Math.random(),
            name: 'Rob Gronkowski',
            avatar: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg'
        },
        {
            id: Math.random(),
            name: 'Rob Gronkowski',
            avatar: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg'
        },
        {
            id: Math.random(),
            name: 'Rob Gronkowski',
            avatar: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg'
        },
        {
            id: Math.random(),
            name: 'Rob Gronkowski',
            avatar: 'https://sportshub.cbsistatic.com/i/r/2019/11/19/9a9d05ff-9908-404e-ab09-25df195f4553/thumbnail/1200x675/2da474441d63bea20110d03d84928936/gronk.jpg'
        }
    ]
    let new_users = new_user.map(el => {
        return <Explore_User
            avatar={el.avatar}
            key={el.id}
            id={el.id}
            name={el.name}
        />
    })


    return (
        <div className="explore">
            <div className="explore_left">
                <h1>Last Tweets:</h1>
                <div className="explore_wrap">
                    {new_tweets}
                </div>
                <h1>New Users:</h1>
                <div className="explore_wrap">
                    {new_users}
                </div>
                <h1>Most Popularity:</h1>
                <div className="explore_wrap">
                    {new_tweets}
                </div>
            </div>
            <div className="explore_right">
                <img src="https://abs.twimg.com/sticky/illustrations/twitter_login_sidebar_illustration.png" alt="" />
                <h1>Find out what's happening in the world right now.</h1>
                <form className="explore_right_form">
                    <Input
                        placeholder="Email"
                        type="email"
                        require={true}
                        name="email"
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        require={true}
                        max={12}
                        min={2}
                        name="name"
                    />

                    <Button color="blue">Log In</Button>
                </form>
            </div>

        </div>
    );
}

export default Explore;