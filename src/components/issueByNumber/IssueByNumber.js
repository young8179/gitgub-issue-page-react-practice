
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

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
            <div className="text-center">
                <img src={issues.user.avatar_url} style={{height: "300px"}}className="align-self-start mr-3" alt="..."/>
                <div className="media-body">
                    <h3>{issues.title}</h3>
                    <h5 className="mt-0">{issues.number}</h5>
                    <ReactMarkdown source={issues.body} />
                    <a href={issues.url}>Issues Link</a>
                </div>
            </div>

            )}

        </>
    )
}
