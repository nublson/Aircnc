import React from 'react'
import { Formik, Form, Field } from 'formik'

import './App.scss'

import logo from './assets/logo.svg'

const App = () => {
	return (
		<div className='container'>
			<img src={logo} alt='AirCnC' />

			<div className='content'>
				<p>
					Ofereça <strong>spots</strong> para programadores e encontre{' '}
					<strong>talentos</strong> para a sua empresa
				</p>

				<Formik
					initialValues={{
						email: ''
					}}
					onSubmit={async (values, actions) => {
						console.log(values.email)
						actions.resetForm()
					}}
				>
					{props => (
						<Form>
							<label htmlFor='email'>E-MAIL *</label>
							<Field
								type='email'
								id='email'
								name='email'
								autoComplete='off'
								placeholder='Seu e-mail'
							/>
							<button type='submit' className='btn'>
								Entrar
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default App
