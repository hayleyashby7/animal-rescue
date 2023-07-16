import Image from '../data/image';
import CardImage from './card-image';

interface CardProps {
	animal: { name: string; species: string; favFoods: string[]; birthYear: number };
	image: Image;
	iconSrc: string;
	iconAlt: string;
}

const Card: React.FC<CardProps> = ({ animal: { name, species, favFoods, birthYear }, image, iconSrc, iconAlt }) => {
	const foods = favFoods.join(', ');

	return (
		<div className='card'>
			<h3 className='card__text card__header'>
				<img className='card__icon' src={iconSrc} alt={iconAlt} /> {name}
			</h3>

			<CardImage img={image} />
			<p className='card__text'>Species: {species} </p>
			<p className='card__text'>Favourite Food(s): {foods}</p>
			<p className='card__text'>Birth Year: {birthYear} </p>
		</div>
	);
};

export default Card;
