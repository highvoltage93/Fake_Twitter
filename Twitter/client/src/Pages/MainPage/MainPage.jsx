import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './MainPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import TweetContainer from '../../Components/Tweet/TweetContainer';
import { format } from 'date-fns'
import Preloader from '../../Uttils/Preloader/Preloader';
import MainPageLikes from '../MainPageLikes/MainPageLikes';
import Button from '../../Components/UI/Button/Button'


const MainPage = ({ user, tweets, authID, user_profile, isLoading, ...props }) => {
    if (!user_profile || !isLoading) return <Preloader />
    return (
        <div className="main">
            <div className="main_content">
                <div className="main_top">
                    <h1>{user_profile.fullName}</h1>
                    <p>{user_profile.tweets.length}Tweets</p>
                </div>
                <img className="main_poster" src={user_profile.poster} />
                <div className="main_info">
                    <img className="main_info_avatar" src={user_profile.avatar} alt="" />
                    <Button onClick={() => props.modal_handler()} color="yellow">Set ava</Button>
                </div>
                <div className="main_data">
                    <h2>{user_profile.fullName}</h2>
                    <p className="main_data_email">{user_profile.email}</p>
                    <p className="main_data_status">{user_profile.status}</p>
                    <p className="main_data_joined"><FontAwesomeIcon icon={faCalendar} />Joined {format(Date.parse(user_profile.joined), 'MMMM yyyy')}</p>
                    <span className="main_data_location"><FontAwesomeIcon icon={faLocationArrow} />{user_profile.location}</span>
                    <div className="main_data_fol">
                        <NavLink to="/"><span>88</span>Following</NavLink>
                        <NavLink to="/"><span>20</span>Followers</NavLink>
                    </div>
                </div>
                <div className="main_panel">
                    <NavLink exact to={`/profile/${user_profile._id}/`}>Tweets</NavLink>
                    <NavLink to="app/profile">Media</NavLink>
                    <NavLink to={`/profile/${user_profile._id}/likes`}>Likes</NavLink>
                </div>
                <div className="main_content_tweets">
                    {<Route exact path="/profile/:profileID?/" render={() => {
                        return tweets
                            ? tweets.map(el => <TweetContainer
                                key={el._id}
                                id={el._id}
                                name={user_profile.fullName}
                                text={el.tweet_text}
                                date={el.tweet_date}
                                ava={user_profile.avatar}
                                likes={el.likes}
                                pinned={el.pinned}
                            />)
                            : <h1>Sorry 0 Tweets</h1>
                    }} />}
                    {<Route path="/profile/:profileID?/likes" component={() => <MainPageLikes
                        name={user_profile.fullName}
                        ava={user_profile.ava}
                        id={user_profile._id}
                        authID={authID}
                    />} />}
                </div>
            </div>
            <div className="main_dop"></div>

        </div>
    );
}

export default MainPage;