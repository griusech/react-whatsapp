import React from 'react'
import '../cuerpo/mensajes.css'

import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import {Button, IconButton} from '@material-ui/core'

const mensajes = () => {
    return (
    <div className="chats">
        
        <div className="mensaje-head">

            <div className="person">
                <PersonIcon 
                    className="icon-person"
                    fontSize="large"
                />

            </div>
            
            <div className="title-name">
                <h4>Name</h4>
                <p>lroem lorem lorem</p>
            </div>
        
            <div className="icons-right">
                <IconButton>
                    <SearchIcon />
                </IconButton>

                <IconButton>
                    <AttachFileIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>    
        </div>

        <div className="mensaje-body">
            <div className="mensaje-container">
                

            </div>
        </div>

        <div className="chat-footer">
            <InsertEmoticonIcon 
                className="smile"
            />
        
            <form>
                <input 
                    type="text"
                    placeholder="Escribe un mensaje aquí"
                />

                <IconButton>
                    <SendIcon />
                </IconButton>

                <IconButton>
                    <MicIcon />
                </IconButton>
            </form>

        </div>


    </div>
    )
}

export default mensajes
