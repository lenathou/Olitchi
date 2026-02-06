import { Metadata } from 'next';
import { LocalisationHero } from '@/components/localisation/LocalisationHero';
import { LocalisationToday } from '@/components/localisation/LocalisationToday';
import { LocalisationSchedule } from '@/components/localisation/LocalisationSchedule';
import { LocalisationArea } from '@/components/localisation/LocalisationArea';
import { LocalisationEvents } from '@/components/localisation/LocalisationEvents';

export const metadata: Metadata = {
  title: 'Localisation - O\'Litchi | Où trouver notre food truck ?',
  description: 'Retrouvez le planning de la semaine du food truck O\'Litchi en Essonne (91). Les Ulis, et alentours. Venez déguster nos spécialités afro-antillaises.',
};

export default function LocalisationPage() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">

        {/* En-tête pleine largeur */}
        <LocalisationHero />

        {/* Grille Desktop : 2 colonnes / Mobile : 1 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 md:mt-12">

          {/* Ligne 1 - Gauche : Aujourd'hui */}
          <div className="w-full">
            <LocalisationToday />
          </div>

          {/* Ligne 1 - Droite : Planning */}
          <div className="w-full">
            <LocalisationSchedule />
          </div>

          {/* Ligne 2 - Gauche : Zone */}
          <div className="w-full">
            <LocalisationArea />
          </div>

          {/* Ligne 2 - Droite : Events */}
          <div className="w-full">
            <LocalisationEvents />
          </div>

        </div>
      </div>
    </div>
  );
}