import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './button';

interface formInput {
	name: string;
	animal: string;
	species: string;
	favFoods: string[];
	birthYear: number;
}

interface AddAnimalFormProps {
	onSubmit: (data: formInput) => void;
}

const AddAnimalForm: React.FC<AddAnimalFormProps> = ({ onSubmit }) => {
	const { register, handleSubmit, reset } = useForm<formInput>();

	const submitForm = (data: formInput) => {
		onSubmit(data);
		toggleForm();
	};

	const toggleForm = () => {
		const form = document.querySelector('.form');
		form?.classList.toggle('form--closed');

		const btn = document.querySelector('.btn--add');
		if (btn) btn?.innerHTML === 'Add Animal' ? (btn.innerHTML = 'Close Form') : (btn.innerHTML = 'Add Animal');

		reset();
	};

	return (
		<div className='form__wrapper'>
			<Button btnClassNames='btn card__text btn--add' onClick={() => toggleForm()} text='Add Animal' />
			<form className='card form form--closed' onSubmit={handleSubmit(submitForm)}>
				<label className='card__text' htmlFor='name'>
					Name
				</label>
				<input className='card__text' id='name' {...register('name')} required />

				<label className='card__text' htmlFor='animal'>
					Type of Animal
				</label>
				<select className='card__text' id='animal' {...register('animal')} required>
					<option value=''>Select an animal</option>
					<option value='cat'>Cat</option>
					<option value='dog'>Dog</option>
				</select>

				<label className='card__text' htmlFor='species'>
					Species
				</label>
				<input className='card__text' id='species' {...register('species')} required />

				<label className='card__text' htmlFor='favFoods'>
					Favourite Foods
				</label>
				<input className='card__text' id='favFoods' {...register('favFoods')} required />

				<label className='card__text' htmlFor='birthYear'>
					Birth Year
				</label>
				<input className='card__text' id='birthYear' {...register('birthYear')} type='number' required />

				<input className='card__text btn' type='submit' />
			</form>
		</div>
	);
};

export default AddAnimalForm;
