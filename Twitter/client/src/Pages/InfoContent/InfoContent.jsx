import React from 'react';
import './InfoContent.scss'
import { NavLink } from 'react-router-dom';
import Button from '../../Components/UI/Button/Button'

const InfoContent = ({ id, users_content }) => {
    return (
        <div className="info">
            <h1>Who to follow</h1>
            {
                users_content?.map(el => <NavLink key={el._id} to={`/profile/${el._id}`} className="info_user">
                    <img src={el.avatar} alt="" />
                    <div>
                        <span>{el.fullName}</span>
                        <p>{el.email}</p>
                    </div>
                    <Button color="yellow">Folow</Button>
                </NavLink>)
            }

        </div>
    );
}

export default InfoContent;