import React, { useState } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import './App.css';
import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';
import { Button, CssBaseline, InputBase, InputLabel, Paper, TextField, Toolbar } from '@material-ui/core';
import { PageHeader } from './components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { User, UserForm } from './components/UserForm';
import { TableUsers } from './components/UsersTable'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { Popup } from './components/Pop-up';

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [open, setOpen] = useState(false)
  return (
    <>
      <StylesProvider injectFirst>
        <SideMenu />
        <div className="header">
          <Header />
          <PageHeader title="Page Title"
            subtitle="Page Description"
            icon={<PeopleOutlineIcon fontSize="large" />} />
          <Paper className="form">
            <Toolbar className="searchBar">
              <TextField
                className="SearchBar"
                label="Search"
                variant="outlined"
                placeholder="Search topics !!!"
                InputProps={{
                  startAdornment: (<SearchIcon component={SearchIcon} />)
                }}
              />

              <Button
                className = "pop-up-Button"
                variant="contained"
                size="large"
                color = "secondary"
                startIcon = {<AddIcon />}
                onClick = {() => setOpen(true)}
              >Add New</Button>
              <Popup open = {open} setOpen = {setOpen}/>
            </Toolbar>
            {/*<UserForm user = {users}/>*/}
            <TableUsers />
          </Paper>
        </div>
        <CssBaseline />
      </StylesProvider>
    </>
  );
}

export default App;
