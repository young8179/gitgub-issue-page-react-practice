import React from 'react'
import moment from 'moment';

export default function Time(props) {
   

    return (
        
        <div>
            <p>{moment([`${props.issueData.created_at}`, 0, 0]).fromNow()}</p>

        </div>       

                
            
       
        
    )

}
