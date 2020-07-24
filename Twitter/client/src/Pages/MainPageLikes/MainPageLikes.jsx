import React, {useEffect} from 'react';
import Tweet from '../../Components/Tweet/Tweet';
import { connect } from 'react-redux'
import { get_likes_tweets_Thun } from '../../Store/tweet_actions';
import TweetContainer from '../../Components/Tweet/TweetContainer';

const MainPageLikes = ({ likes_tweets,authID, name, ava, id, loading_likes_tweets }) => {
    useEffect(() => {
        loading_likes_tweets(id)
    }, []);
    if(!likes_tweets) return <h1>Loading</h1>

    return (
        <>
            {
                likes_tweets.map(el => {
                    return <TweetContainer
                        id={el._id}
                        key={el._id}
                        name={el.tweet_author.fullName}
                        text={el.tweet_text}
                        date={el.tweet_date}
                        ava={el.tweet_author.avatar}
                        likes={el.likes}
                        pinned={el.pinned}
                        authID={authID}
                    />
                })
            }

        </>
    )
}

let mapStateToProps = state => {
    return {
        likes_tweets: state.tweets.likes_tweets
    }
}

let mapDispatchToProps = dispatch => {
    return {
        loading_likes_tweets: (userID) => {
            dispatch(get_likes_tweets_Thun(userID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageLikes)