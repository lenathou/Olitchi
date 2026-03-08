"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { mainNavigation } from "@/constants/navigation";
import { MobileNavPremium } from "./MobileNavPremium";

import { useCartStore, selectCartTotalItems } from "@/store/cartStore";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mounted, setMounted] = useState(false);
	const isScrolledRef = useRef(false);
	const rafId = useRef<number | null>(null);
	const totalItems = useCartStore(selectCartTotalItems);

	useEffect(() => {
		setMounted(true);
		const handleScroll = () => {
			if (rafId.current !== null) return;
			rafId.current = requestAnimationFrame(() => {
				const scrolled = window.scrollY > 20;
				if (scrolled !== isScrolledRef.current) {
					isScrolledRef.current = scrolled;
					setIsScrolled(scrolled);
				}
				rafId.current = null;
			});
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (rafId.current !== null) {
				cancelAnimationFrame(rafId.current);
			}
		};
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

				{/* Right Side: Links + Cart + CTA + Mobile Toggle */}
				<div className="flex items-center gap-2 md:gap-8">
					{/* Navigation Links (Desktop) */}
					<div className="hidden md:flex space-x-8">
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

					{/* Actions (Cart & CTA) */}
					<div className="flex items-center gap-2 md:gap-4">
						{/* Cart Indicator */}
						<Link href="/panier" className={`relative p-2 transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-gray-800"}`}>
							<ShoppingBag className="w-6 h-6" />
							{mounted && totalItems > 0 && (
								<span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-primary text-white text-[10px] font-bold px-[5px] py-[2px] rounded-full min-w-[20px] text-center border-2 border-background shadow-sm">
									{totalItems}
								</span>
							)}
						</Link>

						{/* CTA Button (Desktop) */}
						<div className="hidden md:block">
							<Button asChild>
								<Link href="/localisation-horaires">
									<MapPin className="w-4 h-4 mr-2" />
									Nous Trouver
								</Link>
							</Button>
						</div>

						{/* Mobile Navigation Toggle (Mobile) */}
						<MobileNavPremium />
					</div>
				</div>
			</nav>
		</header>
	);
}
