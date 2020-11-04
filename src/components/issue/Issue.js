import React from 'react'
import "./Issue.css"
import moment from 'moment';
export default function Issue(props) {
        const issueColor = {backgroundColor: `{label.color}`}
        const year = props.issueData.created_at.split("-")[1]
    
        return (
            <div className= "Issue row">
            
                    <svg className="size mt-1 mr-3 octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
                    <p className="size">{props.issueData.title} </p>
                    
                    
                
                    {props.issueData.labels.map((label, index)=>{
                        // const style= {
                            
                        // }
                        return <p className="size issue" style={{ backgroundColor: `#${label.color}` }} key={index}>{label.name}</p> 
                    })}
                
                    <p className="comment">{props.issueData.comments > 0 ? "💬" : ""} {props.issueData.comments > 0 ? props.issueData.comments : ""} </p>
                    
                    {/* {props.issueData.map((data, index)=>{
                        
                        return <p>{moment([`${data.created_at.split("-")[1]}`, 0, 29]).fromNow()}</p>
                    })} */}
                    
                    <br/>
                    <p>{moment([`${props.issueData.created_at.split("-")[1]}`, 0, 29]).fromNow()}</p>

                    
                
            </div>
        )
    
}
