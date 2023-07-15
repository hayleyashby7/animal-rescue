import Image from '../data/image';

interface CardImageProps {
	img: Image;
}

const CardImage: React.FC<CardImageProps> = ({ img: { image, altText, licenceUrl, licenceType, attributionName, attributionUrl } }) => {
	return (
		<>
			<img className='card__image' src={image} alt={altText}></img>
			<p className='card__text__small'>
				Image licenced under <a href={licenceUrl}>{licenceType}</a>
				{attributionName && (
					<>
						&nbsp;by <a href={attributionUrl}>{attributionName}</a>
					</>
				)}
			</p>
		</>
	);
};

export default CardImage;
