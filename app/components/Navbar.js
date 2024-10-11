// app/components/Navbar.js

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Function to toggle the mobile menu
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Prevent body from scrolling when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		// Cleanup when component unmounts
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [isOpen]);

	return (
		<>
			{/* Navbar */}
			<nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 md:static" role="navigation">
				<div className="container mx-auto px-4 py-3 flex justify-between items-center">
					{/* Logo */}
					<Link href="/">
						<Image src="/logo-nav-v2.png" className="md:size-auto" width={150} height={40} alt="LegacyLock Logo" />
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex">
						<Link href="#features" className="mx-3 font-Nunito font-medium text-gray-700 hover:text-blue-600 transition">
							Features
						</Link>

						<Link href="#how-it-works" className="mx-3 font-Nunito font-medium text-gray-700 hover:text-blue-600 transition">
							How It Works
						</Link>

						<Link href="#benefits" className="mx-3 font-Nunito font-medium text-gray-700 hover:text-blue-600 transition">
							Benefits
						</Link>
					</div>
					<Link href="#waiting-list" className="mx-3 font-Nunito font-medium ml-24 hidden md:flex text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
						Join Waitlist
					</Link>
					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="text-gray-700 align-middle hover:text-blue-600 focus:outline-none focus:text-blue-600 transition"
							aria-label="Toggle menu"
							aria-expanded={isOpen}
						>
							{/* Hamburger Icon */}
							{!isOpen ? (
								<svg className="h-8 w-8 transition-transform duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
								</svg>
							) : (
								/* Close Icon */
								<svg
									className="h-8 w-8 transition-transform duration-300 ease-in-out transform rotate-180"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu Overlay */}
				{isOpen && <div className="fixed inset-0 bg-white opacity-100 -z-10 transition-opacity duration-300 ease-in-out" onClick={toggleMenu}></div>}

				{/* Mobile Menu Content */}
				<div
					className={`md:hidden fixed top-20 left-0 w-full bg-white z-50 transform ${
						isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
					} origin-top transition-transform duration-300 ease-in-out`}
				>
					<div className="flex flex-col px-4 py-2 space-y-2">
						<Link href="#features" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
							Features
						</Link>

						<Link href="#how-it-works" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
							How It Works
						</Link>

						<Link href="#benefits" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
							Benefits
						</Link>

						<Link href="#waiting-list" onClick={toggleMenu} className="block text-center px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded">
							Join the Waiting List
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
