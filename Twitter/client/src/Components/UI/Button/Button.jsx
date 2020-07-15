import React from 'react';
import './Button.scss'
 
const Button = ({disable = false, color, children}) => {
    return (
        <>
            <button disabled={disable} className={`button ${color}`}>{children}</button>
        </>
    );
}
 
export default Button;