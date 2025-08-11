/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Truck, Heart, Users, MapPin, Clock, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À Propos - O\'Litchi | Food Truck Cuisine Afro-Antillaise aux Ulis',
  description: 'Découvrez l\'histoire d\'O\'Litchi, food truck spécialisé dans la cuisine afro-antillaise authentique. Passion, tradition et saveurs des Antilles aux Ulis (91).',
  keywords: 'food truck, cuisine antillaise, bokits, grillades, Les Ulis, Essonne, cuisine africaine',
};

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Truck className="w-6 h-6 mr-2" />
              <span className="font-semibold">Notre Histoire</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              L'histoire d'<span className="text-yellow-300">O'Litchi</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Un voyage culinaire authentique qui vous transporte directement aux Antilles,
              au cœur de l'Essonne.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-6">
                  <Heart className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Notre Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Partager l'authenticité des saveurs antillaises
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  O'Litchi est né de la passion de faire découvrir la richesse culinaire 
                  afro-antillaise aux habitants des Ulis et de l'Essonne. Chaque plat est 
                  préparé avec amour selon les recettes traditionnelles transmises de 
                  génération en génération.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Notre food truck sillonne la région pour vous offrir une expérience 
                  gustative unique, alliant tradition et modernité dans un cadre convivial 
                  et authentique.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/truck.webp"
                  alt="Food truck O'Litchi"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  quality={95}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ce qui nous guide au quotidien dans notre passion culinaire
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Authenticité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Recettes traditionnelles et ingrédients authentiques pour 
                    préserver le goût véritable des Antilles.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Convivialité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Un accueil chaleureux et une ambiance familiale pour 
                    partager ensemble l'amour de la cuisine antillaise.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Qualité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Produits frais sélectionnés avec soin et préparation 
                    artisanale pour une qualité irréprochable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Spécialités */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos Spécialités
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez les saveurs authentiques qui font notre réputation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🥖</div>
                <h3 className="font-bold text-lg mb-2">Bokits</h3>
                <p className="text-gray-600 text-sm">
                  Pain frit traditionnel garni selon vos envies
                </p>
                <Badge className="mt-3 bg-orange-100 text-orange-600">Spécialité</Badge>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🍗</div>
                <h3 className="font-bold text-lg mb-2">Grillades</h3>
                <p className="text-gray-600 text-sm">
                  Poulet boucané et grillades marinées aux épices créoles
                </p>
                <Badge className="mt-3 bg-green-100 text-green-600">Populaire</Badge>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🍠</div>
                <h3 className="font-bold text-lg mb-2">Accompagnements</h3>
                <p className="text-gray-600 text-sm">
                  Manioc, plantain, riz créole et légumes pays
                </p>
                <Badge className="mt-3 bg-yellow-100 text-yellow-600">Traditionnel</Badge>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🥤</div>
                <h3 className="font-bold text-lg mb-2">Boissons</h3>
                <p className="text-gray-600 text-sm">
                  Jus de fruits tropicaux et boissons rafraîchissantes
                </p>
                <Badge className="mt-3 bg-blue-100 text-blue-600">Rafraîchissant</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Informations Pratiques
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-orange-600" />
                    Localisation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Nous nous déplaçons principalement dans la région des Ulis 
                    et de l'Essonne (91).
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/localisation">
                      Voir nos emplacements
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-green-600" />
                    Horaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p><strong>Lundi - Vendredi:</strong> 11h30 - 22h00</p>
                    <p><strong>Samedi:</strong> 12h00 - 23h00</p>
                    <p><strong>Dimanche:</strong> Fermé</p>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
                      Nous contacter
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à découvrir nos saveurs ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Venez nous rendre visite et laissez-vous transporter par l'authenticité 
            de la cuisine afro-antillaise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/menu">
                Découvrir notre menu
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/localisation-horaires">
                <MapPin className="w-5 h-5 mr-2" />
                Nous trouver
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}