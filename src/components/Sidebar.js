import React from 'react'
import Hisotry from './chats/History'

import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import SearchIcon from '@material-ui/icons/Search';
import {Icon, Button, IconButton} from '@material-ui/core'
import '../components/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-chats">
            <div className="sidebar-head">

                <div className="person">
                    <PersonIcon 
                        className="icon-person"
                        fontSize="large"
                    />

                </div>
            
                <div className="icons-right">
                    <IconButton>
                        <DataUsageIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>    
            </div>

            <div className="sidebar-search">
                <div className="sidebar-container">
                    
                    <SearchIcon 
                        fontSize="small"
                    />
                    
                    <input 
                        type="text"
                        placeholder="Buscar o empezar un chat nuevo"    
                    />
                </div>
                </div>

            <div className="sidebar-body">
                <Hisotry />
                <Hisotry />
                <Hisotry />
                <Hisotry />
                
            </div>
            
        </div>
    )
}

export default Sidebar
