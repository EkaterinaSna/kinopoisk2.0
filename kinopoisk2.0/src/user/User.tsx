import React from "react";
import "./User.css"

const User = () => {
    return (
        <div className='user'>
            <div className='initials-wrapper'>
                <label className='initials'>II</label>
            </div>
            <div className='user-initials'>
                <label className='user-initials-wrapper'>Ivan Ivanov</label>
            </div>
        </div>
    )
}


export default User;