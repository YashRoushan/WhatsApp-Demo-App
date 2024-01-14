import React from 'react'
import './Sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import IconButton from '@mui/material/IconButton';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <AccountBoxRoundedIcon />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertSharpIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder='Search or start new chat' />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default SideBar
