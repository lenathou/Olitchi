import { Metadata } from 'next';
import { ModernMenuSection } from '@/components/menu/ModernMenuSection';

export const metadata: Metadata = {
  title: 'Menu - O\'Litchi | Spécialités Afro-Antillaises aux Ulis',
  description: 'Découvrez notre menu de cuisine afro-antillaise authentique : bokits, grillades, accompagnements traditionnels et boissons. Food truck O\'Litchi aux Ulis.',
  keywords: 'menu, bokits, grillades, cuisine antillaise, food truck, Les Ulis, Essonne, plats créoles',
};

export default function MenuPage() {
  return <ModernMenuSection />;
}
