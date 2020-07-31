import React from 'react';
import './Modal.scss'
import { connect } from 'react-redux'
import { modal_handler_AC } from '../../Store/settings_actions';

const Modal = (props) => {
    return (<>
        {
            props.modal
                ? <div className={props.modal ? "overlay" : ''}>
                    <div className={props.modal ? 'modal' : ''}>
                        <span onClick={props.modal_handler} className="modal_close">X</span>
                        <h1>Modal</h1>
                        <div className="modal_content">
                            {props.children}
                        </div>
                    </div>
                </div>
                : null
        }
    </>
    );
}


let mapStateToProps = state => {
    return {
        modal: state.settings.modal
    }
}

let mapDispatchToProps = dispatch => {
    return {
        modal_handler: () => dispatch(modal_handler_AC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)