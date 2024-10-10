import React from "react";

const Footer = () => {
	return (
		<footer className="p-4 bg-gray-800 text-white text-center">
			<p>&copy; {new Date().getFullYear()} LegacyLock. All rights reserved.</p>
			<div className="mt-2">
				<a href="/privacy-policy" className="mx-2 hover:underline">
					Privacy Policy
				</a>
				<a href="/contact" className="mx-2 hover:underline">
					Contact
				</a>
			</div>
		</footer>
	);
};

export default Footer;
