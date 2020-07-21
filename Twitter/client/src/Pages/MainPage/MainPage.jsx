import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import TweetContainer from '../../Components/Tweet/TweetContainer';
import { format } from 'date-fns'
import Preloader from '../../Uttils/Preloader/Preloader';


const MainPage = ({ user, tweets, user_profile,isLoading, ...props }) => {
    if (!user_profile) return <Preloader/>
    if (!isLoading) return <Preloader/>
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
                    <NavLink to="/">Tweets</NavLink>
                    <NavLink to="app/profile">Media</NavLink>
                    <NavLink to="app/profile">Likes</NavLink>
                </div>
                <div className="main_content_tweets">
                    {
                        user_profile.tweets
                            ? user_profile.tweets.map(el => <TweetContainer
                                key={el._id}
                                id={el._id}
                                name={user.fullName}
                                text={el.tweet_text}
                                date={el.tweet_date}
                                ava={user.avatar}
                                likes={el.likes}
                                pinned={el.pinned}
                            />)
                            : <h1>Sorry 0 Tweets</h1>
                    }
                </div>
            </div>
            <div className="main_dop"></div>

        </div>
    );
}

export default MainPage;