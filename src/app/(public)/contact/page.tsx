/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactFAQ } from '@/components/contact/ContactFAQ';
import { ContactCTA } from '@/components/contact/ContactCTA';

export const metadata: Metadata = {
  title: 'Contact - O\'Litchi | Contactez notre Food Truck aux Ulis',
  description: 'Contactez O\'Litchi pour vos questions, réservations ou événements privés. Téléphone, email et localisation de notre food truck cuisine afro-antillaise.',
  keywords: 'contact, food truck, réservation, événement privé, Les Ulis, Essonne, cuisine antillaise',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-foreground">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
}