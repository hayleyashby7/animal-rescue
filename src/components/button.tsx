interface ButtonProps {
	btnClassNames: string;
	onClick: () => void;
	text: string;
}

const Button: React.FC<ButtonProps> = ({ btnClassNames, onClick, text }) => {
	return (
		<button className={btnClassNames} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
