import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom'
import './FolowPage.scss'
import { UserItem } from '../InfoContent/InfoContent';
import Preloader from '../../Uttils/Preloader/Preloader'

const FollowPage = React.memo(({ follow_list, authUser, unfollow, follow }) => {

    const [step, setStep] = useState(1)

    if (!follow_list || follow_list.followers.length === 0) return <Preloader />

    return (
        <div className="folow">
            <div className="follow_panel">
                <p className={step === 1 && 'active'} onClick={() => setStep(1)}>Followers</p>
                <p className={step === 2 && 'active'} onClick={() => setStep(2)}>Following</p>
            </div>
            <div className="follow_content">
                {
                    step === 1 && <>
                        {
                            [...follow_list.followers].map(el => {
                                return (<Follow
                                    avatar={el.avatar}
                                    _id={el._id}
                                    fullName={el.fullName}
                                    email={el.email}
                                    follow={() => follow(el._id)}
                                    unfollow={() => unfollow(el._id)}
                                    authUser={authUser}
                                />)
                            })
                        }

                    </>
                }
                {
                    step === 2 && <>
                        {
                            follow_list.following.map(el => {
                                return (<Follow
                                    avatar={el.avatar}
                                    _id={el._id}
                                    fullName={el.fullName}
                                    email={el.email}
                                    follow={() => follow(el._id)}
                                    unfollow={() => unfollow(el._id)}
                                    authUser={authUser}
                                />)
                            })
                        }

                    </>
                }

            </div>
        </div>
    );
})

export default FollowPage;

const Follow = (props) => {
    return <UserItem {...props} />
}