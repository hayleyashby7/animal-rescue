import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import catData from './data/cat-data';
import CatCard from './components/cat_card';
import images from './data/cat-images';

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

	const matchImage = (id: number | undefined) => {
		if (id === undefined) {
			return { image: '', altText: '', licenceType: '', licenceUrl: '', attributionName: '', attributionUrl: '' };
		}
		return images[id];
	};

	return (
		<>
			<Navbar />
			<Header numCats={cats.length} />

			<main>
				<div className='cards__wrapper'>
					{cats.map((cat) => (
						<CatCard key={cat.id} cat={cat} image={matchImage(cat.imageId)} />
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
