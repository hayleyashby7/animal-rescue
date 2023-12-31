import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import Dog from './data/dog';
import catData from './data/cat-data';
import dogData from './data/dog-data';
import Card from './components/card';
import images from './data/cat-images';
import catFace from './assets/cat-face.png';
import dogFace from './assets/dog-face.png';
import AddAnimalForm from './components/add-animal-form';

function App(): JSX.Element {
	const [cats, setCats] = useState<Array<Cat>>([
		{
			id: uuidv4(),
			name: 'Captain Catface',
			species: 'Sea Cattain',
			favFoods: ['fish, rum'],
			birthYear: 2016,
		},
		...catData,
	]);

	const [dogs, setDogs] = useState<Array<Dog>>(dogData);

	const matchImage = (id: number | undefined) => {
		if (id === undefined) {
			return { image: '', altText: '', licenceType: '', licenceUrl: '', attributionName: '', attributionUrl: '' };
		}
		return images[id];
	};

	const addAnimal = (data: { name: any; animal: any; species: any; favFoods: any; birthYear: any }) => {
		const { name, animal, species, favFoods, birthYear } = data;
		const newAnimal = { id: uuidv4(), name: name, species: species, favFoods: [favFoods], birthYear: birthYear };

		if (animal === 'cat') {
			setCats([newAnimal, ...cats]);
			return;
		}
		if (animal === 'dog') {
			setDogs([newAnimal, ...dogs]);
			return;
		}
	};

	return (
		<>
			<Navbar />
			<Header numCats={cats.length} numDogs={dogs.length} />
			<main>
				<AddAnimalForm onSubmit={(data) => addAnimal(data)} />
				<div className='cards__wrapper'>
					{cats.map((cat) => (
						<Card key={cat.id} animal={cat} image={matchImage(cat.imageId)} iconSrc={catFace} iconAlt='cat face icon' />
					))}

					{dogs.map((dog) => (
						<Card key={dog.id} animal={dog} image={matchImage(dog.imageId)} iconSrc={dogFace} iconAlt='dog face icon' />
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
