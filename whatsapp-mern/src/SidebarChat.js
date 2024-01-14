import React from 'react'
import './SidebarChat.css'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

function SidebarChat() {
    return (
        <div className='SidebarChat'>
            <AccountBoxRoundedIcon />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
