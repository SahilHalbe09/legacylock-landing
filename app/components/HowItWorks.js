import Image from "next/image";

const steps = [
	{
		title: "Sign Up",
		description: "Create your LegacyLock account securely.",
		// icon: "/icons/signup.svg",
	},
	{
		title: "Upload Assets",
		description: "Upload and organize your digital assets.",
		// icon: "/icons/upload.svg",
	},
	{
		title: "Set Your Wishes",
		description: "Define your digital will and beneficiaries.",
		// icon: "/icons/wishes.svg",
	},
	// Add more steps if necessary
];

const HowItWorks = () => {
	return (
		<section id="how-it-works" className="p-8 bg-gray-50">
			<h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
			<div className="flex flex-col md:flex-row justify-around">
				{steps.map((step, index) => (
					<div key={index} className="flex flex-col items-center text-center mb-6 md:mb-0">
						{/* <Image src={step.icon} alt={step.title} className="w-16 h-16 mb-4" width={16} height={16} /> */}
						<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
						<p className="text-gray-600">{step.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
