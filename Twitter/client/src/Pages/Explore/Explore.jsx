import React from 'react';
import './Explore.scss'
import TweetExplore from '../../Components/Explore_Tweet/Tweet_Explore';
import Explore_User from '../../Components/Explore_User/Explore_User';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';

const Explore = ({ new_users, login,last_tweets }) => {
    console.log(last_tweets);
    let onSubmitForm = (e) => {
        e.preventDefault()
        let user = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        login(user)
    }




    let new_tweets = last_tweets.map(el => {
        return <TweetExplore
            key={el._id}
            ava={el.ava}
            text={el.tweet_text}
            time={el.tweet_date}
            name={el.name}
        />
    })

    let users = new_users.map(el => {
        return <Explore_User
            avatar={el.avatar}
            key={el._id}
            id={el._id}
            name={el.joined}
            name={el.fullName}
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
                    {users}
                </div>
                <h1>Most Popularity:</h1>
                <div className="explore_wrap">
                    {new_tweets}
                </div>
            </div>
            <div className="explore_right">
                <img src="https://abs.twimg.com/sticky/illustrations/twitter_login_sidebar_illustration.png" alt="" />
                <h1>Find out what's happening in the world right now.</h1>
                <form className="explore_right_form" onSubmit={onSubmitForm}>
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
                        name="password"
                    />

                    <Button color="blue">Log In</Button>
                </form>
            </div>

        </div>
    );
}

export default Explore;