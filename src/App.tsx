import React, { useState } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import './App.css';
import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';
import { Button, CssBaseline, Paper, TextField, Toolbar } from '@material-ui/core';
import { PageHeader } from './components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import {users} from '../src/components/Users';
import { TableUsers } from './components/UsersTable'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { Popup } from './components/Pop-up';
import { EditPopup } from './components/EditPop-up';
import { User } from './components/UserForm';

function App() {

  const [user, setUser] = useState<User[]>(users)

  const [editUser, setEditUser] = useState({
    fullname: "",
    email: "",
    mobile: "",
    city: "",
    gender: "",
    department: "",
    hireDate: ""
})
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
              <div className = "button">
              <Button
                className = "pop-up-Button"
                variant="contained"
                size="large"
                color = "secondary"
                startIcon = {<AddIcon />}
                disableRipple
                onClick = {() => setOpen(true)}
              >Add New</Button>
              </div>
              <Popup open = {open} setOpen = {setOpen} data = {editUser}/>
              <EditPopup openPopup = {open} setOpenPopup = {setOpen} data = {editUser} setData = {setEditUser}/>
            </Toolbar>
            {/*<UserForm user = {users}/>*/}
            <TableUsers Users = {user} setUser = {setUser} setOpen = {setOpen} setEditUser = {setEditUser}/>
          </Paper>
        </div>
        <CssBaseline />
      </StylesProvider>
    </>
  );
}

export default App;
