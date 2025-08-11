// Export centralisé de tous les constants O'Litchi
// Selon les règles: centraliser tous les tokens/données UI réutilisables

// Tokens UI et design system
export * from './ui-tokens';

// Media queries et responsive
export * from './media-queries';

// Navigation et liens
export * from './navigation';

// Re-export des types principaux pour faciliter l'import
export type {
  Breakpoint,
  DeviceVariant,
  ComponentVariant,
  NavigationItem,
  SocialLink,
  NavItem,
} from './media-queries';

export type { NavItem as NavigationNavItem } from './navigation';