/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Phone, Clock, CreditCard, Users, ChefHat } from 'lucide-react';
import Link from 'next/link';
import { useIsMobile } from '@/lib/hooks';
import { socialLinks } from '@/constants/navigation';
import { SectionBadge } from '@/components/ui/section-badge';

interface FAQSectionProps {
  className?: string;
}

const faqData = [
  {
    id: 'commande',
    question: 'Comment passer commande ?',
    answer: 'Vous pouvez passer commande directement sur place auprès de notre équipe. Nous acceptons les paiements en espèces et par carte bancaire. Pour les événements privés, contactez-nous à l\'avance pour organiser votre commande.',
    icon: Phone,
    category: 'Commande'
  },
  {
    id: 'vegetarien',
    question: 'Proposez-vous des options végétariennes ?',
    answer: 'Oui ! Nous proposons plusieurs options végétariennes dans notre menu, notamment des bokits aux légumes grillés et des accompagnements variés. Tous nos plats végétariens sont préparés avec des ingrédients frais et savoureux.',
    icon: ChefHat,
    category: 'Menu'
  },
  {
    id: 'evenements',
    question: 'Peut-on vous réserver pour un événement ?',
    answer: 'Absolument ! Nous proposons nos services pour les événements privés, mariages, fêtes d\'entreprise, et festivités. Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.',
    icon: Users,
    category: 'Événements'
  },
  {
    id: 'horaires',
    question: 'Quels sont vos horaires d\'ouverture ?',
    answer: 'Nous sommes ouverts du lundi au dimanche avec des horaires variables selon notre localisation. Consultez notre planning hebdomadaire ou suivez-nous sur les réseaux sociaux pour connaître notre position en temps réel.',
    icon: Clock,
    category: 'Horaires'
  },
  {
    id: 'paiement',
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer: 'Nous acceptons les paiements en espèces et par carte bancaire (sans contact également). Pour les événements privés, nous pouvons également accepter les virements bancaires.',
    icon: CreditCard,
    category: 'Paiement'
  },
  {
    id: 'allergenes',
    question: 'Informations sur les allergènes ?',
    answer: 'Nous prenons les allergies alimentaires très au sérieux. N\'hésitez pas à nous informer de vos allergies lors de votre commande. Nos équipes pourront vous renseigner sur la composition de nos plats et vous proposer des alternatives adaptées.',
    icon: HelpCircle,
    category: 'Santé'
  },
  {
    id: 'localisation',
    question: 'Comment connaître votre position exacte ?',
    answer: 'Notre planning hebdomadaire est disponible sur notre site web et nos réseaux sociaux. Nous mettons également à jour notre position en temps réel sur nos pages Facebook et Instagram.',
    icon: MessageCircle,
    category: 'Localisation'
  },
  {
    id: 'specialites',
    question: 'Quelles sont vos spécialités ?',
    answer: 'Nos spécialités sont les bokits (pain antillais garni), les grillades de poulet et bœuf marinés, et l\'atiéké-poisson. Tous nos plats sont préparés selon des recettes traditionnelles afro-antillaises avec des ingrédients frais.',
    icon: ChefHat,
    category: 'Menu'
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export function FAQSection({ className = '' }: FAQSectionProps) {
  const isMobile = useIsMobile();

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-12 lg:mb-16">
          <SectionBadge icon={HelpCircle} label="FAQ" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à vos questions les plus courantes
            sur notre service, notre menu et nos modalités.
          </p>
        </div>

        <div className={`grid gap-8 lg:gap-12 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'
          }`}>
          {/* FAQ principale */}
          <div className={isMobile ? 'order-1' : 'lg:col-span-2 order-1'}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border rounded-lg px-6 py-2 bg-background hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-lg">{item.question}</div>
                          <div className="text-sm text-primary font-medium mt-1">{item.category}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-2">
                      <div className="ml-16 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Sidebar avec informations complémentaires */}
          <div className={`space-y-6 ${isMobile ? 'order-2' : 'order-2'}`}>
            {/* Contact rapide */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Besoin d'aide ?</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Vous ne trouvez pas la réponse à votre question ?
                    Notre équipe est là pour vous aider !
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                    <Link href="/contact">
                      Nous contacter
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Catégories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Catégories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const count = faqData.filter(item => item.category === category).length;
                    return (
                      <div key={category} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <span className="font-medium">{category}</span>
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Liens utiles */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/menu">
                      <ChefHat className="w-4 h-4 mr-2" />
                      Voir le menu complet
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/localisation">
                      <Clock className="w-4 h-4 mr-2" />
                      Horaires & localisation
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/a-propos">
                      <Users className="w-4 h-4 mr-2" />
                      À propos de nous
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Réseaux sociaux */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Suivez-nous !</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Restez informés de notre position en temps réel et de nos nouveautés.
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href={socialLinks.facebook.href} target="_blank">
                      Facebook
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href={socialLinks.instagram.href} target="_blank">
                      Instagram
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;