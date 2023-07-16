import React from 'react';
import { useForm } from 'react-hook-form';

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
	const { register, handleSubmit } = useForm<formInput>();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor='name'>Name</label>
			<input id='name' {...register('name')} autoComplete='false' />

			<label htmlFor='animal'>Type of Animal</label>
			<select id='animal' {...register('animal')}>
				<option value='cat'>Cat</option>
				<option value='dog'>Dog</option>
			</select>

			<label htmlFor='species'>Species</label>
			<input id='species' {...register('species')} />

			<label htmlFor='favFoods'>Favourite Foods</label>
			<input id='favFoods' {...register('favFoods')} />

			<label htmlFor='birthYear'>Birth Year</label>
			<input id='birthYear' {...register('birthYear')} />

			<input type='submit' />
		</form>
	);
};

export default AddAnimalForm;
