import Image from "next/image";

const features = [
	{
		title: "Secure Storage",
		description: "Store all your digital assets securely in one place.",
		icon: "/icons/security.svg",
	},
	{
		title: "Digital Wills",
		description: "Create and manage your digital wills with ease.",
		icon: "/icons/will.svg",
	},
	{
		title: "Beneficiary Management",
		description: "Designate and manage beneficiaries for your assets.",
		icon: "/icons/beneficiary.svg",
	},
	// Add more features as needed
];

const Features = () => {
	return (
		<section
			id="features"
			class="bg-cover bg-center bg-no-repeat sm:min-h-screen flex items-center justify-center"
			style={{ backgroundImage: "url('/family.png')" }} // Make sure the image path is correct
		>
			<div class="bg-white bg-opacity-40 backdrop-blur-sm py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 rounded-lg shadow-lg">
				{/* Title and Subtitle */}
				<div class="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
					<h2 class="mb-4 text-2xl sm:text-4xl font-semibold text-gray-900">Designed for Digital Legacy Planning and Inheritance</h2>
					<p class="text-gray-500 sm:text-xl">Ensure secure legacy planning</p>
				</div>

				{/* Features Section */}
				<div class="space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0 text-center">
					{features.map((feature, index) => (
						<div key={index} class="glass-card p-6 rounded-lg shadow-md bg-white bg-opacity-50 backdrop-blur-lg">
							{/* Icon */}
							<div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 mx-auto">
								<Image src={feature.icon} alt={feature.title} class="w-10 h-10" width={40} height={40} />
							</div>
							{/* Feature Title */}
							<h3 class="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
							{/* Feature Description */}
							<p class="text-gray-500">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
