import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import InfoContent from './InfoContent';
import { get_users_for_content_THUNK } from '../../Store/users_action';

const InfoContentContainer = (props) => {

    useEffect(() => {
       props.get_users()
    }, [])

    return <InfoContent {...props} />
}

let mapStateToProps = state => {
    return {
        users_content: state.users.users_content
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        get_users: () => {
            dispatch(get_users_for_content_THUNK())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoContentContainer)

