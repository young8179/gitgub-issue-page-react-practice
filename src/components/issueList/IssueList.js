
import React, { useEffect, useState } from 'react'
import Issue from '../issue/Issue'
import Time from "../time/Time"
import "./IssueList.css"

export default function IssueList() {
    const [issues, setIssues] = useState([]);

    const loadIssues = ()=> {
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
            .then(res => res.json())
            .then(data => {
                setIssues(data)
            })
    }

    useEffect(()=>{
        loadIssues()
    }, [])

    
        return (
            <div className="IssueList container">
                {/* <Issue /> */}
                { issues.map((issue, index) => {
                    return <div>
                        <Issue key={issue.id} issueData={issue}/>
                        {/* <Time key={issue.id} issueData={issue}/> */}
                    </div>
                }) }
            </div>
        )
    }
