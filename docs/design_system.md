# Design System Olitchy91

## 🎨 Palette de Couleurs

Ce design system est inspiré de l'identité visuelle tropicale d'Olitchy91, capturant l'essence chaleureuse et accueillante d'un food truck avec des couleurs vibrantes et naturelles.

### Couleurs Principales

#### Orange Principal
- **Tropical Orange**: `#FF6B35`
- **Usage**: Boutons principaux, liens, éléments d'action
- **Inspiration**: Couleur signature du logo Olitchy91

#### Bleu Secondaire
- **Tropical Blue**: `#4A90E2`
- **Usage**: Boutons secondaires, éléments informatifs
- **Inspiration**: Bleu du ciel tropical de l'image

#### Vert d'Accent
- **Tropical Green**: `#2E8B57`
- **Usage**: Éléments de succès, badges, accents naturels
- **Inspiration**: Vert des palmiers

### Couleurs de Support

#### Neutres
- **Background**: `#FEFEFE` - Blanc cassé chaleureux
- **Foreground**: `#2C3E50` - Bleu-gris foncé pour le texte
- **Muted**: `#F8F9FA` - Gris très clair
- **Muted Foreground**: `#6C757D` - Gris moyen
- **Border**: `#E9ECEF` - Gris clair pour les bordures

#### Couleurs Fonctionnelles
- **Destructive**: `#E74C3C` - Rouge corail pour les erreurs
- **Ring**: `#FF6B35` - Orange pour les états de focus

### Palette Étendue

#### Couleurs Tropicales Complémentaires
- **Sand Beige**: `#F5E6D3` - Beige sable
- **Sunset Coral**: `#FF8C69` - Corail coucher de soleil
- **Ocean Teal**: `#20B2AA` - Turquoise océan
- **Palm Dark**: `#1B4332` - Vert foncé palmier
- **Sunshine Yellow**: `#FFD700` - Jaune soleil

#### Couleurs pour Graphiques
- **Chart 1**: `#FF6B35` - Orange principal
- **Chart 2**: `#4A90E2` - Bleu ciel
- **Chart 3**: `#2E8B57` - Vert palmier
- **Chart 4**: `#FFD700` - Jaune soleil
- **Chart 5**: `#FF8C69` - Orange saumon

## 🎯 Utilisation des Couleurs

### Hiérarchie Visuelle
1. **Actions Primaires**: Tropical Orange (`#FF6B35`)
2. **Actions Secondaires**: Tropical Blue (`#4A90E2`)
3. **Éléments de Succès**: Tropical Green (`#2E8B57`)
4. **Éléments d'Erreur**: Rouge Corail (`#E74C3C`)

### Contextes d'Application

#### Navigation
- **Fond**: Blanc (`#FFFFFF`)
- **Texte**: Bleu-gris foncé (`#2C3E50`)
- **Liens actifs**: Orange tropical (`#FF6B35`)
- **Bouton CTA**: Orange tropical avec texte blanc

#### Cartes de Menu
- **Fond**: Blanc (`#FFFFFF`)
- **Bordure**: Gris clair (`#E9ECEF`)
- **Prix**: Orange tropical (`#FF6B35`)
- **Badge "Populaire"**: Rouge corail (`#E74C3C`)

#### Section Hero
- **Dégradé**: Orange (`#FF6B35`) vers Rouge (`#E74C3C`)
- **Texte**: Blanc (`#FFFFFF`)
- **Boutons**: Variantes secondaires et outline

## 📐 Rayons de Bordure

- **Radius Principal**: `0.75rem` (12px)
- **Radius Small**: `calc(0.75rem - 4px)` (8px)
- **Radius Medium**: `calc(0.75rem - 2px)` (10px)
- **Radius Large**: `0.75rem` (12px)
- **Radius XL**: `calc(0.75rem + 4px)` (16px)

## 🎨 Exemples d'Usage

### Boutons
```css
/* Bouton Principal */
.btn-primary {
  background-color: var(--tropical-orange);
  color: white;
  border-radius: var(--radius);
}

/* Bouton Secondaire */
.btn-secondary {
  background-color: var(--tropical-blue);
  color: white;
  border-radius: var(--radius);
}

/* Bouton Succès */
.btn-success {
  background-color: var(--tropical-green);
  color: white;
  border-radius: var(--radius);
}
```

### Cartes
```css
.card {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--card-foreground);
}
```

### Badges
```css
.badge-popular {
  background-color: var(--destructive);
  color: var(--destructive-foreground);
  border-radius: var(--radius-sm);
}

.badge-success {
  background-color: var(--tropical-green);
  color: white;
  border-radius: var(--radius-sm);
}
```

## 🌟 Philosophie du Design

Le design system d'Olitchy91 reflète l'esprit tropical et chaleureux d'un food truck moderne :

- **Chaleur**: Les oranges et corails évoquent la convivialité
- **Fraîcheur**: Les bleus rappellent le ciel et l'océan
- **Nature**: Les verts connectent à l'authenticité des ingrédients
- **Énergie**: Les couleurs vives transmettent la passion culinaire
- **Accessibilité**: Contrastes suffisants pour une excellente lisibilité

## 📱 Responsive Design

Les couleurs sont optimisées pour :
- **Desktop**: Pleine richesse des couleurs
- **Mobile**: Adaptation automatique avec les mêmes valeurs
- **Accessibilité**: Respect des standards WCAG pour les contrastes

---

*Design System créé pour Olitchy91 - Food Truck Tropical* 🌴🚚