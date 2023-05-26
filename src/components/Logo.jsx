import "../styles/Logo.scss";

function Logo({ fontSize }) {
	return (
		<h1 className="header__title" style={{ fontSize }}>
			my
			<span className="header__title-logo">Library</span>
		</h1>
	);
}

export default Logo;
