"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Truck, Menu, MapPin, Clock, Phone, Star } from "lucide-react";
import Link from "next/link";

const navigationItems = [
	{ href: "/menu", label: "Menu", icon: Star },
	{ href: "#about", label: "À propos", icon: Truck },
	{ href: "#location", label: "Localisation", icon: MapPin },
	{ href: "#contact", label: "Contact", icon: Phone },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
			<nav className="container mx-auto px-4 py-4 flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<Truck className="h-8 w-8 text-primary" />
					<span className="text-2xl font-bold">olitchi91</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-6">
					{navigationItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="hover:text-primary transition-colors font-medium"
						>
							{item.label}
						</a>
					))}
				</div>

				{/* Desktop CTA Button */}
				<div className="hidden md:block">
					<Button>Commander</Button>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden flex items-center space-x-2">
					<Button size="sm">Commander</Button>
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Ouvrir le menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="w-[300px] sm:w-[400px]">
							<SheetHeader>
								<SheetTitle className="flex items-center space-x-2 text-left">
									<Truck className="h-6 w-6 text-primary" />
									<span className="text-xl font-bold">olitchi91</span>
								</SheetTitle>
							</SheetHeader>

							<div className="mt-8 space-y-6">
								<div className="space-y-4">
									<h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
										Navigation
									</h3>
									<nav className="space-y-2">
										{navigationItems.map((item) => {
											const Icon = item.icon;
											return (
												<a
													key={item.href}
													href={item.href}
													onClick={handleLinkClick}
													className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors group"
												>
													<Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
													<span className="font-medium">{item.label}</span>
												</a>
											);
										})}
									</nav>
								</div>

								<Separator />

								<div className="space-y-4">
									<h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
										Informations
									</h3>
									<div className="space-y-3 text-sm">
										<div className="flex items-center space-x-3">
											<Clock className="h-4 w-4 text-muted-foreground" />
											<div>
												<p className="font-medium">Horaires</p>
												<p className="text-muted-foreground">
													Lun-Ven: 11h30-22h
												</p>
											</div>
										</div>
										<div className="flex items-center space-x-3">
											<Phone className="h-4 w-4 text-muted-foreground" />
											<div>
												<p className="font-medium">Téléphone</p>
												<p className="text-muted-foreground">06 12 34 56 78</p>
											</div>
										</div>
										<div className="flex items-center space-x-3">
											<MapPin className="h-4 w-4 text-muted-foreground" />
											<div>
												<p className="font-medium">Zone</p>
												<p className="text-muted-foreground">Essonne (91)</p>
											</div>
										</div>
									</div>
								</div>

								<Separator />

								<div className="space-y-4">
									<Button
										className="w-full"
										size="lg"
										onClick={handleLinkClick}
									>
										Commander maintenant
									</Button>
									<div className="flex space-x-2">
										<Button variant="outline" size="sm" className="flex-1">
											Facebook
										</Button>
										<Button variant="outline" size="sm" className="flex-1">
											Instagram
										</Button>
									</div>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
