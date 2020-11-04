import React, { Component } from 'react'
import Issue from '../issue/Issue'
import "./IssueList.css"

export default class IssueList extends Component {
    constructor(){
        super()
        this.state ={
            issues:[]
        }
    }

    loadIssues = ()=> {
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    issues: data
                })
            })
    }

    componentDidMount(){
        this.loadIssues()
    }

    render() {
        return (
            <div className="IssueList container">
                {/* <Issue /> */}
                { this.state.issues.map((issue, index) => {
                    return <Issue key={issue.id} issueData={issue}/>
                }) }
            </div>
        )
    }
}
