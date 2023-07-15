import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import catData from './data/cat-data';
import CatCard from './components/cat_card';

function App(): JSX.Element {
	const [cats, setCats] = useState<Array<Cat>>(catData);

	return (
		<>
			<Navbar />
			<Header />

			<main>
				<div className='cards__wrapper'>
					{cats.map((cat) => (
						<CatCard key={cat.id} cat={cat} />
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
