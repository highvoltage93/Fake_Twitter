import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import Tweet from '../../Components/Tweet/Tweet';


const MainPage = () => {
    return (
        <div className="main">
            <div className="main_content">
                <div className="main_top">
                    <h1>Rob Gronkowski</h1>
                    <p>16 Tweets</p>
                </div>
                <img className="main_poster" src="https://media-cdn.tripadvisor.com/media/photo-s/19/8d/35/ba/villages-nature-paris.jpg" />
                <div className="main_info">
                    <img className="main_info_avatar" src="https://media-cdn.tripadvisor.com/media/photo-s/19/8d/35/ba/villages-nature-paris.jpg" alt=""/>
                </div>
                <div className="main_data">
                    <h2>Rob Gronkowski</h2>
                    <p className="main_data_email">gronk@gmail.com</p>
                    <p className="main_data_status">Design and development agency that promotes innovation through elevated websites, applications, and eCommerce solutions</p>
                    <p className="main_data_joined"><FontAwesomeIcon icon={faCalendar} />November 2019</p>
                    <span className="main_data_location"><FontAwesomeIcon icon={faLocationArrow} />Germany</span>
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
                        name="Rob Gronkowski"
                        text='Its first tweet'
                        tweet_img="https://i.insider.com/5a77dce785cdd41d008b4f89?width=1100&format=jpeg&auto=webp"
                        date={new Date(Date.now()).toLocaleString()}
                        ava="https://media-cdn.tripadvisor.com/media/photo-s/19/8d/35/ba/villages-nature-paris.jpg"
                   />
                </div>
            </div>
            <div className="main_dop"></div>

        </div>
    );
}

export default MainPage;