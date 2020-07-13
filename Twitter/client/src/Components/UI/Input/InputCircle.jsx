import React from 'react';
import './Input.scss'

const InputCircle = (props) => {
    return (
        <>
            <input
                className="input_circle"
                type={props.type}
                placeholder={props.placeholder} />
        </>
    );
}

export default InputCircle;