import Cat from '../data/cat';
import Image from '../data/image';
import CatImage from './cat_image';

interface CatCardProps {
	cat: Cat;
	image: Image;
}

const CatCard: React.FC<CatCardProps> = ({ cat: { name, species, favFoods, birthYear }, image }) => {
	const foods = favFoods.join(', ');

	return (
		<div className='card'>
			<h3 className='card__text card__header'>{name}</h3>
			<CatImage img={image} />
			<p className='card__text'>Species: {species} </p>
			<p className='card__text'>Favourite Food(s): {foods}</p>
			<p className='card__text'>Birth Year: {birthYear} </p>
		</div>
	);
};

export default CatCard;
