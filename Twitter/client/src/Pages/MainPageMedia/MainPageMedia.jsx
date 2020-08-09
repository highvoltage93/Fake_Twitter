import React from 'react';
import { connect } from 'react-redux'
import TweetContainer from '../../Components/Tweet/TweetContainer';

const MainPageMedia = ({ user_profile }) => {

    return (
        <div className="media">
            {user_profile.tweets.map(el => {
                if (el.media_img === true) {
                    return <TweetContainer
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
                    />
                }
            })}



        </div>
    );
}

let mapStateToProps = state => {
    return {
        user_profile: state.users.user_profile,
    }
}

export default connect(mapStateToProps, {})(MainPageMedia)