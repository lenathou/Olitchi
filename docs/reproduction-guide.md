# Guide de Reproduction - Configuration Desktop/Mobile

## Guide Étape par Étape

Ce guide vous permet de reproduire la configuration desktop/mobile dans un nouveau projet Next.js.

## Prérequis

- Node.js 18+
- Next.js 15+
- TypeScript
- Tailwind CSS v4

## Étape 1 : Initialisation du Projet

### 1.1 Créer un nouveau projet Next.js

```bash
npx create-next-app@latest mon-projet --typescript --tailwind --eslint --app
cd mon-projet
```

### 1.2 Installer les dépendances nécessaires

```bash
# Dépendances UI (optionnel, selon vos besoins)
npm install @radix-ui/react-navigation-menu @radix-ui/react-dialog @radix-ui/react-slot
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react

# Dépendances pour les animations (optionnel)
npm install tw-animate-css
```

### 1.3 Configuration Tailwind CSS v4

Modifiez `src/app/globals.css` :

```css
@import "tailwindcss";

@theme inline {
  /* Couleurs de base */
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(222.2 84% 4.9%);
  --color-primary: hsl(222.2 47.4% 11.2%);
  --color-primary-foreground: hsl(210 40% 98%);
  --color-secondary: hsl(210 40% 96%);
  --color-secondary-foreground: hsl(222.2 84% 4.9%);
  --color-muted: hsl(210 40% 96%);
  --color-muted-foreground: hsl(215.4 16.3% 46.9%);
  --color-accent: hsl(210 40% 96%);
  --color-accent-foreground: hsl(222.2 84% 4.9%);
  --color-border: hsl(214.3 31.8% 91.4%);
  --color-input: hsl(214.3 31.8% 91.4%);
  --color-ring: hsl(222.2 84% 4.9%);
  
  /* Rayons de bordure */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --radius: 0.5rem;
}

.dark {
  --color-background: hsl(222.2 84% 4.9%);
  --color-foreground: hsl(210 40% 98%);
  /* ... autres couleurs dark mode */
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## Étape 2 : Structure des Dossiers

Créez la structure suivante :

```
src/
├── constants/
│   ├── ui-tokens.ts
│   ├── media-queries.ts
│   ├── navigation.ts
│   └── index.ts
├── lib/
│   └── hooks/
│       ├── useMediaQuery.ts
│       └── index.ts
└── components/
    ├── ui/           # Composants de base (shadcn/ui)
    └── layout/       # Composants de layout
```

```bash
# Créer les dossiers
mkdir -p src/constants src/lib/hooks src/components/ui src/components/layout
```

## Étape 3 : Fichiers de Configuration

### 3.1 Tokens UI (`src/constants/ui-tokens.ts`)

```typescript
// Breakpoints cohérents avec Tailwind CSS
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Couleurs du design system
export const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
} as const;

// Espacement
export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
} as const;

// Typographie
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['Fira Code', 'monospace'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  },
} as const;

// Ombres
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

// Rayons de bordure
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const;

// Types
export type Breakpoint = keyof typeof breakpoints;
export type Color = keyof typeof colors;
export type Spacing = keyof typeof spacing;
```

### 3.2 Media Queries (`src/constants/media-queries.ts`)

```typescript
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
  // Tailles d'écran
  mobile: `(max-width: ${breakpoints.md})`, // < 768px
  tablet: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`, // 768px - 1023px
  desktop: `(min-width: ${breakpoints.lg})`, // >= 1024px
  
  // Aliases plus explicites
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

// Hook de base pour les media queries (sera implémenté dans lib/hooks)
export const useMediaQuery = (query: string): boolean => {
  // Implémentation basique - sera remplacée par le hook complet
  if (typeof window === 'undefined') return false;
  return window.matchMedia(query).matches;
};

// Classes CSS utilitaires pour le responsive
export const getResponsiveClasses = {
  // Masquer/afficher selon l'appareil
  hideOnMobile: 'hidden md:block',
  hideOnTablet: 'block md:hidden lg:block',
  hideOnDesktop: 'block md:hidden',
  showOnMobile: 'block md:hidden',
  showOnTablet: 'hidden md:block lg:hidden',
  showOnDesktop: 'hidden md:block',
} as const;

// Container queries (Tailwind CSS v4)
export const containerClasses = {
  // Container de base
  responsive: '@container',
  // Queries spécifiques
  gridMobile: '@container (max-width: 767px)',
  gridTablet: '@container (min-width: 768px) and (max-width: 1023px)',
  gridDesktop: '@container (min-width: 1024px)',
} as const;

// Types pour les variantes d'appareils
export type DeviceVariant = 'mobile' | 'tablet' | 'desktop';
export type ComponentVariant = 'default' | 'mobile' | 'desktop';

// Fonction utilitaire pour déterminer le type d'appareil
export const getDeviceVariant = (): DeviceVariant => {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};
```

### 3.3 Navigation (`src/constants/navigation.ts`)

```typescript
// Interface pour les éléments de navigation
export interface NavItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

// Navigation principale
export const mainNavigation = [
  {
    id: 'home' as const,
    label: 'Accueil',
    href: '/',
    description: 'Page d\'accueil',
  },
  {
    id: 'about' as const,
    label: 'À Propos',
    href: '/about',
    description: 'À propos de nous',
  },
  {
    id: 'services' as const,
    label: 'Services',
    href: '/services',
    description: 'Nos services',
  },
  {
    id: 'contact' as const,
    label: 'Contact',
    href: '/contact',
    description: 'Nous contacter',
  },
] as const;

// Navigation footer
export const footerNavigation = [
  ...mainNavigation,
  {
    id: 'privacy' as const,
    label: 'Confidentialité',
    href: '/privacy',
    description: 'Politique de confidentialité',
  },
  {
    id: 'terms' as const,
    label: 'Mentions Légales',
    href: '/terms',
    description: 'Mentions légales',
  },
] as const;

// Navigation mobile (identique à la principale)
export const mobileNavigation = mainNavigation;

// Liens sociaux
export const socialLinks = {
  twitter: {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: 'twitter',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'linkedin',
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com',
    icon: 'github',
  },
} as const;

// Informations business
export const businessInfo = {
  name: 'Mon Entreprise',
  description: 'Description de mon entreprise',
  address: {
    street: '123 Rue Example',
    city: 'Paris',
    postalCode: '75001',
    country: 'France',
  },
  contact: {
    phone: '+33123456789',
    email: 'contact@monentreprise.fr',
  },
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
```

### 3.4 Index des Constants (`src/constants/index.ts`)

```typescript
// Export all constants
export * from './ui-tokens';
export * from './media-queries';
export * from './navigation';

// Re-export des types principaux pour faciliter l'import
export type {
  Breakpoint,
  DeviceVariant,
  ComponentVariant,
} from './media-queries';
export type {
  NavigationItem,
  SocialLink,
  NavItem,
} from './navigation';
```

## Étape 4 : Hooks Personnalisés

### 4.1 Hook Media Query (`src/lib/hooks/useMediaQuery.ts`)

```typescript
'use client';

import { useState, useEffect } from 'react';
import { mediaQueries } from '@/constants';

/**
 * Hook pour les media queries côté client
 * SSR-safe : évite les erreurs d'hydration
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  // Évite les erreurs d'hydration SSR
  if (!mounted) return false;
  return matches;
};

/**
 * Hook pour détecter les appareils mobiles
 */
export const useIsMobile = (): boolean => {
  return useMediaQuery(mediaQueries.isMobile);
};

/**
 * Hook pour détecter les appareils desktop
 */
export const useIsDesktop = (): boolean => {
  return useMediaQuery(mediaQueries.isDesktop);
};

/**
 * Hook pour détecter les tablettes
 */
export const useIsTablet = (): boolean => {
  return useMediaQuery(mediaQueries.isTablet);
};

/**
 * Hook pour détecter les appareils tactiles
 */
export const useIsTouchDevice = (): boolean => {
  return useMediaQuery(mediaQueries.isTouchDevice);
};

/**
 * Hook pour obtenir la variante d'appareil actuelle
 */
export const useDeviceVariant = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const isTouchDevice = useIsTouchDevice();

  const variant = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  return {
    variant,
    isMobile,
    isTablet,
    isDesktop,
    isTouchDevice,
  };
};
```

### 4.2 Index des Hooks (`src/lib/hooks/index.ts`)

```typescript
export {
  useMediaQuery,
  useIsMobile,
  useIsDesktop,
  useIsTablet,
  useIsTouchDevice,
  useDeviceVariant,
} from './useMediaQuery';
```

## Étape 5 : Composants d'Exemple

### 5.1 Navigation Responsive (`src/components/layout/ResponsiveNav.tsx`)

```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useIsMobile } from '@/lib/hooks';
import { mainNavigation, type NavItem } from '@/constants';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

// Composant de navigation mobile dédié
function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden">
          <nav className="container py-4">
            <div className="flex flex-col space-y-4">
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

// Composant de navigation desktop
function DesktopNav({ items }: { items: readonly NavItem[] }) {
  return (
    <nav className="hidden md:flex md:items-center md:space-x-6">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

// Composant principal de navigation responsive
export function ResponsiveNav() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Mon Site</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Rendu conditionnel basé sur la taille d'écran */}
          {isMobile ? (
            <MobileNav items={mainNavigation} />
          ) : (
            <DesktopNav items={mainNavigation} />
          )}
        </div>
      </div>
    </header>
  );
}

// Export des composants individuels pour réutilisation
export { MobileNav, DesktopNav };
```

### 5.2 Composant Button de Base (`src/components/ui/button.tsx`)

```typescript
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

## Étape 6 : Utilitaires

### 6.1 Utilitaires CSS (`src/lib/utils.ts`)

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine les classes CSS avec Tailwind merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formate une URL pour les liens externes
 */
export function formatExternalUrl(url: string): string {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
}

/**
 * Vérifie si une URL est externe
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

/**
 * Génère un ID unique
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}
```

## Étape 7 : Configuration TypeScript

### 7.1 Mise à jour de `tsconfig.json`

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Étape 8 : Utilisation

### 8.1 Dans votre layout principal (`src/app/layout.tsx`)

```typescript
import { ResponsiveNav } from '@/components/layout/ResponsiveNav';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <ResponsiveNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### 8.2 Dans vos composants

```typescript
'use client';

import { useIsMobile, useDeviceVariant } from '@/lib/hooks';
import { getResponsiveClasses } from '@/constants';

export function MonComposant() {
  const isMobile = useIsMobile();
  const { variant } = useDeviceVariant();

  return (
    <div className={getResponsiveClasses.hideOnMobile}>
      {isMobile ? (
        <div>Version mobile</div>
      ) : (
        <div>Version desktop</div>
      )}
      
      <p>Appareil détecté : {variant}</p>
    </div>
  );
}
```

## Étape 9 : Tests et Validation

### 9.1 Test de compilation TypeScript

```bash
npx tsc --noEmit
```

### 9.2 Test de build

```bash
npm run build
```

### 9.3 Test de développement

```bash
npm run dev
```

## Personnalisation

### Adapter les breakpoints

Modifiez `src/constants/ui-tokens.ts` :

```typescript
export const breakpoints = {
  sm: '480px',   // Votre breakpoint mobile
  md: '768px',   // Votre breakpoint tablette
  lg: '1024px',  // Votre breakpoint desktop
  xl: '1280px',  // Votre breakpoint large
  '2xl': '1536px', // Votre breakpoint extra-large
} as const;
```

### Adapter les couleurs

Modifiez `src/app/globals.css` et `src/constants/ui-tokens.ts` selon votre design system.

### Ajouter des hooks personnalisés

Créez de nouveaux hooks dans `src/lib/hooks/` selon vos besoins.

## Bonnes Pratiques

1. **Toujours tester** la compilation TypeScript après chaque modification
2. **Utiliser les types** fournis pour une meilleure sécurité
3. **Préférer CSS responsive** avant les composants conditionnels
4. **Tester sur différents appareils** pour valider le comportement
5. **Documenter** vos modifications et extensions

## Dépannage

### Erreurs d'hydration SSR

- Vérifiez que les hooks utilisent `mounted` state
- Utilisez `useEffect` pour les opérations côté client

### Erreurs TypeScript

- Vérifiez les imports et exports
- Utilisez les types fournis dans `constants/`

### Performance

- Utilisez `React.memo` pour les composants lourds
- Préférez CSS aux media queries JavaScript quand possible

Cette configuration vous donne une base solide pour gérer le responsive design dans vos projets Next.js avec TypeScript et Tailwind CSS v4.