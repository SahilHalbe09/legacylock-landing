"use client";

import React, { useState } from "react";
import axios from "axios";

const WaitingList = () => {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus(null);

		try {
			const response = await axios.post("https://formspree.io/f/xrbgzjvj", { email });
			if (response.status === 200) {
				setStatus({ success: true, message: "Thank you for joining the waiting list!" });
				setEmail("");
			} else {
				setStatus({ success: false, message: "Something went wrong. Please try again." });
			}
		} catch (error) {
			setStatus({ success: false, message: "Something went wrong. Please try again." });
		}
	};

	return (
		<section id="waiting-list" className="p-8 bg-blue-50">
			<h2 className="text-3xl font-bold text-center mb-8">Join the Waiting List</h2>
			<div className="max-w-md mx-auto">
				<form onSubmit={handleSubmit} className="flex flex-col">
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="p-3 mb-4 border border-gray-300 rounded-md"
						required
					/>
					<button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
						{status && status.success ? "Joined" : "Join Now"}
					</button>
					{status && <div className={`mt-4 text-center ${status.success ? "text-green-500" : "text-red-500"}`}>{status.message}</div>}
				</form>
			</div>
		</section>
	);
};

export default WaitingList;
