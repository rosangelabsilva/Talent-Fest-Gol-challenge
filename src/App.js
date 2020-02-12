import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Seats from './Pages/ Seats/ seats';
import Confirmation from './Pages/Confirmation/confirmation';
import Payment from './Pages/Payment/payment';


const Routes = () => {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/seats" component={Seats} />
          <Route path="/confirmation" component={Confirmation} />
            <Route path="/payment" component={Payment} />
        </Switch>
      </BrowserRouter>
  )
}


export default Routes;