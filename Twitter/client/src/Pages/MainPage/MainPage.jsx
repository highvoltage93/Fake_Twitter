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
import Modal from '../../Components/Modal/Modal';
import UploadFile from '../../Components/UploadFile/UploadFile';


const MainPage = React.memo(({ follow, follow_disable, unfollow, user, tweets, authID, user_profile, modal_handler, isLoading, ...props }) => {

    if (!user_profile || !isLoading) return <Preloader />

    let btnFollow = user.following.includes(user_profile._id)
        ? <Button disable={follow_disable ? true : false} color="blue" onClick={() => unfollow(user_profile._id)}>Unfollow</Button>
        : <Button disable={follow_disable ? true : false} color="yellow" onClick={() => follow(user_profile._id)}>Follow</Button>

    return (
        <div className="main">
            <div className="main_content">
                <div className="main_top">
                    <h1>{user_profile.fullName}</h1>
                    <p>{user_profile.tweets && user_profile.tweets.length}Tweets</p>
                </div>
                <img className="main_poster" src={user_profile.poster} />
                <div className="main_info">
                    <img className="main_info_avatar" src={user_profile.avatar} alt="" />
                    {authID != user_profile._id ? btnFollow : <Button onClick={modal_handler} color="yellow">Set ava</Button>}
                </div>
                <Modal>
                    <UploadFile />
                </Modal>
                <div className="main_data">
                    <h2>{user_profile.fullName}</h2>
                    <p className="main_data_email">{user_profile.email}</p>
                    <p className="main_data_status">{user_profile.status}</p>
                    <p className="main_data_joined"><FontAwesomeIcon icon={faCalendar} />Joined {format(Date.parse(user_profile.joined), 'MMMM yyyy')}</p>
                    <span className="main_data_location"><FontAwesomeIcon icon={faLocationArrow} />{user_profile.location}</span>
                    <div className="main_data_fol">
                        <NavLink to={`/${user_profile._id}/`}><span>{user_profile.following.length}</span>Following</NavLink>
                        <NavLink to={`/${user_profile._id}/`}><span>{user_profile.followers.length}</span>Followers</NavLink>
                    </div>
                </div>
                <div className="main_panel">
                    <NavLink exact to={`/profile/${user_profile._id}/`}>Tweets</NavLink>
                    <NavLink to="app/profile">Media</NavLink>
                    <NavLink to={`/profile/${user_profile._id}/likes`}>Likes</NavLink>
                </div>
                <div className="main_content_tweets">
                    {<Route exact path="/profile/:profileID?/" render={() => {
                        return user_profile.tweets
                            ? user_profile.tweets.sort((a, b) => {
                                if (a.pinned > b.pinned) {
                                    return -1
                                }
                                if (a.pinned < b.pinned) {
                                    return 1;
                                }
                                return -1;
                            }).map(el => <TweetContainer
                                key={el._id}
                                id={el._id}
                                tweet_author={el.tweet_author}
                                name={user_profile.fullName}
                                text={el.tweet_text}
                                date={el.tweet_date}
                                tweet_img={el.tweet_img}
                                ava={user_profile.avatar}
                                likes={el.likes}
                                pinned={el.pinned}
                                authorID={user_profile._id}
                                authID={authID}
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
})

export default MainPage;

// 732 msScripting
// 48 msRendering


// 396 msScripting
// 113 msRendering
