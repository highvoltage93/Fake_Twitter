import React from 'react';
import './Settings.scss'

const Settings = (props) => {

    const [bg, setBg] = React.useState('def')

    let handleOptionChange = (e) => {
        setBg(e.target.value)
        props.set_bg(e.target.value)
    }

    return (
        <>
            <h1>Background</h1>
            <Inputs bg={bg} handleOptionChange={handleOptionChange} bg_color={props.bg_color}/>
        </>
    );
}



let Inputs = ({ bg, handleOptionChange, bg_color }) => {
    return (<form className="bg">
        <>
            <input type="radio" name="bg" value='def' id="def" checked={bg_color === 'def'} onChange={handleOptionChange} />
            <label htmlFor="def" className="def">
                <p></p>
                <span>Default</span>
            </label>
        </>
        <>
            <input type="radio" name="bg" value='twilight' id="twilight" checked={bg_color === 'twilight'} onChange={handleOptionChange} />
            <label htmlFor="twilight" className="twilight">
                <p></p>
                <span>Twilight</span>
            </label>
        </>
        <>
            <input type="radio" name="bg" value='night' id="night" checked={bg_color === 'night'} onChange={handleOptionChange} />
            <label htmlFor="night" className="night">
                <p></p>
                <span>Night</span>
            </label>
        </>
    </form>)
}

export default Settings;