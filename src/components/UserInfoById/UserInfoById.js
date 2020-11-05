
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserInfoById() {
    const { login } = useParams();
    const [ user, setUser ] = useState([])

    const loadUserInfo = () =>{
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(data =>{
                setUser(data)
            })
    }

    useEffect(()=>{
        loadUserInfo()
    }, [])

    return (
        <>
            <h1>hello</h1>
            { user && (
            <div>
                {user.login}
                {user.name}
                {user.avatar_url}
                {user.bio}
                {user.company}
                {user.location}
                {user.website}
            </div>

            )}
        </>
    )
}

// Login Name
// Display Name (if available)
// Avatar
// Bio
// Company
// Location
// Website (aka blog)