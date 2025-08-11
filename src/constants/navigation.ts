// Navigation et liens pour O'Litchi
// Selon les règles SEO: pages définies et une seule URL par contenu


// Navigation principale selon les règles SEO
export const mainNavigation = [
  {
    id: 'accueil' as const,
    label: 'Accueil',
    href: '/',
    description: 'Page d\'accueil O\'Litchi',
  },
  {
    id: 'menu' as const,
    label: 'Menu',
    href: '/menu',
    description: 'Découvrez notre menu de cuisine afro-antillaise',
  },
  {
    id: 'a-propos' as const,
    label: 'À Propos',
    href: '/a-propos',
    description: 'L\'histoire d\'O\'Litchi food truck',
  },
  {
    id: 'localisation' as const,
    label: 'Localisation',
    href: '/localisation-horaires',
    description: 'Où nous trouver aux Ulis',
  },
  {
    id: 'contact' as const,
    label: 'Contact',
    href: '/contact',
    description: 'Contactez O\'Litchi',
  },
] as const;

// Navigation footer avec pages légales
export const footerNavigation = [
  ...mainNavigation,
  {
    id: 'mentions-legales' as const,
    label: 'Mentions Légales',
    href: '/mentions-legales',
    description: 'Mentions légales O\'Litchi',
  },
  {
    id: 'confidentialite' as const,
    label: 'Confidentialité',
    href: '/confidentialite',
    description: 'Politique de confidentialité',
  },
] as const;

// Navigation mobile (peut être différente si nécessaire)
export const mobileNavigation = mainNavigation;

// Liens sociaux et contact
export const socialLinks = {
  facebook: {
    label: 'Facebook',
    href: '#', // À remplacer par le vrai lien
    icon: 'facebook',
  },
  instagram: {
    label: 'Instagram',
    href: '#', // À remplacer par le vrai lien
    icon: 'instagram',
  },
  phone: {
    label: 'Téléphone',
    href: 'tel:+33123456789', // À remplacer par le vrai numéro
    icon: 'phone',
  },
  email: {
    label: 'Email',
    href: 'mailto:contact@olitchi.fr', // À remplacer par le vrai email
    icon: 'email',
  },
} as const;

// Informations de localisation (pour SEO local)
export const businessInfo = {
  name: 'O\'Litchi',
  description: 'Food truck de cuisine afro-antillaise aux Ulis',
  address: {
    street: '', // À compléter
    city: 'Les Ulis',
    postalCode: '91940',
    country: 'France',
  },
  contact: {
    phone: '+33123456789', // À remplacer
    email: 'contact@olitchi.fr', // À remplacer
  },
  hours: {
    // À compléter selon les horaires réels
    monday: 'Fermé',
    tuesday: '11h30-14h30',
    wednesday: '11h30-14h30',
    thursday: '11h30-14h30',
    friday: '11h30-14h30',
    saturday: '11h30-14h30',
    sunday: 'Fermé',
  },
  cuisine: 'Cuisine afro-antillaise',
  serviceArea: 'Les Ulis et environs',
} as const;

// Types pour les exports
export type NavigationItem = typeof mainNavigation[number];
export type SocialLink = keyof typeof socialLinks;
export type NavItem = {
  id: string;
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};