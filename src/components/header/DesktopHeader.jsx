import { useEffect, useState } from 'react';

function DesktopHeader() {
	const [lastUpdated, setLastUpdated] = useState('');

	useEffect(() => {
		const currentDate = new Date();
		// Format: Month Year
		setLastUpdated(`${currentDate.toLocaleString('en-us', { month: 'long' })} ${currentDate.getFullYear()}`);
	}, []);

	return (
		<header className="desktop-header-1 d-flex align-items-start flex-column">
			{/* logo image */}
			<div className="site-logo">
				<a href="index.html">
					<h2>D.A.N_3002</h2>
				</a>
			</div>
			{/* main menu */}
			<nav>
				<ul className="vertical-menu scrollspy">
					<li className="active">
						<a href="#home">
							<i className="icon-home" />
							Home
						</a>
					</li>
					<li>
						<a href="#about">
							<i className="icon-user-following" />
							About
						</a>
					</li>
					<li>
						<a href="#experience">
							<i className="icon-graduation" />
							Resume
						</a>
					</li>
					<li>
						<a href="#contact">
							<i className="icon-bubbles" />
							Contact
						</a>
					</li>
				</ul>
			</nav>
			{/* site footer */}
			<div className="footer">
				{/* copyright text */}
				<span className="copyright">
					©
					{' '}
					{new Date().getFullYear()}
					{' '}
					<b>Nguyễn Đình Anh</b>
					.
				</span>
				<br />
				<span className="copyright">
					Last Updated:
					{' '}
					{ lastUpdated }
				</span>
			</div>
		</header>
	);
}

export default DesktopHeader;
