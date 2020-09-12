import React from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddExcercise from './components/AddExcercise';
import EditExcercise from './components/EditExcercise';
import ExcercisesList from './components/ExcerciseList';

import CreateUser from './components/createUser';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path = '/' component = {ExcercisesList} />
          <Route path = '/add' component = {AddExcercise} />
          <Route path = '/edit/:id' component = {EditExcercise} />
          <Route path = '/user' component = {CreateUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
