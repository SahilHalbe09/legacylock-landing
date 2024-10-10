import Image from "next/image";

const features = [
	{
		title: "Secure Storage",
		description: "Store all your digital assets securely in one place.",
		// icon: "/icons/security.svg",
	},
	{
		title: "Digital Wills",
		description: "Create and manage your digital wills with ease.",
		// icon: "/icons/will.svg",
	},
	{
		title: "Beneficiary Management",
		description: "Designate and manage beneficiaries for your assets.",
		// icon: "/icons/beneficiary.svg",
	},
	// Add more features as needed
];

const Features = () => {
	return (
		<section id="features" className="p-8">
			<h2 className="text-3xl font-bold text-center mb-8">Features</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{features.map((feature, index) => (
					<div key={index} className="flex flex-col items-center text-center">
						{/* <Image src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" width={16} height={16} /> */}
						<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
						<p className="text-gray-600">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
