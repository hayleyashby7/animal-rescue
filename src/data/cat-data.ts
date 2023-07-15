import { v4 as uuidv4 } from 'uuid';
import Cat from './cat';

const catData: Cat[] = [
	{
		name: 'Little Miss Purrfect',
		species: 'Cat',
		favFoods: ['wet food', 'dry food'],
		birthYear: 2016,
		imageId: 0,
	},
	{
		name: 'Mr Gwumpy',
		species: 'Cat',
		favFoods: ['caviar'],
		birthYear: 2016,
		imageId: 11,
	},
	{
		name: 'Dopey',
		species: 'Cat',
		favFoods: ['bugs'],
		birthYear: 2018,
		imageId: 4,
	},
	{
		name: 'Jumpy',
		species: 'Scaredy Cat',
		favFoods: ['not cucumbers!'],
		birthYear: 2008,
		imageId: 1,
	},
	{
		name: 'Meowsalot',
		species: 'Cat',
		favFoods: ['tuna', 'catnip', 'celery'],
		birthYear: 2012,
		imageId: 9,
	},
	{
		name: 'Cindy Clawford',
		species: 'Cat',
		favFoods: ['mice'],
		birthYear: 2012,
		imageId: 2,
	},
	{
		name: 'Katy Purry',
		species: 'Cat',
		favFoods: ['cigarettes', 'coffee'],
		birthYear: 2015,
		imageId: 8,
	},
	{
		name: 'Dr. Von Belly-Rub',
		species: 'Cat',
		favFoods: ['salt'],
		birthYear: 2020,
		imageId: 10,
	},
	{
		name: 'Blobby',
		species: 'Bird?',
		favFoods: ['your soul'],
		birthYear: 2020,
		imageId: 6,
	},
	{
		name: 'El Taco',
		species: 'Cat',
		favFoods: ['tequila', 'bar snax'],
		birthYear: 1995,
		imageId: 7,
	},
	{
		name: 'Nibbles',
		species: 'Hungry Cat',
		favFoods: ['blankets', 'feet', 'tinsel'],
		birthYear: 2003,
		imageId: 5,
	},
	{
		name: 'BoopySnoot',
		species: 'Tiny Cat',
		favFoods: ['milk'],
		birthYear: 2021,
		imageId: 3,
	},
];

catData.forEach((cat) => (cat.id = uuidv4()));

export default catData;
