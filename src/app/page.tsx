"use client";

import { HeroSection } from "@/components/homepage/HeroSection";
import { MenuSection } from "@/components/homepage/MenuSection";
import { AboutSection } from "@/components/homepage/AboutSection";
import { LocationSection } from "@/components/homepage/LocationSection";
import { FAQSection } from "@/components/homepage/FAQSection";
import { CTASection } from "@/components/homepage/CTASection";

export default function Home() {
	return (
		<div>
			{/* Section Hero - Point d'entrée principal */}
			<HeroSection />

			{/* Section Menu - Aperçu des spécialités */}
			<MenuSection />

			{/* Section À Propos - Histoire et valeurs */}
			<AboutSection />

			{/* Section Localisation - Où nous trouver */}
			<LocationSection />

			{/* Section FAQ - Questions fréquentes */}
			<FAQSection />

			{/* Section CTA - Appels à l'action finaux */}
			<CTASection />
		</div>
	);
}
