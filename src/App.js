import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from './scenes/Home/Home'
import {Car} from './scenes/Car/Car'
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TabsHead } from "./components/TabsHead/TabsHead";
import { Record } from "./components/Record/Record";


const App = () =>{

  const { arrayPrpducts } = useSelector(state => state.car);

  return (
    <div className="App">
      <Router>
        <Switch className="h-100">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {arrayPrpducts && arrayPrpducts.length > 0 ?
            <Route path="/car" component={Car} />
            :
            <Route path="*" component={Home} />
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
