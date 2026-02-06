import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const values = [
    {
        title: 'Authenticité',
        description: 'Recettes traditionnelles et ingrédients authentiques pour préserver le goût véritable des Antilles.',
        icon: '/images/icons/book.webp'
    },
    {
        title: 'Convivialité',
        description: 'Un accueil chaleureux et une ambiance familiale pour partager ensemble l\'amour de la cuisine antillaise.',
        icon: '/images/icons/coeur.webp'
    },
    {
        title: 'Qualité',
        description: 'Produits frais sélectionnés avec soin et préparation artisanale pour une qualité irréprochable.',
        icon: '/images/icons/toque-2.webp'
    }
];

export function AboutValues() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Nos Valeurs
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ce qui nous guide au quotidien dans notre passion culinaire
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {values.map((item, index) => (
                        <Card
                            key={index}
                            variant="product"
                            className="text-center hover:-translate-y-2 transition-transform duration-300 p-8 flex flex-col items-center bg-card shadow-sm border-none"
                        >
                            <div className="relative w-20 h-20 mb-6 drop-shadow-md">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
