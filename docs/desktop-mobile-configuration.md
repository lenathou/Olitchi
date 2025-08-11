# Configuration Desktop/Mobile - Documentation Technique

## Vue d'ensemble

Cette documentation détaille la configuration desktop/mobile mise en place dans le projet O'Litchi, basée sur une approche responsive-first avec des composants spécialisés pour les cas de divergence forte.

## Architecture Générale

### Philosophie

1. **Responsive CSS par défaut** : Utilisation de Tailwind CSS avec container queries
2. **Composants spécialisés** : Création de variantes Mobile uniquement quand nécessaire
3. **Hooks media queries** : Gestion côté client pour le rendu conditionnel
4. **SSR-safe** : Hydration sécurisée sans erreurs de mismatch

### Structure des dossiers

```
src/
├── constants/
│   ├── ui-tokens.ts          # Tokens de design (couleurs, breakpoints)
│   ├── media-queries.ts      # Hooks et utilitaires responsive
│   ├── navigation.ts         # Données de navigation
│   └── index.ts             # Exports centralisés
├── lib/
│   └── hooks/
│       ├── useMediaQuery.ts  # Hooks media queries personnalisés
│       └── index.ts         # Exports des hooks
└── components/
    └── layout/
        └── ResponsiveNav.tsx # Exemple d'implémentation
```

## Détails Techniques

### 1. Tokens UI (`src/constants/ui-tokens.ts`)

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
    50: '#fff7ed',
    500: '#ff6b35',
    900: '#9a3412',
  },
  // ...
} as const;
```

**Avantages :**
- Centralisation des tokens de design
- Cohérence entre CSS et JavaScript
- Type safety avec TypeScript

### 2. Media Queries (`src/constants/media-queries.ts`)

```typescript
// Queries prédéfinies
export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.md})`,
  tablet: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  desktop: `(min-width: ${breakpoints.lg})`,
  isTouchDevice: '(hover: none) and (pointer: coarse)',
} as const;

// Classes utilitaires
export const getResponsiveClasses = {
  hideOnMobile: 'hidden md:block',
  hideOnDesktop: 'block md:hidden',
  showOnMobile: 'block md:hidden',
  showOnDesktop: 'hidden md:block',
} as const;
```

**Avantages :**
- Queries réutilisables
- Classes CSS prêtes à l'emploi
- Détection des appareils tactiles

### 3. Hooks Personnalisés (`src/lib/hooks/useMediaQuery.ts`)

```typescript
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

// Hooks spécialisés
export const useIsMobile = () => useMediaQuery(mediaQueries.mobile);
export const useIsDesktop = () => useMediaQuery(mediaQueries.desktop);
export const useIsTouchDevice = () => useMediaQuery(mediaQueries.isTouchDevice);
```

**Avantages :**
- SSR-safe (pas d'erreurs d'hydration)
- Performance optimisée
- API simple et réutilisable

### 4. Composants Responsifs (`src/components/layout/ResponsiveNav.tsx`)

```typescript
export function ResponsiveNav() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">O'Litchi</span>
          </Link>
        </div>
        
        {/* Rendu conditionnel basé sur la taille d'écran */}
        {isMobile ? (
          <MobileNav items={mainNavigation} />
        ) : (
          <DesktopNav items={mainNavigation} />
        )}
      </div>
    </header>
  );
}

// Composant mobile dédié
function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        {/* Navigation mobile */}
      </SheetContent>
    </Sheet>
  );
}

// Composant desktop dédié
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
```

**Avantages :**
- Séparation claire des responsabilités
- Composants optimisés par plateforme
- Rendu conditionnel performant

## Configuration Tailwind CSS v4

### Approche `@theme inline`

Le projet utilise Tailwind CSS v4 avec la nouvelle syntaxe `@theme inline` dans `src/app/globals.css` :

```css
@import "tailwindcss";
@import "tw-animate-css";

@theme inline {
  --color-primary: #ff6b35;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --radius-lg: var(--radius);
  /* ... autres tokens */
}

:root {
  --radius: 0.75rem;
  --primary: #ff6b35;
  /* ... variables CSS personnalisées */
}
```

**Avantages :**
- Pas de fichier `tailwind.config.ts` nécessaire
- Configuration directe dans le CSS
- Meilleure performance de build
- Intégration native avec les CSS custom properties

### Migration depuis Tailwind v3

Si vous migrez depuis Tailwind v3 :

1. Supprimez `tailwind.config.js/ts`
2. Déplacez la configuration dans `@theme inline`
3. Utilisez les CSS custom properties pour les valeurs dynamiques

## Types TypeScript

### Définition des types

```typescript
// Types pour la navigation
export interface NavItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

// Types pour les breakpoints
export type Breakpoint = keyof typeof breakpoints;

// Types pour les variantes d'appareils
export type DeviceVariant = 'mobile' | 'tablet' | 'desktop';
export type ComponentVariant = 'default' | 'mobile' | 'desktop';
```

### Gestion des types readonly

```typescript
// Données avec types readonly pour la sécurité
export const mainNavigation = [
  {
    id: 'accueil' as const,
    label: 'Accueil',
    href: '/',
    description: 'Page d\'accueil O\'Litchi',
  },
  // ...
] as const;

// Composants acceptant des types readonly
function MobileNav({ items }: { items: readonly NavItem[] }) {
  // ...
}
```

## Performance et SEO

### Optimisations

1. **SSR-safe hydration** : Les hooks attendent le montage côté client
2. **Lazy loading** : Utilisation de `next/dynamic` pour les composants lourds
3. **CSS-first** : Responsive CSS avant JavaScript
4. **Container queries** : Meilleure performance que les media queries JS

### SEO

1. **URL unique** : Pas de redirection mobile/desktop
2. **Meta tags responsifs** : Viewport et autres balises adaptées
3. **Structured data** : JSON-LD pour LocalBusiness
4. **Core Web Vitals** : Optimisation des métriques de performance

## Bonnes Pratiques

### Conventions de nommage

1. **Composants Mobile** : Préfixe `Mobile` (ex: `MobileNav`)
2. **Hooks** : Préfixe `use` (ex: `useIsMobile`)
3. **Constants** : PascalCase pour les objets, camelCase pour les fonctions
4. **Types** : PascalCase avec suffixes explicites

### Gestion des états

1. **État local** : `useState` pour les interactions simples
2. **État global** : Context API ou Zustand pour les données partagées
3. **Cache** : React Query pour les données serveur
4. **Persistance** : localStorage avec fallbacks SSR

### Tests

1. **Unit tests** : Jest + Testing Library
2. **Integration tests** : Cypress ou Playwright
3. **Visual regression** : Chromatic ou Percy
4. **Performance** : Lighthouse CI

## Monitoring et Debug

### Outils de développement

```typescript
// Debug des media queries
export const useDeviceInfo = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const isTouchDevice = useIsTouchDevice();

  if (process.env.NODE_ENV === 'development') {
    console.log('Device Info:', {
      isMobile,
      isTablet,
      isDesktop,
      isTouchDevice,
      viewport: {
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
      },
    });
  }

  return { isMobile, isTablet, isDesktop, isTouchDevice };
};
```

### Métriques de performance

1. **Core Web Vitals** : LCP, FID, CLS
2. **Bundle size** : Analyse avec `@next/bundle-analyzer`
3. **Hydration time** : Mesure du temps de montage
4. **Media query changes** : Compteur de changements d'état

## Conclusion

Cette configuration offre :

- ✅ **Flexibilité** : Responsive CSS + composants spécialisés
- ✅ **Performance** : SSR-safe, optimisations natives
- ✅ **Maintenabilité** : Types stricts, conventions claires
- ✅ **Évolutivité** : Architecture modulaire et extensible
- ✅ **SEO** : URL unique, meta tags optimisés
- ✅ **DX** : Outils de debug, documentation complète

L'approche privilégie la simplicité et la performance tout en offrant la flexibilité nécessaire pour les cas d'usage complexes.