import React from 'react'
import { BrowserRouter,HashRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../components/pages/Home'
import ForeCast from '../containers/ForeCast'
import ForeCastDetails from '../containers/ForeCastDetails'

const Routes = () => (
    <HashRouter basename='/'>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/forecast' component={ForeCast} />
            <Route exact path='/details/:day' component={ForeCastDetails} />
        </Switch>
    </HashRouter>
)

export default Routes