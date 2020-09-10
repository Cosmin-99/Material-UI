import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import './App.css';
import { Header } from './components/Header';
import {SideMenu } from './components/SideMenu';
import { CssBaseline } from '@material-ui/core';
import {PageHeader} from './components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

function App() {
  return (
    <>
    <StylesProvider injectFirst>
    <SideMenu />
    <div className = "header">
      <Header />
      <PageHeader title = "Page Title"
      subtitle = "Page Description"
      icon = {<PeopleOutlineIcon />} />
    </div>
    <CssBaseline />
    </StylesProvider>
    </>
  );
}

export default App;
