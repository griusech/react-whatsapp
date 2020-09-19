import React, {useState} from 'react'
import '../textos/cuerpoChats.css'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import {IconButton} from '@material-ui/core'

const CuerpoChats = ({addChat}) => {

    const [chat, setChat] = useState({
        msg: '',
        date: Date.now()
    })

    const { msg } = chat
    
    const handleType = e => {
        setChat({
            ...chat,
            [e.target.name] : e.target.value
        })  
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        addChat(chat);
        setChat({
            msg: ''
        })
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="chat-footer">
            <InsertEmoticonIcon 
                className="smile"
            />
        
                <input 
                    type="text"
                    name='msg'
                    placeholder="Escribe un mensaje aquí"
                    onChange={handleType}
                    value={msg}
                />

                <IconButton
                    type="submit"
                >
                    <SendIcon />
                </IconButton>

                <IconButton>
                    <MicIcon />
                </IconButton>

            </div>
        </form>
        </div>
    )
}

export default CuerpoChats
