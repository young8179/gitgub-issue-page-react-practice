import React from 'react'
import "./Issue.css"
import moment from 'moment';
import { Link } from 'react-router-dom';
import IssueList from '../issueList/IssueList';

export default function Issue(props) {
    const { issueData: issue } = props
        return (
            <div className= "Issue">
                <div className="row justify-content-between">
                   <div className="col-11 block-container">
                    
                    <svg className="size mt-1 mr-3 octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
                    <Link to={`/issues/${issue.number}`} style={{color: "black"}}className="size">{issue.title} </Link>
                    
                    
                
                    {issue.labels.map((label, index)=>{
                        // const style= {
                            
                        // }
                        return <p className="size issue" style={{ backgroundColor: `#${label.color}` }} key={index}>{label.name}</p> 
                    })}
                   </div>  
                   <div className="col-1 text-right">
                    <p className="comment">{issue.comments > 0 ? "💬" : ""} {issue.comments > 0 ? issue.comments : ""} </p>
                    
                   </div>   
                
                    
                    

                </div>

                <div>
                
                <p className="ml-4">#{issue.number} opened {moment(issue.created_at).fromNow()}</p>
                </div>    
                    
                    
                    

                    
                
            </div>
            
        )
    
}
