import React from 'react';
import {connect} from 'react-redux' 
import Settings from './Settings';
import { settings_THUNK } from '../../Store/auth_actions';

const SettingsPageContainer = (props) => {
    return <Settings {...props}/>
}
 
let mapStateToProps = state => {
    return{
        bg_color: state.auth.background_color
    }
}

let mapDispatchToProps = dispatch => {
    return{
        set_bg: (bg) => {
            dispatch(settings_THUNK(bg))
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPageContainer)