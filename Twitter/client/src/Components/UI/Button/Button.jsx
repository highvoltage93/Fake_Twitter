import React from 'react';
import './Button.scss'
 
const Button = (props) => {
    return (
        <>
            <button className={`button ${props.color}`}>{props.children}</button>
        </>
    );
}
 
export default Button;