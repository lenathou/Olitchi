/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact - O\'Litchi | Contactez notre Food Truck aux Ulis',
  description: 'Contactez O\'Litchi pour vos questions, réservations ou événements privés. Téléphone, email et localisation de notre food truck cuisine afro-antillaise.',
  keywords: 'contact, food truck, réservation, événement privé, Les Ulis, Essonne, cuisine antillaise',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <MessageCircle className="w-6 h-6 mr-2" />
              <span className="font-semibold">Nous Contacter</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactez <span className="text-yellow-300">O'Litchi</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Une question ? Une envie de nos spécialités ? N'hésitez pas à nous contacter !
            </p>
          </div>
        </div>
      </section>

      {/* Informations de Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Téléphone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Appelez-nous directement</p>
                  <a href="tel:+33123456789" className="text-orange-600 font-semibold hover:underline">
                    01 23 45 67 89
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Écrivez-nous</p>
                  <a href="mailto:contact@olitchi.fr" className="text-green-600 font-semibold hover:underline">
                    contact@olitchi.fr
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Localisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Principalement aux Ulis</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/localisation">
                      Voir nos emplacements
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg">Horaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p><strong>Lun-Ven:</strong> 11h30-22h</p>
                    <p><strong>Samedi:</strong> 12h-23h</p>
                    <p><strong>Dimanche:</strong> Fermé</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulaire de Contact */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envoyez-nous un message
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Vous avez une question sur nos plats, vous souhaitez organiser un événement 
                  privé ou simplement nous faire part de vos suggestions ? Nous serions ravis 
                  de vous entendre !
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <Input id="nom" type="text" required className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input id="email" type="email" required className="w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input id="telephone" type="tel" className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <Input id="sujet" type="text" required className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      required 
                      className="w-full min-h-[120px]" 
                      placeholder="Décrivez votre demande..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Événements Privés
                </h2>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Organisez votre événement</h3>
                    <p className="text-gray-600 mb-4">
                      O'Litchi se déplace pour vos événements privés : anniversaires, 
                      mariages, événements d'entreprise, fêtes de quartier...
                    </p>
                    <ul className="text-gray-600 space-y-2 mb-6">
                      <li>• Menus personnalisés selon vos goûts</li>
                      <li>• Service traiteur disponible</li>
                      <li>• Déplacement dans l'Essonne et alentours</li>
                      <li>• Devis gratuit sur demande</li>
                    </ul>
                    <Button asChild className="w-full">
                      <a href="tel:+33123456789">
                        <Phone className="w-5 h-5 mr-2" />
                        Appelez pour un devis
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
                    <p className="text-gray-600 mb-4">
                      Restez informés de nos emplacements et nouveautés !
                    </p>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <span className="mr-2">📱</span>
                        Facebook - O'Litchi Food Truck
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <span className="mr-2">📸</span>
                        Instagram - @olitchi_foodtruck
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rapide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Questions Fréquentes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Acceptez-vous les réservations ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Pour les événements privés, oui ! Pour le service quotidien, 
                    nous fonctionnons sans réservation, premier arrivé, premier servi.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Proposez-vous des options végétariennes ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolument ! Nous avons plusieurs options végétariennes dans notre menu, 
                    notamment nos bokits aux légumes et nos accompagnements traditionnels.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quels moyens de paiement acceptez-vous ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nous acceptons les espèces, cartes bancaires et paiements sans contact 
                    pour votre commodité.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Où puis-je vous trouver aujourd'hui ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Consultez notre page localisation ou appelez-nous directement 
                    pour connaître notre emplacement du jour !
                  </p>
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
            Une envie soudaine de nos spécialités ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Appelez-nous pour connaître notre emplacement du jour !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <a href="tel:+33123456789">
                <Phone className="w-5 h-5 mr-2" />
                01 23 45 67 89
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/localisation">
                <MapPin className="w-5 h-5 mr-2" />
                Voir nos emplacements
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}