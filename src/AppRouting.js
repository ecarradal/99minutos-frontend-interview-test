import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Launches from './pages/Launches'
import Mission from './pages/Mission'

const AppRouting = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/launches" component={Launches} />
      <Route exact path="/mission" component={Mission} />
    </Switch>
  </BrowserRouter>
)

export default AppRouting