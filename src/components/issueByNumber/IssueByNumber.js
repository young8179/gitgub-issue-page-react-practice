import "./IssueByNumber.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import moment from 'moment';

export default function IssueByNumber() {
    const { number } = useParams();
    const [issues, setIssues ] = useState(null)

    const loadIssues = () =>{
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${number}`)
            .then(res => res.json())
            .then(data => {
                setIssues(data)
            })
    }

    useEffect(()=>{
        loadIssues()
    }, [])

    return (
        <>
            <h1>Iussues By Number</h1>
            { issues && (
            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-12 text-center mb-5">
                            <h1>{issues.title} {issues.number}</h1>
                    </div>
                   <div className="col-12 content-box">
                        
                        <div className="row top-head">
                            <pre className="p-2"><b>{issues.user.login}</b>   {moment(issues.created_at).fromNow()}</pre>
                        </div>
                        <div className="row">
                            <div className="">
                                <img src={issues.user.avatar_url} style={{height: "300px"}} className="" alt="..."/>
                                <div className="">
                                    <h3>{issues.title} {issues.number}</h3>
                                    
                                    <ReactMarkdown source={issues.body} />
                                    <a href={issues.url}>Issues Link</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            )}

        </>
    )
}
