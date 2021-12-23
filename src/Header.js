import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {
    const history = useHistory();
    return (
        // BEM
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            )}


            <Link to ="/">
                <IconButton>
                    <h2 className="datenskate">DateNSkate</h2>
                </IconButton>
            </Link>
            <Link to="/chats">
                <IconButton>
                    <MessageIcon fontSize="large" className="header__icon"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
