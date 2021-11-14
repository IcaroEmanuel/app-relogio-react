import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Watch from './pages/Watch';
import Alarm from './pages/Alarm'; 
import Stopwatch from './pages/Stopwatch';
import Timer from './pages/Timer';
import PageNotFound from './pages/PageNotFound';
import './App.css';

class App extends Component{
  render() {
    return (
      <main className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Watch } />
            <Route exact path="/alarm" component={ Alarm } />
            <Route exact path="/stopwatch" component={ Stopwatch } />
            <Route exact path="/timer" component={ Timer } />
            <Route path="/*" component={ PageNotFound } />
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

export default App
