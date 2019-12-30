import React from 'react'
import { Formik, Form, Field } from 'formik'

import api from '../../services/api'

const Login = ({ history }) => {
	return (
		<>
			<p>
				Ofereça <strong>spots</strong> para programadores e encontre{' '}
				<strong>talentos</strong> para a sua empresa
			</p>

			<Formik
				initialValues={{
					email: ''
				}}
				onSubmit={async (values, actions) => {
					// Enviando dados para api para fazer o login
					const response = await api.post('/sessions', {
						email: values.email
					})
					// Armazenando o ID do usuário no localStorage
					const { _id } = response.data
					localStorage.setItem('user', _id)

					actions.resetForm()
					history.push('/dashboard')
				}}
			>
				{() => (
					<Form>
						<label htmlFor='email'>
							E-MAIL <span className='required'>*</span>
						</label>
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
		</>
	)
}

export default Login
