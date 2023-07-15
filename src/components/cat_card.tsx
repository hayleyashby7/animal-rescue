import Cat from '../data/cat';

interface CatCardProps {
	cat: Cat;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
	const foods = cat.favFoods.join(', ');

	return (
		<div className='card'>
			<h3 className='card__text card__header'>{cat.name}</h3>
			<img className='card__image' src='someImageUrlHere' alt='A cute tabby kitten'></img>
			<p className='card__text'>Species: {cat.species} </p>
			<p className='card__text'>Favourite Food(s): {foods}</p>
			<p className='card__text'>Birth Year: {cat.birthYear} </p>
		</div>
	);
};

export default CatCard;
