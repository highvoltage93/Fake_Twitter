import React from 'react';
import './Input.scss'

const Input = ({ type, placeholder, require = false, max = 15, min = 3 }) => {
    return (
        <>
            <input
                className="default_input"
                type={type}
                placeholder={placeholder}
                required={require}
                maxLength={max}
                minLength={min}
            />
        </>
    );
}

export default Input;