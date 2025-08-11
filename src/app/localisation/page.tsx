/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Phone, Navigation, Calendar, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Localisation & Horaires - O\'Litchi | Où nous trouver aux Ulis',
  description: 'Découvrez où trouver le food truck O\'Litchi aux Ulis et en Essonne. Horaires, emplacements et planning de notre cuisine afro-antillaise mobile.',
  keywords: 'localisation, horaires, food truck, Les Ulis, Essonne, emplacement, planning',
};

export const config: Record<string, never> = {};

export default function LocalisationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <MapPin className="w-6 h-6 mr-2" />
              <span className="font-semibold">Nous Trouver</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Où trouver <span className="text-yellow-300">O'Litchi</span> ?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Découvrez nos emplacements et horaires pour ne jamais rater nos spécialités !
            </p>
          </div>
        </div>
      </section>

      {/* Emplacement Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre Emplacement Principal
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Retrouvez-nous régulièrement à notre emplacement de référence aux Ulis
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Place du Marché - Les Ulis
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Avenue de la Dordogne, 91940 Les Ulis
                      </p>
                      <Badge className="bg-green-100 text-green-600">
                        Emplacement principal
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-semibold text-gray-900">Horaires réguliers</p>
                        <p className="text-gray-600">Lundi au Vendredi : 11h30 - 22h00</p>
                        <p className="text-gray-600">Samedi : 12h00 - 23h00</p>
                        <p className="text-gray-600">Dimanche : Fermé</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Navigation className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-semibold text-gray-900">Accès</p>
                        <p className="text-gray-600">Parking gratuit disponible</p>
                        <p className="text-gray-600">Accessible en transport en commun</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <Button asChild className="w-full">
                      <a href="tel:+33123456789">
                        <Phone className="w-5 h-5 mr-2" />
                        Appelez avant de venir
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
              
              <div>
                <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Carte interactive</p>
                    <p>Place du Marché, Les Ulis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning de la Semaine */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Planning de la Semaine
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Notre planning peut varier selon les événements et la météo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Lundi</span>
                    <Badge className="bg-green-100 text-green-600">Ouvert</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      11h30 - 22h00
                    </p>
                    <p className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Place du Marché, Les Ulis
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Mardi</span>
                    <Badge className="bg-green-100 text-green-600">Ouvert</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      11h30 - 22h00
                    </p>
                    <p className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Place du Marché, Les Ulis
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Mercredi</span>
                    <Badge className="bg-green-100 text-green-600">Ouvert</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      11h30 - 22h00
                    </p>
                    <p className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Place du Marché, Les Ulis
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Jeudi</span>
                    <Badge className="bg-green-100 text-green-600">Ouvert</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      11h30 - 22h00
                    </p>
                    <p className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Place du Marché, Les Ulis
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Vendredi</span>
                    <Badge className="bg-green-100 text-green-600">Ouvert</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      11h30 - 22h00
                    </p>
                    <p className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Place du Marché, Les Ulis
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Samedi</span>
                    <Badge className="bg-blue-100 text-blue-600">Horaires étendus</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      12h00 - 23h00
                    </p>
                    <p className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Place du Marché, Les Ulis
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-8 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">Dimanche - Fermé</h3>
                    <p className="text-red-700">
                      Nous prenons une pause bien méritée le dimanche pour préparer 
                      de nouvelles spécialités pour la semaine suivante !
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Autres Emplacements */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Autres Emplacements
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nous nous déplaçons également dans d'autres lieux de l'Essonne
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-orange-600" />
                    Événements Privés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Nous nous déplaçons pour vos événements : mariages, anniversaires, 
                    fêtes d'entreprise...
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
                      Demander un devis
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-600" />
                    Marchés Locaux
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Retrouvez-nous occasionnellement sur les marchés de l'Essonne 
                    et événements locaux.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+33123456789">
                      Appelez pour le planning
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Navigation className="w-5 h-5 mr-2 text-blue-600" />
                    Zones de Livraison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Service traiteur disponible dans un rayon de 20km autour 
                    des Ulis pour vos événements.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
                      En savoir plus
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils Pratiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conseils Pratiques
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-orange-600" />
                    Avant de venir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Appelez-nous pour confirmer notre présence</li>
                    <li>• Vérifiez la météo (nous fermons en cas de conditions extrêmes)</li>
                    <li>• Prévoyez du temps d'attente aux heures de pointe</li>
                    <li>• Parking gratuit disponible à proximité</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-green-600" />
                    Bon à savoir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Paiement en espèces et carte bancaire acceptés</li>
                    <li>• Commandes à emporter uniquement</li>
                    <li>• Temps de préparation : 10-15 minutes</li>
                    <li>• Suivez-nous sur les réseaux pour les actualités</li>
                  </ul>
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
            Prêt à nous rendre visite ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Appelez-nous pour confirmer notre présence et découvrir nos spécialités du jour !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <a href="tel:+33123456789">
                <Phone className="w-5 h-5 mr-2" />
                01 23 45 67 89
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/menu">
                Découvrir notre menu
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}