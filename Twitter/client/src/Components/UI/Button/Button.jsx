import React from 'react';
import './Button.scss'
 
const Button = ({disable = false, color, children, onClick = null}) => {
    return (
        <>
            <button disabled={disable} onClick={onClick} className={`button ${color}`}>{children}</button>
        </>
    );
}
 
export default Button;