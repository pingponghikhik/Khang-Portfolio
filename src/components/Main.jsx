import { useEffect } from 'react';

import Section from './Section';
import HomeSection from './home/HomeSection';
import AboutSection from './about/AboutSection';
import ResumeSection from './resume/ResumeSection';
import ContactSection from './contact/ContactSection';

function Main() {
	useEffect(() => {
		$('.carousel-wrapper').slick({
			dots: true,
			arrows: true,
			speed: 200,
			slidesToShow: 3,
			slidesToScroll: 3,
			swipeToSlide: false,
			swipe: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						swipeToSlide: true,
						swipe: true,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
						swipeToSlide: true,
						swipe: true,
					},
				},
			],
		});
	}, []);

	return (
		<main className="content">
			<HomeSection />
			<Section
				id="about"
				title="About Me"
			>
				<AboutSection />
			</Section>
			<Section
				id="experience"
				title="Resume"
			>
				<ResumeSection />
			</Section>
			<Section
				id="contact"
				title="Get In Touch"
			>
				<ContactSection />
			</Section>

			<div className="spacer" data-height={96} />
		</main>
	);
}

export default Main;
