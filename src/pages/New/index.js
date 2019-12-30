import React, { useState, useMemo } from 'react'
import { Formik, Form, Field } from 'formik'

import camera from '../../assets/camera.svg'
import './styles.scss'

import api from '../../services/api'

const New = ({ history }) => {
	const [thumbnail, setThumbnail] = useState(null)

	const preview = useMemo(() => {
		return thumbnail ? URL.createObjectURL(thumbnail) : null
	}, [thumbnail])

	return (
		<Formik
			initialValues={{
				thumbnail: thumbnail,
				company: '',
				price: '',
				techs: ''
			}}
			onSubmit={async ({ thumbnail, company, price, techs }, actions) => {
				const data = new FormData()
				const user_id = localStorage.getItem('user')

				data.append('thumbnail', thumbnail)
				data.append('company', company)
				data.append('price', price)
				data.append('techs', techs)

				await api.post('/spots', data, {
					headers: {
						user_id
					}
				})

				history.push('/dashboard')
			}}
		>
			{props => (
				<Form>
					<label
						id='thumbnail'
						style={{ backgroundImage: `url(${preview})` }}
						className={thumbnail && 'has-thumbnail'}
					>
						<input
							type='file'
							name='thumbnail'
							onChange={e =>
								setThumbnail(
									(props.values.thumbnail = e.target.files[0])
								)
							}
						/>

						<img src={camera} alt='Select img' />
					</label>

					<label htmlFor='company'>
						EMPRESA <span className='required'>*</span>
					</label>
					<Field
						type=''
						name='company'
						id='company'
						placeholder='Nome da sua empresa...'
						autoComplete='off'
					/>

					<label htmlFor='price'>
						PREÇO <span className='required'>*</span>{' '}
						<span>(em branco para GRATUITO)</span>{' '}
					</label>
					<Field
						type=''
						name='price'
						id='price'
						placeholder='Valor Diário...'
						autoComplete='off'
					/>

					<label htmlFor='techs'>
						TECNOLOGIAS <span className='required'>*</span>{' '}
						<span>(separadas por vírgula)</span>{' '}
					</label>
					<Field
						type=''
						name='techs'
						id='techs'
						placeholder='Tecnologias usadas...'
						autoComplete='off'
					/>

					<button type='submit' className='btn'>
						Cadastrar
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default New
