"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Truck } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-background border-t py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8">
					<div>
						<Link href="/" className="flex items-center space-x-2 mb-4">
							<Truck className="h-6 w-6 text-primary" />
							<span className="text-xl font-bold">olitchi91</span>
						</Link>
						<p className="text-muted-foreground">
							Votre food truck de confiance en Essonne
						</p>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Contact</h3>
						<div className="space-y-2 text-muted-foreground">
							<div className="flex items-center">
								<Phone className="h-4 w-4 mr-2" />
								<span>06 12 34 56 78</span>
							</div>
							<div className="flex items-center">
								<MapPin className="h-4 w-4 mr-2" />
								<span>Essonne (91)</span>
							</div>
						</div>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Suivez-nous</h3>
						<div className="flex space-x-4">
							<Button variant="outline" size="sm">
								Facebook
							</Button>
							<Button variant="outline" size="sm">
								Instagram
							</Button>
						</div>
					</div>
				</div>

				<Separator className="my-8" />

				<div className="text-center text-muted-foreground">
					<p>&copy; 2024 olitchi91. Tous droits réservés.</p>
				</div>
			</div>
		</footer>
	);
}
