// Hooks et utilitaires pour la gestion responsive desktop/mobile
// Selon les règles: useMediaQuery côté client pour swap de composants

import { breakpoints } from './ui-tokens';

// Types pour les breakpoints
export type Breakpoint = keyof typeof breakpoints;

// Types pour les exports
export type NavigationItem = 'mobile' | 'tablet' | 'desktop';
export type SocialLink = string;
export type NavItem = {
  id: string;
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

// Queries media prédéfinies
export const mediaQueries = {
  // Mobile first approach
  mobile: `(max-width: ${breakpoints.md})`, // < 768px
  tablet: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`, // 768px - 1023px
  desktop: `(min-width: ${breakpoints.lg})`, // >= 1024px
  
  // Queries spécifiques
  isMobile: `(max-width: ${breakpoints.md})`,
  isTablet: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  isDesktop: `(min-width: ${breakpoints.lg})`,
  
  // Orientation
  isPortrait: '(orientation: portrait)',
  isLandscape: '(orientation: landscape)',
  
  // Touch devices
  isTouchDevice: '(hover: none) and (pointer: coarse)',
  isHoverDevice: '(hover: hover) and (pointer: fine)',
} as const;

// Hook personnalisé pour media queries (à utiliser côté client uniquement)
// Note: Ce hook nécessite react-responsive ou une implémentation similaire
export const useMediaQuery = (query: string): boolean => {
  // Cette implémentation sera complétée avec react-responsive
  // ou une solution similaire selon les besoins
  if (typeof window === 'undefined') {
    return false; // SSR safe
  }
  
  return window.matchMedia(query).matches;
};

// Utilitaires pour les classes CSS conditionnelles
export const getResponsiveClasses = {
  // Masquer sur mobile
  hideOnMobile: 'hidden md:block',
  // Masquer sur desktop
  hideOnDesktop: 'block md:hidden',
  // Afficher seulement sur mobile
  showOnMobile: 'block md:hidden',
  // Afficher seulement sur desktop
  showOnDesktop: 'hidden md:block',
  // Afficher seulement sur tablet
  showOnTablet: 'hidden md:block lg:hidden',
} as const;

// Container queries classes (pour les composants qui les supportent)
export const containerClasses = {
  // Base responsive avec container queries
  responsive: '@container',
  // Grilles adaptatives
  gridMobile: '@container (max-width: 767px)',
  gridTablet: '@container (min-width: 768px) and (max-width: 1023px)',
  gridDesktop: '@container (min-width: 1024px)',
} as const;

// Types pour les variantes de composants
export type DeviceVariant = 'mobile' | 'tablet' | 'desktop';
export type ComponentVariant = 'default' | 'mobile' | 'desktop';

// Fonction utilitaire pour déterminer la variante selon l'appareil
export const getDeviceVariant = (): DeviceVariant => {
  if (typeof window === 'undefined') {
    return 'desktop'; // SSR default
  }
  
  if (window.matchMedia(mediaQueries.mobile).matches) {
    return 'mobile';
  }
  
  if (window.matchMedia(mediaQueries.tablet).matches) {
    return 'tablet';
  }
  
  return 'desktop';
};