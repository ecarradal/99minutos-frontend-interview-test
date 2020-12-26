import Launches from './pages/Launches/Launches'
import Mission from './pages/Mission/Mission'
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

const AppRouting = () => (
  <>
    <Switch>
      <Route exact path='/'>
        <Redirect to="/launches" />
      </Route>
      <Route exact path="/launches" component={Launches} />
      <Route exact path="/mission" component={Mission} />
    </Switch>
  </>
)

export default AppRouting