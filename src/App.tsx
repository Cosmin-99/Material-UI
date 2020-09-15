import React, { useState } from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import './App.css';
import { Header } from './components/Header';
import {SideMenu } from './components/SideMenu';
import { CssBaseline, Paper } from '@material-ui/core';
import {PageHeader} from './components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { User, UserForm} from './components/UserForm';
import {TableUsers} from './components/UsersTable'

function App() {

  const [users, setUsers] = useState<User[]>([]);
 
  return (
    <>
    <StylesProvider injectFirst>
    <SideMenu />
    <div className = "header">
      <Header />
      <PageHeader title = "Page Title"
      subtitle = "Page Description"
      icon = {<PeopleOutlineIcon fontSize ="large" />} />
      <Paper className = "form">
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
