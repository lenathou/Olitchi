import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export function AboutStory() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6 shadow-sm border border-primary/20">
                            <div className="relative w-5 h-5">
                                <Image src="/images/icons/about.webp" alt="" fill className="object-contain" />
                            </div>
                            <span className="font-bold text-sm">Notre Mission</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                            Partager l'authenticité des <span className="text-primary">saveurs antillaises</span>
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                O'Litchi est né de la passion de faire découvrir la richesse culinaire
                                afro-antillaise aux habitants des Ulis et de l'Essonne.
                            </p>
                            <p>
                                Chaque plat est préparé avec amour selon les recettes traditionnelles transmises de
                                génération en génération. Notre food truck sillonne la région pour vous offrir une expérience
                                gustative unique, alliant tradition et modernité dans un cadre convivial.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />

                        <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/truck.webp"
                                alt="Food truck O'Litchi"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                quality={95}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
