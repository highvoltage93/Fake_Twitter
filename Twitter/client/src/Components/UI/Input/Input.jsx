import React from 'react';
import './Input.scss'

const Input = ({ type,name, placeholder, require = false, max = 55, min = 3, auto = true }) => {
    return (
        <>
            <input
                className="default_input"
                type={type}
                placeholder={placeholder}
                required={require}
                maxLength={max}
                minLength={min}
                autoComplete={auto.toString()}
                name={name}
            />
        </>
    );
}

export default Input;