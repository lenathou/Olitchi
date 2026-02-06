import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export function AboutHero() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg-test.webp"
                    alt="Background Texture"
                    fill
                    className="object-cover opacity-10"
                    priority
                />
                <div className="absolute inset-0 " />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center mb-6">
                    <div className="relative w-12 h-12 md:w-16 md:h-16">
                        <Image
                            src="/images/icons/book.webp"
                            alt="Livre"
                            fill
                            className="object-contain drop-shadow-md"
                        />
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 text-foreground">
                    L'histoire d'<span className="text-primary italic">O'Litchi</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
                    Un voyage culinaire authentique qui vous transporte directement aux Antilles,
                    au cœur de l'Essonne.
                </p>
            </div>
        </section>
    );
}
