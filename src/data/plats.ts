interface PlatBase {
	id: string;
	nom: string;
	description: string;
	prix: number;
	image?: string;
}

export const plats: {
	readonly bokits: readonly PlatBase[];
	readonly grillades: readonly PlatBase[];
	readonly autres: readonly PlatBase[];
} = {
	bokits: [
		{
			id: "bokit-jf",
			nom: "Bokit Jambon-Fromage",
			description: "",
			prix: 8,
			image: "/images/produits/bokit-jambon.webp",
		},
		{
			id: "bokit-poulet",
			nom: "Bokit Poulet Boukané",
			description: "Sauce Chien",
			prix: 8,
			image: "/images/produits/bokit-poulet.webp",
		},
		{
			id: "bokit-morue",
			nom: "Bokit Morue",
			description: "Sauce Chien",
			prix: 9,
			image: "/images/plats/bokit-morue.jpg",
		},
		{
			id: "bokit-complet",
			nom: "Bokit Complet",
			description: "Jambon ou Poulet, œuf, emmental, sauce chien",
			prix: 9.5,
			image: "/images/produits/bokit-complet.webp",
		},
	],
	grillades: [
		{
			id: "grillade-cuisse",
			nom: "Cuisse de poulet - Ailes de poulet",
			description: "Crudités Choux, Carottes",
			prix: 5,
			image: "/images/produits/cuisse-poulet.webp",
		},
		{
			id: "brochette-poulet",
			nom: "Brochette de Poulet",
			description: "",
			prix: 2,
			image: "/images/produits/brochette-poulet.webp",
		},
		{
			id: "brochette-boeuf",
			nom: "Brochette de Bœuf",
			description: "",
			prix: 3,
			image: "/images/produits/brochette-boeuf.webp",
		},
	],
	autres: [
		{
			id: "atieke-poisson",
			nom: "Atiéké-Poisson",
			description: "Semoule de Manioc",
			prix: 8,
			image: "/images/produits/atieke.webp",
		},
	],
} as const;
