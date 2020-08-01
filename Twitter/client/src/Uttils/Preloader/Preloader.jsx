import React from 'react';
import Loader from '../Pictures/preloader.gif'
 
const Preloader = () => {
    return (
        <div style={mystyle} className="preloader">
            <img style={imgStyle} src={Loader} alt=""/>
        </div>
    );
}
 
const mystyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const imgStyle ={
      width: '400px'
  }
export default Preloader;