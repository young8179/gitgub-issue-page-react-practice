import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './users.css'
import UserCard from '../userCard/UserCard'

export default function Users() {
    const [userName, setUserName] = useState("")
    const [users, setUsers] = useState([])

    // const loadUser = () =>{
    //     fetch(`https://api.github.com/users/${users}`)
    //     .then(res=> res.json())
    //     .then(data =>{
    //         setUsers(data)
    //     })
    // }

    // useEffect(()=>{
    //     loadUser()
    // }, [])

    const handleChange = (event)=>{
        setUserName(event.target.value)
    }
    const handleSubmit = (event)=> {
        event.preventDefault()
        fetch(`https://api.github.com/users/${userName}`)
        .then(res =>{
            if(res.status !== 200){
                throw Error(`could not find user ${userName}}`)
            }
            return res;
        })
        .then(res=> res.json())
        .then(data =>{
            const newUsers = [...users]
            newUsers.unshift(data)
            setUsers(newUsers)
            setUserName("")
        })
        .catch(()=>{
            alert("that is not a valid username. Please try again")
        })
    }
    

    return (
        <div className="container">
            <div className="row " >
                <div className="col-12 ">
                    <h1>User Search</h1>
                </div>
                <div className="col-12 ">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">
                            
                            <input
                                className="user-input" 
                                type="text"
                                name="name"
                                value={userName}
                                onChange={handleChange}
                                />
                        </label>
                        <button type="submit">Add User</button>
                    </form>

                </div>
                <div className="col-12 mt-5">
                    <h1>Result</h1>
                </div>
                <div className="col-12 mt-5">
                    
                    { users.map((user)=>{
                        return <UserCard user={user}/>
                    })}
                </div>

            </div>
        </div>
    )
}

 