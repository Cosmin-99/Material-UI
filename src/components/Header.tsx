import React from 'react';
import './Styles.css';
import {AppBar, InputBase ,Toolbar , Grid, IconButton, Badge} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

export function Header() {

    return (
        <AppBar position = "static" className = "root">
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <InputBase
                        placeholder = "Search topics !!!"
                        className = "searchInput"
                        startAdornment = {<SearchIcon component = {SearchIcon}/>} />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent = {4} color = "primary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent = {3} color = "secondary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge color = "secondary">
                                <PowerSettingsNewIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}