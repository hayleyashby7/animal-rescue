import Image from '../data/image';

interface CatImageProps {
	img: Image;
}

const CatImage: React.FC<CatImageProps> = ({ img }) => {
	return (
		<>
			<img className='card__image' src={img.image} alt={img.altText}></img>
			<p className='card__text__small'>
				Image licenced under <a href={img.licenceUrl}>{img.licenceType}</a>
				{img.attributionName && (
					<>
						&nbsp;by <a href={img.attributionUrl}>{img.attributionName}</a>
					</>
				)}
			</p>
		</>
	);
};

export default CatImage;
