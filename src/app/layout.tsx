import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Antonio Borrero",
	description: "Personal web portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${montserrat.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
