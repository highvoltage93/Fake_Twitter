import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
 
const MainpageContainer = (props) => {
    return <MainPage {...props}/>
}
 
let mapStateToProps = state => {
    return{
        user: state.auth.user,
        avatar: state.auth.avatar,
        fullName: state.auth.fullNam
    }
}

export default connect(mapStateToProps, null)(MainpageContainer)

