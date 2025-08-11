# Constants O'Litchi - Organisation du projet

Ce dossier centralise tous les tokens et données UI réutilisables selon les règles du projet O'Litchi.

## Structure

### 📁 Fichiers principaux

- **`ui-tokens.ts`** - Tokens de design (couleurs, espacements, typographie)
- **`media-queries.ts`** - Gestion responsive et media queries
- **`navigation.ts`** - Navigation et liens du site
- **`tailwind-config.ts`** - Configuration Tailwind personnalisée
- **`index.ts`** - Export centralisé

## 🎨 Design System

### Couleurs
- **Primary Orange** : `#FF6B35` (couleur principale du camion)
- **Secondary Green** : `#2D5016` (vert foncé)
- **Accents** : Variations d'orange et vert

### Breakpoints
- **Mobile** : `< 768px`
- **Tablet** : `768px - 1023px`
- **Desktop** : `>= 1024px`

## 📱 Responsive Design

### Approche selon les règles
1. **Base** : CSS responsive via container queries
2. **Swap de composants** : `useMediaQuery` côté client
3. **Préfixe Mobile** : Composants dédiés mobile avec préfixe `Mobile`

### Hooks disponibles
```typescript
import { useIsMobile, useIsDesktop, useDeviceVariant } from '@/lib/hooks';

const isMobile = useIsMobile();
const deviceVariant = useDeviceVariant(); // 'mobile' | 'tablet' | 'desktop'
```

### Classes CSS utilitaires
```typescript
import { getResponsiveClasses } from '@/constants';

// Masquer sur mobile
className={getResponsiveClasses.hideOnMobile}

// Afficher seulement sur desktop
className={getResponsiveClasses.showOnDesktop}
```

## 🧭 Navigation

### Pages SEO définies
- `/` - Accueil
- `/menu` - Menu
- `/a-propos` - À propos
- `/localisation-horaires` - Localisation
- `/contact` - Contact
- `/mentions-legales` - Mentions légales
- `/confidentialite` - Confidentialité

### Utilisation
```typescript
import { mainNavigation, footerNavigation } from '@/constants';

// Navigation principale
mainNavigation.map(item => (
  <Link key={item.id} href={item.href}>{item.label}</Link>
))
```

## 🎯 Bonnes pratiques

### TypeScript
- Types explicites pour tous les constants
- Utilisation de `as const` pour préserver les types
- Export des types pour réutilisation

### Performance
- Hooks SSR-safe avec hydration correcte
- Container queries pour éviter les re-renders
- Lazy loading des composants non critiques

### SEO
- Une seule URL par contenu
- Métadonnées structurées
- Ciblage local "food truck Les Ulis"

## 📦 Import/Export

### Import centralisé
```typescript
// Tout depuis l'index
import { colors, breakpoints, mainNavigation, useIsMobile } from '@/constants';

// Ou imports spécifiques
import { colors } from '@/constants/ui-tokens';
import { useIsMobile } from '@/lib/hooks';
```

### Nouveaux constants
Pour ajouter de nouveaux constants :
1. Créer le fichier dans `/src/constants/`
2. Exporter depuis `/src/constants/index.ts`
3. Documenter ici

## 🚀 Utilisation avec Tailwind

Les tokens sont intégrés dans la configuration Tailwind :

```css
/* Classes générées automatiquement */
.text-primary-orange
.bg-secondary-green
.shadow-card
.rounded-card
```

## 📋 TODO

- [ ] Compléter les informations de contact réelles
- [ ] Ajouter les horaires d'ouverture
- [ ] Intégrer les liens sociaux
- [ ] Optimiser les images WebP
- [ ] Tests responsive sur tous les breakpoints