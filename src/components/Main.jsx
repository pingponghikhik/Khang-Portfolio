import Section from './Section';
import HomeSection from './home/HomeSection';
import AboutSection from './about/AboutSection';
import ResumeSection from './resume/ResumeSection';
import ContactSection from './contact/ContactSection';

function Main() {
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
