import React, { useState } from 'react'

import './App.scss'

import logo from './assets/logo.svg'

const App = () => {
	const [email, setEmail] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

		console.log(email)
	}

	return (
		<div className='container'>
			<img src={logo} alt='AirCnC' />

			<div className='content'>
				<p>
					Ofereça <strong>spots</strong> para programadores e encontre{' '}
					<strong>talentos</strong> para a sua empresa
				</p>

				<form onSubmit={handleSubmit}>
					<label htmlFor='email'>E-MAIL *</label>
					<input
						type='email'
						id='email'
						placeholder='Seu e-mail'
						autoComplete='off'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>

					<button className='btn' type='submit'>
						Entrar
					</button>
				</form>
			</div>
		</div>
	)
}

export default App
