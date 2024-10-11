import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "LegacyLock - Secure Your Digital Legacy",
	description: "LegacyLock helps you manage your digital assets and ensure your wishes are honored.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`font-WorkSans ${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
