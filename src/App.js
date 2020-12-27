import LaunchesContainer from './Pages/Launches/LaunchesContainer'
import Mission from './Pages/Mission/Mission'
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

const AppRouting = () => (
  <>
    <Switch>
      <Route exact path='/'>
        <Redirect to="/launches" />
      </Route>
      <Route exact path="/launches" component={LaunchesContainer} />
      <Route exact path="/mission" component={Mission} />
    </Switch>
  </>
)

export default AppRouting