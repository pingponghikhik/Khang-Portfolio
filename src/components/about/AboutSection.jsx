/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

import data from '../../data/data';
// import useAnalyticsEventTracker from '../../hooks/useAnalyticsEventTracker';

function AboutSection() {
	const [isLoading] = useState(true);
	// const gaEventTracker = useAnalyticsEventTracker();

	const { PUBLIC_URL } = process.env;
	const { about, contactEmail } = data;

	const currentDomain = window.location.hostname;

	useEffect(() => {
		if (!isLoading) {
			$('.count').counterUp({
				delay: 10,
				time: 1500,
			});
		}
	}, [isLoading]);

	return (
		<div>
			<div className="row">
				<div className="col-md-3">
					<div className="text-center text-md-left">
						<img
							src={`${PUBLIC_URL}/images/dan3002/profile.png`}
							alt="Nguyễn Đình Anh Profile"
						/>
					</div>
					<div className="spacer d-md-none d-lg-none" data-height={30} />
				</div>
				<div className="col-md-9 triangle-left-md triangle-top-sm">
					<div className="rounded bg-dark shadow-light padding-30">
						<div className="row">
							<div className="col-md-12">
								<p>
									I'm
									{' '}
									<b>Nguyễn Đình Anh,</b>
								</p>
								{about.paragraphs.map((item) => (
									<p>{item}</p>
								))}
								<div
									className="spacer d-md-none d-lg-none"
									data-height={30}
								/>
							</div>
							<div className="col-md-12">
								<hr className="breakline" />

								<ul className="info-list row">
									<li className="col-md-6">
										<i className="fas fa-angle-right" />
										<b>Website: </b>
										<a
											href={`https://${currentDomain}`}
											target="_blank"
											rel="noreferrer"
										>
											{currentDomain}
										</a>
									</li>
									<li className="col-md-6">
										<i className="fas fa-angle-right" />
										<b>Email: </b>
										<a
											href={`mailto:${contactEmail}`}
											target="_blank"
											rel="noreferrer"
										>
											{contactEmail}
										</a>
									</li>
									<li className="col-md-6">
										<i className="fas fa-angle-right" />
										<b>Phone: </b>
										<span>(+84) 914085246</span>
									</li>
									<li className="col-md-6">
										<i className="fas fa-angle-right" />
										<b>Languages: </b>
										<span>Vietnamese, English</span>
									</li>
									{/* <li>
										<i className="fas fa-angle-right" />
										<b>Location:</b>
										<span>Ha Noi, Viet Nam</span>
									</li> */}
								</ul>

								<div className="mt-3">
									<a
										href={`${PUBLIC_URL}/Resume_Nguyễn Đình Anh.pdf`}
										className="btn btn-default"
										target="_blank"
										rel="noreferrer"
										onClick={() => {
											gtag('event', 'rum-page-scroll', {
												event_label:
													'Click Download Resume',
												event_category: 'About Section',
												non_interaction: true,
											});
										}}
									>
										Download Resume
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
