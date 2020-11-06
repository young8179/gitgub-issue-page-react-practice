
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserInfoById() {
    const { login } = useParams();
    const [ user, setUser ] = useState(null)

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
            <div className="container">
                <h1>User Info</h1>
                { user && (
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: {user.login}</li>
                    { user.bio !== null ? (<li class="list-group-item">About: {user.bio}</li>) : ""}
                    { user.company !== null ? ( <li class="list-group-item">Company: {user.company}</li>) : ("") }
                    { user.blog !== "" ? (<li class="list-group-item">Blog: {user.blog}</li>) : ("")}
                    { user.location !== null ? (<li class="list-group-item">Location: {user.location}</li>) :( "")}
                    { user.email !== null ? (<li class="list-group-item">Email: {user.email}</li>) :( "")}
                    
                </ul>

                    )}
            </div>

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