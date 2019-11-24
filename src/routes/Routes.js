import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../components/pages/Home'
import ForeCast from '../containers/ForeCast'
import ForeCastDetails from '../containers/ForeCastDetails'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/forecast' component={ForeCast} />
            <Route exact path='/details/:day' component={ForeCastDetails} />
        </Switch>
    </BrowserRouter>
)

export default Routes