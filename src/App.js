import React from 'react'

import './App.scss'
import Routes from './routes'
import logo from './assets/logo.svg'

const App = () => {
	return (
		<div className='container'>
			<img src={logo} alt='AirCnC' />

			<div className='content'>
				<Routes />
			</div>
		</div>
	)
}

export default App
