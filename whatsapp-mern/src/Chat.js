import React from 'react'
import "./Chat.css";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import IconButton from '@mui/material/IconButton';

function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <AccountBoxRoundedIcon />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Chat;
