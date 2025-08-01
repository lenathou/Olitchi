/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Star, ChefHat, Heart, Truck } from "lucide-react";
import Image from "next/image";


export default function Home() {
	return (
		<div className="bg-background">
			{/* Hero Section */}
  <section className="relative h-screen w-full flex items-center justify-start px-8 bg-neutral-900 text-white overflow-hidden">
      {/* Image de fond avec taille ajustée via scale */}
       <div className="absolute right-0 top-[2px] z-0">
        <Image
          src="/images/hero-meal.webp"
          alt="Plats afro-antillais"
          width={1000} // ⬅️ ajuste ici selon le niveau de zoom souhaité
          height={800}
          quality={90}
          priority
          className="object-contain max-w-none"
        />
      </div>

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

      <div className="relative z-20 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Saveurs Authentiques
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Découvrez notre cuisine de rue gastronomique avec des ingrédients frais et locaux
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#location"
            className="inline-flex items-center bg-white text-black px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-200 transition"
          >
            <MapPin className="w-5 h-5 mr-2 text-primary" />
            Nous trouver
          </a>
        </div>
      </div>

      {/* Camion - légèrement agrandi et repositionné */}
       <div className="absolute bottom-0 left-[-20px] z-20">
        <Image
          src="/images/truck.webp"
          alt="Camion Olitchi"
          width={500} // ⬅️ ajuste selon le rendu souhaité
          height={120}
          quality={95}
          priority
          className="object-contain"
        />
      </div>
    </section>
			{/* Menu Section */}
			<section id="menu" className="py-16">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4">Notre Menu</h2>
						<p className="text-muted-foreground text-lg">
							Des plats préparés avec passion
						</p>
					</div>

					<Tabs defaultValue="burgers" className="w-full">
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="burgers">Burgers</TabsTrigger>
							<TabsTrigger value="tacos">Tacos</TabsTrigger>
							<TabsTrigger value="sides">Accompagnements</TabsTrigger>
							<TabsTrigger value="drinks">Boissons</TabsTrigger>
						</TabsList>

						<TabsContent value="burgers" className="mt-8">
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								{[
									{
										name: "Classic Burger",
										price: "12€",
										description:
											"Steak haché, salade, tomate, oignon, sauce maison",
										popular: true,
									},
									{
										name: "Cheese Deluxe",
										price: "14€",
										description:
											"Double steak, fromage fondu, bacon croustillant",
									},
									{
										name: "Veggie Supreme",
										price: "11€",
										description: "Galette végétale, avocat, légumes grillés",
									},
								].map((item, index) => (
									<Card key={index} className="relative">
										{item.popular && (
											<Badge className="absolute -top-2 -right-2 bg-red-500">
												<Star className="w-3 h-3 mr-1" />
												Populaire
											</Badge>
										)}
										<CardHeader>
											<CardTitle className="flex justify-between items-center">
												{item.name}
												<span className="text-primary font-bold">
													{item.price}
												</span>
											</CardTitle>
										</CardHeader>
										<CardContent>
											<CardDescription>{item.description}</CardDescription>
											<Button className="w-full mt-4">Ajouter au panier</Button>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="tacos" className="mt-8">
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								{[
									{
										name: "Taco Poulet",
										price: "9€",
										description: "Poulet mariné, salade, tomate, sauce épicée",
									},
									{
										name: "Taco Bœuf",
										price: "10€",
										description: "Émincé de bœuf, oignons caramélisés, fromage",
									},
									{
										name: "Taco Végétarien",
										price: "8€",
										description: "Haricots noirs, avocat, légumes croquants",
									},
								].map((item, index) => (
									<Card key={index}>
										<CardHeader>
											<CardTitle className="flex justify-between items-center">
												{item.name}
												<span className="text-primary font-bold">
													{item.price}
												</span>
											</CardTitle>
										</CardHeader>
										<CardContent>
											<CardDescription>{item.description}</CardDescription>
											<Button className="w-full mt-4">Ajouter au panier</Button>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="sides" className="mt-8">
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
								{[
									{ name: "Frites Maison", price: "4€" },
									{ name: "Onion Rings", price: "5€" },
									{ name: "Salade César", price: "6€" },
									{ name: "Nuggets", price: "7€" },
								].map((item, index) => (
									<Card key={index}>
										<CardHeader>
											<CardTitle className="text-center">{item.name}</CardTitle>
										</CardHeader>
										<CardContent className="text-center">
											<span className="text-2xl font-bold text-primary">
												{item.price}
											</span>
											<Button className="w-full mt-4" variant="outline">
												Ajouter
											</Button>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="drinks" className="mt-8">
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
								{[
									{ name: "Coca-Cola", price: "3€" },
									{ name: "Jus d'Orange", price: "4€" },
									{ name: "Eau Minérale", price: "2€" },
									{ name: "Café", price: "2.5€" },
								].map((item, index) => (
									<Card key={index}>
										<CardHeader>
											<CardTitle className="text-center">{item.name}</CardTitle>
										</CardHeader>
										<CardContent className="text-center">
											<span className="text-2xl font-bold text-primary">
												{item.price}
											</span>
											<Button className="w-full mt-4" variant="outline">
												Ajouter
											</Button>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			<Separator />

			{/* About Section */}
			<section id="about" className="py-16 bg-muted/50">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-6">Notre Histoire</h2>
							<p className="text-lg text-muted-foreground mb-6">
								Depuis 2020, olitchi91 parcourt les rues pour vous offrir une
								expérience culinaire unique. Notre passion pour la cuisine de
								qualité et les ingrédients frais nous guide chaque jour.
							</p>
							<div className="flex items-center space-x-4 mb-4">
								<ChefHat className="h-6 w-6 text-primary" />
								<span>Chef expérimenté avec 15 ans d'expérience</span>
							</div>
							<div className="flex items-center space-x-4 mb-4">
								<Heart className="h-6 w-6 text-primary" />
								<span>Ingrédients locaux et de saison</span>
							</div>
							<div className="flex items-center space-x-4">
								<Star className="h-6 w-6 text-primary" />
								<span>Plus de 1000 clients satisfaits</span>
							</div>
						</div>
						<div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg h-96 flex items-center justify-center">
							<Truck className="h-32 w-32 text-white" />
						</div>
					</div>
				</div>
			</section>

			{/* Location & Hours */}
			<section id="location" className="py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12">
						Où nous trouver
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<MapPin className="mr-2 h-5 w-5" />
									Localisation
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="mb-4">
									Nous nous déplaçons dans toute l'Essonne !
								</p>
								<div className="space-y-2">
									<p>
										<strong>Lundi-Mercredi:</strong> Évry-Courcouronnes
									</p>
									<p>
										<strong>Jeudi-Vendredi:</strong> Corbeil-Essonnes
									</p>
									<p>
										<strong>Weekend:</strong> Marchés locaux
									</p>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<Clock className="mr-2 h-5 w-5" />
									Horaires
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<p>
										<strong>Lundi-Vendredi:</strong> 11h30 - 14h30 & 18h00 -
										22h00
									</p>
									<p>
										<strong>Samedi:</strong> 12h00 - 23h00
									</p>
									<p>
										<strong>Dimanche:</strong> 12h00 - 21h00
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-16 bg-muted/50">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12">
						Questions Fréquentes
					</h2>
					<div className="max-w-3xl mx-auto">
						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>Comment passer commande ?</AccordionTrigger>
								<AccordionContent>
									Vous pouvez passer commande directement sur place ou nous
									appeler à l'avance. Nous acceptons les paiements en espèces et
									par carte bancaire.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>
									Proposez-vous des options végétariennes ?
								</AccordionTrigger>
								<AccordionContent>
									Oui ! Nous avons plusieurs options végétariennes et véganes
									dans notre menu, préparées avec des ingrédients frais et
									savoureux.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>
									Peut-on vous réserver pour un événement ?
								</AccordionTrigger>
								<AccordionContent>
									Absolument ! Nous proposons nos services pour les événements
									privés, entreprises, et festivités. Contactez-nous pour un
									devis personnalisé.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</section>
		</div>
	);
}
