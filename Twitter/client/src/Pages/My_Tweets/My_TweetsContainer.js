import React from 'react';
import My_Tweets from './My_Tweets';
import { connect } from 'react-redux';

const My_TweetsContainer = (props) => {
    return <My_Tweets {...props} />
}

let mapStateToProps = state => {
    return{
        user: state.auth.user,
        avatar: state.auth.avatar,
        fullName: state.auth.fullNam
    }
}

export default connect(mapStateToProps, null)(My_TweetsContainer)

