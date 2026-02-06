"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { mainNavigation } from "@/constants/navigation";
import { MobileNavPremium } from "./MobileNavPremium";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
				? "bg-background/80 backdrop-blur-md shadow-sm py-2"
				: "bg-transparent py-4"
				}`}
		>
			<nav className="container mx-auto px-4 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="relative h-10 w-32 md:h-12 md:w-40 transition-transform hover:scale-105">
					<Image
						src="/olitchy-logo.svg"
						alt="O'Litchy"
						fill
						className="object-contain"
						priority
					/>
				</Link>

				{/* Desktop Right Side: Nav + CTA */}
				<div className="hidden md:flex items-center gap-8">
					{/* Navigation Links */}
					<div className="flex space-x-8">
						{mainNavigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`text-lg font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-gray-800"
									}`}
							>
								{item.label}
							</Link>
						))}
					</div>

					{/* CTA Button */}
					<Button asChild>
						<Link href="/localisation-horaires">
							<MapPin className="w-4 h-4 mr-2" />
							Nous Trouver
						</Link>
					</Button>
				</div>

				{/* Mobile Navigation */}
				<MobileNavPremium />
			</nav>
		</header>
	);
}

