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
    const icon = <svg className="size mr-1 octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>

    return (
        
        <>
            <h1>Issue Detail</h1>
            { issues && (
            <div className="container-fluid">
                <div className="row mr-5 ml-5 justify-content-center">
                    <div className="col-12 ">
                        <h1>{issues.title} #{issues.number}</h1>
                    </div>
                    <div className="col-12 border-bottom">
                        <pre className="p-2"><span className="open-span">{icon}Open</span><b>  {issues.user.login}</b>  opened this issue {moment(issues.created_at).fromNow()} * {issues.comments} comments</pre>
                    </div>

                    <hr/>
                   <div className="col-12 mt-5 content-box">
                        
                        <div className="row top-head">
                            <pre className="p-2"><b>{issues.user.login}</b> commented {moment(issues.created_at).fromNow()}</pre>
                        </div>
                        <div className="row p-4">
                            <div className="">
                                {/* <img src={issues.user.avatar_url} style={{height: "300px"}} className="mark-img" alt="..."/> */}
                                <div className="">
                                    <h3>{issues.title} {issues.number}</h3>
                                    
                                    <ReactMarkdown className="mark-down" source={issues.body} allowDangerousHtml={true}/>
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
