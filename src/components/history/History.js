import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import './history.css'

const History = () => {
    return (    
        <div className="chat-conatiner">
            <div className="icon">
                <PersonIcon 
                    className="person-icon"
                    fontSize="large"
                />

            </div>

            <div className="text-name">
                <h4>Name</h4>
                <p>lroem lorem lorem</p>
            </div>

        </div>            
       
    )
}

export default History
