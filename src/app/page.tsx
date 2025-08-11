"use client";

import { HeroSection } from "@/components/homepage/HeroSection";
import { MenuSection } from "@/components/homepage/MenuSection";
import { AboutSection } from "@/components/homepage/AboutSection";
import { LocationSection } from "@/components/homepage/LocationSection";
import { FAQSection } from "@/components/homepage/FAQSection";
import { CTASection } from "@/components/homepage/CTASection";
import { Separator } from "@/components/ui/separator";

/**
 * Page d'accueil O'Litchi - Architecture Desktop/Mobile
 *
 * Structure modulaire avec composants réutilisables :
 * - HeroSection : Section hero avec adaptation mobile/desktop
 * - MenuSection : Aperçu du menu avec données réelles
 * - AboutSection : Histoire et valeurs d'O'Litchi
 * - LocationSection : Localisation et horaires
 * - FAQSection : Questions fréquentes
 * - CTASection : Appels à l'action finaux
 *
 * Chaque composant gère sa propre logique desktop/mobile via useIsMobile()
 */
export default function Home() {
	return (
		<div className="bg-background">
			{/* Section Hero - Point d'entrée principal */}
			<HeroSection />

			<Separator className="opacity-20" />

			{/* Section Menu - Aperçu des spécialités */}
			<MenuSection />

			<Separator className="opacity-20" />

			{/* Section À Propos - Histoire et valeurs */}
			<AboutSection />

			<Separator className="opacity-20" />

			{/* Section Localisation - Où nous trouver */}
			<LocationSection />

			<Separator className="opacity-20" />

			{/* Section FAQ - Questions fréquentes */}
			<FAQSection />

			{/* Section CTA - Appels à l'action finaux */}
			<CTASection />
		</div>
	);
}
