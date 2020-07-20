import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from './scenes/Home/Home'
import {Car} from './scenes/Car/Car'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TabsHead } from "./components/TabsHead/TabsHead";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch className="h-100">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/car" component={Car} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
