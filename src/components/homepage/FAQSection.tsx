'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useIsMobile } from '@/lib/hooks';
import { socialLinks } from '@/constants/navigation';
import { SectionBadge } from '@/components/ui/section-badge';
import { motion, useReducedMotion } from 'framer-motion';
import {
  sectionHeaderStagger,
  listStagger,
  fadeUp,
  cardReveal,
  fadeLeft,
  fadeRight,
  scaleReveal,
  scrollRevealConfig,
} from '@/lib/animations/shared-animations';

interface FAQSectionProps {
  className?: string;
}

const faqData = [
  {
    id: 'commande',
    question: 'Comment passer commande ?',
    answer: 'Vous pouvez passer commande directement sur place auprès de notre équipe. Nous acceptons les paiements en espèces et par carte bancaire. Pour les événements privés, contactez-nous à l\'avance pour organiser votre commande.',
    iconSrc: '/images/icons/contact.webp',
    category: 'Commande'
  },
  {
    id: 'vegetarien',
    question: 'Proposez-vous des options végétariennes ?',
    answer: 'Oui ! Nous proposons plusieurs options végétariennes dans notre menu, notamment des bokits aux légumes grillés et des accompagnements variés. Tous nos plats végétariens sont préparés avec des ingrédients frais et savoureux.',
    iconSrc: '/images/icons/local.webp',
    category: 'Menu'
  },
  {
    id: 'evenements',
    question: 'Peut-on vous réserver pour un événement ?',
    answer: 'Absolument ! Nous proposons nos services pour les événements privés, mariages, fêtes d\'entreprise, et festivités. Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.',
    iconSrc: '/images/icons/calendar.webp',
    category: 'Événements'
  },
  {
    id: 'horaires',
    question: 'Quels sont vos horaires d\'ouverture ?',
    answer: 'Nous sommes ouverts du lundi au dimanche avec des horaires variables selon notre localisation. Consultez notre planning hebdomadaire ou suivez-nous sur les réseaux sociaux pour connaître notre position en temps réel.',
    iconSrc: '/images/icons/calendar.webp',
    category: 'Horaires'
  },
  {
    id: 'paiement',
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer: 'Nous acceptons les paiements en espèces et par carte bancaire (sans contact également). Pour les événements privés, nous pouvons également accepter les virements bancaires.',
    iconSrc: '/images/icons/contact.webp',
    category: 'Paiement'
  },
  {
    id: 'allergenes',
    question: 'Informations sur les allergènes ?',
    answer: 'Nous prenons les allergies alimentaires très au sérieux. N\'hésitez pas à nous informer de vos allergies lors de votre commande. Nos équipes pourront vous renseigner sur la composition de nos plats et vous proposer des alternatives adaptées.',
    iconSrc: '/images/icons/warning.webp',
    category: 'Santé'
  },
  {
    id: 'localisation',
    question: 'Comment connaître votre position exacte ?',
    answer: 'Notre planning hebdomadaire est disponible sur notre site web et nos réseaux sociaux. Nous mettons également à jour notre position en temps réel sur nos pages Facebook et Instagram.',
    iconSrc: '/images/icons/local.webp',
    category: 'Localisation'
  },
  {
    id: 'specialites',
    question: 'Quelles sont vos spécialités ?',
    answer: 'Nos spécialités sont les bokits (pain antillais garni), les grillades de poulet et bœuf marinés, et l\'atiéké-poisson. Tous nos plats sont préparés selon des recettes traditionnelles afro-antillaises avec des ingrédients frais.',
    iconSrc: '/images/icons/toque-2.webp',
    category: 'Menu'
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export function FAQSection({ className = '' }: FAQSectionProps) {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  const revealProps = shouldReduceMotion ? {} : scrollRevealConfig;

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {/* ── Header (scroll reveal stagger) ── */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          variants={sectionHeaderStagger}
          {...revealProps}
        >
          <motion.div variants={fadeUp}>
            <SectionBadge icon={HelpCircle} label="FAQ" />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            variants={fadeUp}
          >
            Questions Fréquentes
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeUp}
          >
            Trouvez rapidement les réponses à vos questions les plus courantes
            sur notre service, notre menu et nos modalités.
          </motion.p>
        </motion.div>

        <div className={`grid gap-12 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'}`}>
          {/* ── FAQ Accordion (scroll reveal + stagger) ── */}
          <motion.div
            className={isMobile ? 'order-2' : 'lg:col-span-2 order-1'}
            variants={listStagger}
            {...revealProps}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item) => (
                <motion.div key={item.id} variants={cardReveal}>
                  <AccordionItem
                    value={item.id}
                    className="border-none bg-card rounded-3xl px-6 py-2 shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 mb-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center space-x-4 w-full">
                        <Image
                          src={item.iconSrc}
                          alt={item.category}
                          width={32}
                          height={32}
                          className="w-10 h-10 object-contain shrink-0"
                        />
                        <div className="text-left flex-1">
                          <div className="font-serif font-bold text-lg text-foreground">{item.question}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-0">
                      <div className="ml-14 pr-4 text-muted-foreground leading-relaxed text-base">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* ── Sidebar (scroll reveal) ── */}
          <motion.div
            className={`relative bg-secondary/10 pt-14 pb-8 px-6 lg:px-8 rounded-[2.5rem] border border-border shadow-sm h-full flex flex-col ${isMobile ? 'order-1 mb-12' : 'order-2'}`}
            variants={fadeRight}
            {...revealProps}
          >
            {/* En-tête Flottant "Pill" */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-premium-orange text-white px-8 py-4 rounded-full shadow-[0_4px_10px_rgba(240,122,42,0.4)] flex items-center gap-3 whitespace-nowrap z-10 border-2 border-[var(--premium-tertiary-start)]">
              <Image
                src="/images/icons/info.webp"
                alt="Infos"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <h3 className="text-lg font-bold font-serif tracking-wide">Centre d&apos;aide</h3>
            </div>

            <div className="space-y-8 flex-1">
              {/* Contact Block */}
              <div className="bg-background/60 p-6 rounded-3xl border border-primary/10 text-center">
                <Image
                  src="/images/icons/contact.webp"
                  alt="Contact"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-serif font-bold mb-2">Une autre question ?</h3>
                <p className="text-muted-foreground text-sm mb-4">Notre équipe est disponible pour vous répondre.</p>
                <Button className="w-full bg-gradient-premium-orange rounded-full text-white shadow-md hover:scale-105 transition-transform" asChild>
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>

              {/* Liens utiles */}
              <div className="space-y-3">
                <h4 className="font-serif font-bold text-lg px-2">Accès rapide</h4>
                <div className="grid gap-2">
                  <Link href="/menu" className="flex items-center justify-between p-4 rounded-2xl bg-white border border-border hover:border-primary/50 hover:shadow-md transition-all group">
                    <span className="font-medium text-foreground">Notre Menu</span>
                    <Image src="/images/icons/local.webp" alt="Menu" width={20} height={20} className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link href="/localisation" className="flex items-center justify-between p-4 rounded-2xl bg-white border border-border hover:border-primary/50 hover:shadow-md transition-all group">
                    <span className="font-medium text-foreground">Localisation</span>
                    <Image src="/images/icons/local.webp" alt="Localisation" width={20} height={20} className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Tag Cloud / Categories */}
              <div>
                <h4 className="font-serif font-bold text-lg px-2 mb-3">Sujets</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span key={category} className="px-3 py-1 bg-white border border-primary/10 rounded-full text-xs font-semibold text-primary/80">
                      {category}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;