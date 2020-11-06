
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
            <h1>hello</h1>
            { user && (
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{user.login}</li>
                { user.bio !== null ? (<li class="list-group-item">{user.bio}</li>) : ""}
                { user.company == null ?  "" : <li class="list-group-item">{user.company}</li>}
                { user.website !== null ? (<li class="list-group-item">{user.website}</li>) : ("")}
                { user.location !== null ? (<li class="list-group-item">{user.location}</li>) :( "")}
                { user.email !== null ? (<li class="list-group-item">{user.email}</li>) :( "")}
                
          </ul>

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