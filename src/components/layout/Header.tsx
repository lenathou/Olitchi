"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Truck, Menu, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";
import { mainNavigation } from "@/constants/navigation";

// Mapping des icônes pour chaque page
const iconMap = {
	'menu': Star,
	'a-propos': Truck,
	'localisation': MapPin,
	'contact': Phone,
} as const;

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = () => {
		setIsOpen(false);
	};

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
						className="object-contain" // object-contain to preserve aspect ratio
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
				<div className="md:hidden flex items-center space-x-2">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Ouvrir le menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="w-[300px] sm:w-[400px]">
							<SheetHeader>
								<SheetTitle className="text-left">
									<div className="relative h-10 w-32">
										<Image
											src="/olitchy-logo.svg"
											alt="O'Litchy"
											fill
											className="object-contain object-left"
										/>
									</div>
								</SheetTitle>
							</SheetHeader>

							<div className="mt-8 space-y-6">
								<div className="space-y-4">
									<h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
										Navigation
									</h3>
									<nav className="space-y-2">
										{mainNavigation.map((item) => {
											const Icon = iconMap[item.id as keyof typeof iconMap] || Star;
											return (
												<Link
													key={item.href}
													href={item.href}
													onClick={handleLinkClick}
													className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors group"
												>
													<Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
													<span className="font-medium">{item.label}</span>
												</Link>
											);
										})}
									</nav>
								</div>

								<Separator />

								<div className="space-y-4">
									<Button
										variant="default"
										size="lg"
										onClick={handleLinkClick}
										className="w-full bg-gradient-premium-orange rounded-full"
										asChild
									>
										<Link href="/commander">
											Commander
										</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
