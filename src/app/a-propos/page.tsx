/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutStory } from '@/components/about/AboutStory';
import { AboutValues } from '@/components/about/AboutValues';
import { AboutSpecialties } from '@/components/about/AboutSpecialties';
import { AboutInfo } from '@/components/about/AboutInfo';
import { AboutCTA } from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'À Propos - O\'Litchi | Food Truck Cuisine Afro-Antillaise aux Ulis',
  description: 'Découvrez l\'histoire d\'O\'Litchi, food truck spécialisé dans la cuisine afro-antillaise authentique. Passion, tradition et saveurs des Antilles aux Ulis (91).',
  keywords: 'food truck, cuisine antillaise, bokits, grillades, Les Ulis, Essonne, cuisine africaine',
};

export default function AProposPage() {
  return (
    <div className="min-h-screen text-foreground">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutSpecialties />
      <AboutInfo />
      <AboutCTA />
    </div>
  );
}