import React from 'react'
import { Formik, Form, Field } from 'formik'

import camera from '../../assets/camera.svg'
import './styles.scss'

const New = () => {
	return (
		<Formik
			initialValues={{
				thumbnail: null,
				company: '',
				price: '',
				techs: ''
			}}
			onSubmit={(values, actions) => {
				console.log(values)
			}}
		>
			{props => (
				<Form>
					<label id='thumbnail'>
						<input
							type='file'
							name='thumbnail'
							onChange={e =>
								(props.values.thumbnail =
									e.currentTarget.files[0])
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
