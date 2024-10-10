import React from "react";

const benefits = [
	"Peace of mind knowing your digital legacy is secure.",
	"Easy management of all your digital assets in one place.",
	"Ensure your wishes are honored without complications.",
	"Access control ensures only authorized beneficiaries can access your assets.",
	// Add more benefits as needed
];

const Benefits = () => {
	return (
		<section id="benefits" className="p-8">
			<h2 className="text-3xl font-bold text-center mb-8">Why Choose LegacyLock?</h2>
			<ul className="max-w-2xl mx-auto list-disc list-inside text-gray-700">
				{benefits.map((benefit, index) => (
					<li key={index} className="mb-4">
						{benefit}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Benefits;
