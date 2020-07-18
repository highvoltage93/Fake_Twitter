import React, { useState } from 'react';
import Logo from '../../Uttils/Pictures/logo.jpg'
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import './Registration.scss'

const Registration = ({ registration }) => {

    const [disable, setDisable] = useState(false);

    let submitHandler = (e) => {
        e.preventDefault()
        let user = {
            email: e.target.email.value,
            password: e.target.password.value,
            date: e.target.days.value,
            month: e.target.month.value,
            year: e.target.years.value,
            telephoneNumber: e.target.tel.value,
            fullName: e.target.name.value,
            location: e.target.location.value,
        }
        registration(user)
        setDisable(false)
    }

    let month_select = [
        'January', 'Fbruary', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'
    ]

    let days_select = []
    for(let i = 1; i <= 31; i++){
        days_select.push(i)
    }

    let years_select = [ ]
    for(let i = 1950; i <= 2019; i++){
        years_select.push(i)
    }


    let years = years_select.map(el => <option value={el}>{el}</option>)
    let days = days_select.map(el => <option value={el}>{el}</option>)
    let month = month_select.map(el => <option value={el}>{el}</option>)


    return (
        <div className="registration">
            <img src={Logo} alt="" />
            <h1>Create an account</h1>
            <form onSubmit={submitHandler}>
                <Input
                    placeholder="Email"
                    type="email"
                    require={true}
                    name='email'
                />
                <Input
                    placeholder="Password"
                    type="password"
                    require={true}
                    max={12}
                    min={2}
                    name="password"
                />
                <h2>Date of BirthDay:</h2>
                <h3>This information will not be publicly available. Confirm your age, even if this account is for a company, pet, etc.</h3>
                <div className="registration_selects">
                    <select name="month" required={true}>
                        {month}
                    </select>
                    <select name="days" required={true}>
                        {days}
                    </select>
                    <select name="years" required={true}>
                        {years}
                    </select>
                </div>

                <Input
                    placeholder="Telephon number"
                    type="tel"
                    require={true}
                    max={22}
                    min={2}
                    name="tel"
                />
                <Input
                    placeholder="Full Name"
                    type="text"
                    require={true}
                    max={122}
                    min={2}
                    name="name"
                />
                <Input
                    placeholder="Location"
                    type="text"
                    require={true}
                    max={132}
                    min={2}
                    name="location"
                />
                <Button disable={disable} color="blue">Registration</Button>
            </form>
        </div>
    );
}

export default Registration;