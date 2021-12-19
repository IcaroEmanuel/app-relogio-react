import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Watch from './pages/Watch';
import Alarm from './pages/Alarm'; 
import Stopwatch from './pages/Stopwatch';
import Timer from './pages/Timer';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Toolbar from './components/Toolbar';

class App extends Component{
  render() {
    return (
      <main className="App">
        <Toolbar />
        <Switch>
          <Route exact path="/" component={ Watch } />
          <Route exact path="/alarm" component={ Alarm } />
          <Route exact path="/stopwatch" component={ Stopwatch } />
          <Route exact path="/timer" component={ Timer } />
          <Route path="/*" component={ PageNotFound } />
        </Switch>
      </main>
    )
  }
}

export default App
