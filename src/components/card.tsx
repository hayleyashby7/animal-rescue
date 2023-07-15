import Image from '../data/image';
import CardImage from './card_image';

interface CardProps {
	animal: { name: string; species: string; favFoods: string[]; birthYear: number };
	image: Image;
}

const CatCard: React.FC<CardProps> = ({ animal: { name, species, favFoods, birthYear }, image }) => {
	const foods = favFoods.join(', ');

	return (
		<div className='card'>
			<h3 className='card__text card__header'>{name}</h3>
			<CardImage img={image} />
			<p className='card__text'>Species: {species} </p>
			<p className='card__text'>Favourite Food(s): {foods}</p>
			<p className='card__text'>Birth Year: {birthYear} </p>
		</div>
	);
};

export default CatCard;
