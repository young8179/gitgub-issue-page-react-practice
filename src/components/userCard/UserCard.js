import React, {useState, useEffect} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import './userCard.css'

export default function UserCard(props) {
    const { bio, login, avatar_url, type, blog, email } = props.user
    return (
        <>
        <div className="UserCard">
            <div className="profile-image">
                <img src={avatar_url} alt="1" className="avatar-img"/>  
            </div>
            <div className="profile-details">
                <h3 className="mt-0 login"><NavLink to={`/users/${login}`}>{login}</NavLink></h3>
                <ul>
                    <li><b>Account Type</b>{type}</li>
                    <li><b>blog</b>{blog}</li>
                    <li><b>email</b>{email}</li>
                    <li><b>bio</b>{bio}</li>
                </ul>
            </div>
            
      
        </div>
        </>
    )
}


