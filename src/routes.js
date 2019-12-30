import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import New from './pages/New'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Login} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/new' component={New} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
