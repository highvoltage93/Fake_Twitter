import React from 'react';
import './InfoContent.scss'
import { NavLink } from 'react-router-dom';
import Button from '../../Components/UI/Button/Button'

const InfoContent = React.memo(({ id, authUser, users_content, unfollow, follow, user_profile, user }) => {
    return (
        <div className="info">

            <div className="info_gallery">
                <div className="info_gallery_block">
                    {
                        user_profile
                            ? user_profile.tweets.map(el => {
                                if (el.tweet_img) {
                                    return <span key={el._id} className="info_gallery_block_img">
                                        <img src={el.tweet_img} alt="" />
                                    </span>
                                } 
                            })
                            : user.tweets.map(el => {
                                if (el.tweet_img) {
                                    return <span key={el._id} className="info_gallery_block_img">
                                        <img src={el.tweet_img} alt="" />
                                    </span>
                                }
                            })
                    }
                   
                </div>
            </div>


            <h1>Who to follow</h1>
            {
                users_content?.map(el => <UserItem
                    avatar={el.avatar}
                    _id={el._id}
                    key={el._id}
                    fullName={el.fullName}
                    email={el.email}
                    follow={follow}
                    unfollow={unfollow}
                    authUser={authUser}
                />)
            }

        </div>
    );
})

export default InfoContent;


export const UserItem = (props) => {
    return (
        <NavLink key={props._id} to={`/profile/${props._id}`} className="info_user">
            <img src={props.avatar} alt="" />
            <div>
                <span>{props.fullName}</span>
                <p>{props.email}</p>
            </div>
            {
                props.authUser.following.includes(props._id)
                    ? <Button onClick={() => props.unfollow(props._id)} color="blue">Unfollow</Button>
                    : <Button onClick={() => props.follow(props._id)} color="yellow">Folow</Button>
            }
        </NavLink>
    )
}