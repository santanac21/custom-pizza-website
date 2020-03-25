import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

//Self-made Components
import NavComponent from "./Components/NavComponent";
import Homepage from './Pages/Homepage';
import FooterComponent from "./Components/FooterComponent";

//Page Components
import About from './Pages/About';
import Rewards from './Pages/Rewards';
import Order from './Pages/Order';

//Custom and Bootstrap Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css';


class App extends Component{
  render(){
    return (
        <React.Fragment>
          <NavComponent />

          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/order">
              <Order/>
            </Route>
            <Route exact path="/rewards">
              <Rewards/>
            </Route>
          </Switch>

          <FooterComponent />
        </React.Fragment>
      );

  }
}

export default App;
