import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WaitingList from "./components/WaitingList";
import Layout from "./components/Layout";

export default function Home() {
	return (
		<main>
			<Layout>
				<Hero />
				<Features />
				<HowItWorks />
				<Benefits />
				<WaitingList />
			</Layout>
		</main>
	);
}
