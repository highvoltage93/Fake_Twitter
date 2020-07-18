import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import Tweet from '../../Components/Tweet/Tweet';


const MainPage = ({ user }) => {
    if (!user) return <h1>Loading...</h1>
    return (
        <div className="main">
            <div className="main_content">
                <div className="main_top">
                    <h1>{user.fullName}</h1>
                    <p>0Tweets</p>
                </div>
                <img className="main_poster" src={user.poster} />
                <div className="main_info">
                    <img className="main_info_avatar" src={user.avatar} alt="" />
                </div>
                <div className="main_data">
                    <h2>{user.fullName}</h2>
                    <p className="main_data_email">{user.email}</p>
                    <p className="main_data_status">{user.status}</p>
                    <p className="main_data_joined"><FontAwesomeIcon icon={faCalendar} />{user.joined}</p>
                    <span className="main_data_location"><FontAwesomeIcon icon={faLocationArrow} />{user.location}</span>
                    <div className="main_data_fol">
                        <NavLink to="/"><span>88</span>Following</NavLink>
                        <NavLink to="/"><span>20</span>Followers</NavLink>
                    </div>
                </div>
                <div className="main_panel">
                    <NavLink to="/app/profile">Tweets</NavLink>
                    <NavLink to="app/profile">Media</NavLink>
                    <NavLink to="app/profile">Likes</NavLink>
                </div>
                <div className="main_content_tweets">
                    <Tweet
                        name={user.fullName}
                        text='Its first tweet'
                        tweet_img="https://i.insider.com/5a77dce785cdd41d008b4f89?width=1100&format=jpeg&auto=webp"
                        date={new Date(Date.now()).toLocaleString()}
                        ava={user.avatar}
                    />
                </div>
            </div>
            <div className="main_dop"></div>

        </div>
    );
}

export default MainPage;