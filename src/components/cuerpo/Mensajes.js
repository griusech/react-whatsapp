import React, {useState, useEffect} from 'react'

import CuerpoChats from '../textos/CuerpoChats'
import '../cuerpo/mensajes.css'

//FIREBASE
import {db} from '../../firebase'

// ICONOS MATERIAL UI
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {IconButton} from '@material-ui/core'

const Mensajes = () => {

    const [values, setValues] = useState([])
    
    const addChat = async (linkObject) => {
        await db.collection('chats').doc().set(linkObject)
        console.log("Nuevo Chat Agregado")
    }
    
    const getChat = () => {
        const docs = [];
        db.collection('chats').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            console.log(docs)
            setValues(docs)
        })
    }
    
    useEffect(() => {
        getChat()        
    }, [])


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
            {values.map(item => (
                <h5>{item.msg}</h5>
            )
            )}
        </div>

        <CuerpoChats 
       
            addChat={addChat}
        />

    </div>
    )
}

export default Mensajes





