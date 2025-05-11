function MobileHeader() {
	return (
		<header className="mobile-header-1">
			<div className="container">
				{/* menu icon */}
				<div className="menu-icon d-inline-flex mr-4">
					<button type="button">
						<span />
					</button>
				</div>
				{/* logo image */}
				<div className="site-logo">
					<a href="index.html">
						<h2>T_K_D</h2>
					</a>
				</div>
			</div>
		</header>
	);
}

export default MobileHeader;
