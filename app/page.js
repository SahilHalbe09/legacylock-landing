import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WaitingList from "./components/WaitingList";
import Layout from "./components/Layout";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Testimonial from "./components/Testimonial";

export default function Home() {
	return (
		<main>
			<Layout>
				<Hero />
				<Features />
				<HowItWorks />
				<Stats />
				<Benefits />
				<Testimonial />
				<WaitingList />
				<FAQ />
			</Layout>
		</main>
	);
}
