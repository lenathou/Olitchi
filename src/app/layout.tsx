import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import NextImage from "next/image";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const fraunces = Fraunces({
	variable: "--font-fraunces",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Olitchi91 - Food Truck Gastronomique en Essonne",
		template: "%s | Olitchi91",
	},
	description:
		"Découvrez Olitchi91, food truck gastronomique en Essonne. Une cuisine de rue fusion entre la Guadeloupe et la Côte d'Ivoire, à base d’ingrédients frais et locaux.",
	keywords: [
		"food truck",
		"Essonne",
		"Les Ulis",
		"Évry",
		"Corbeil",
		"cuisine afro-antillaise",
		"burgers",
		"tacos",
		"bokit",
		"gastronomique",
	],
	authors: [{ name: "olitchi91" }],
	creator: "olitchi91",
	publisher: "olitchi91",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://olitchi91.fr"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "olitchi91 - Food Truck Gastronomique en Essonne",
		description:
			"Découvrez notre cuisine afro-antillaise à base de produits frais, fusion entre Guadeloupe et Côte d’Ivoire. Rendez-vous sur les marchés d’Île-de-France.",
		url: "https://olitchi91.fr",
		siteName: "olitchi91",
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "olitchi91 - Food Truck Gastronomique en Essonne",
		description:
			"Cuisine afro-antillaise sur les marchés d'Essonne. Plats faits maison, produits frais et ambiance conviviale.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className="scroll-smooth">
			<head>
				<meta name="theme-color" content="#ffffff" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</head>
			<body
				className={cn(
					geistSans.variable,
					geistMono.variable,
					fraunces.variable,
					"antialiased"
				)}
			>
				{/* Global Background Image */}
				<div className="fixed inset-0 -z-50 w-full h-full">
					<NextImage
						src="/images/hero-bg-test.webp"
						alt=""
						fill
						className="object-cover"
						quality={90}
						priority
					/>
				</div>

				<header>
					<Header />
				</header>
				<main role="main" className="">
					{children}
				</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
