import React, { useState, useMemo } from 'react'
import { Formik, Form, Field } from 'formik'

import camera from '../../assets/camera.svg'
import './styles.scss'

const New = () => {
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
			onSubmit={(values, actions) => {
				console.log(values.thumbnail.name)
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
