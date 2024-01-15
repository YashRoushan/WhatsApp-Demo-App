import React from 'react'
import "./Chat.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import IconButton from '@mui/material/IconButton';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MicIcon from '@mui/icons-material/Mic';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

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
            <div className="chat__body">
                <p className='chat__message'>
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className=' chat__message chat__receiver'>
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <TagFacesIcon />
                <form>
                    <input type="text" placeholder='Type a message' />
                    <button type='submit'>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
