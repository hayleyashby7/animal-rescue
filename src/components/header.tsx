interface HeaderProps {
	numCats: number;
	numDogs: number;
}

const Header: React.FC<HeaderProps> = ({ numCats, numDogs }) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>There are currently {numCats} Cats in this Cat App</h2>
		<h2 className='header__title'>There are also {numDogs} rather lost Dogs in this Cat App</h2>
	</header>
);

export default Header;
