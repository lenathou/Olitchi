🎯 OBJECTIF GLOBAL

Donner à la section “Notre Carte” une sensation :

Premium

Fluide

Moderne

Subtile (pas démonstrative)

Cohérente avec la Hero déjà animée

Animations organisées dans le dossier animations existant, même logique que la Hero.

Respect obligatoire de prefers-reduced-motion.

💻 DESKTOP — COMPORTEMENT ATTENDU
1️⃣ Reveal du Header (Badge + Titre + Texte)
Séquence

Badge “Notre Carte” apparaît en premier

Puis le H2

Puis le paragraphe

Style d’animation

Fade-in

Légère montée (translateY 16–20px → 0)

Easing premium (ease-out doux)

Stagger léger (80–120ms entre chaque)

Déclenchement

Au scroll

Une seule fois

Déclenchement quand ~30–40% de la section est visible

2️⃣ Reveal de la Grille Desktop (4 cards)
Wrapper grid

Opacité 0 → 1

Puis stagger sur les enfants

Cards individuelles

Animation d’entrée :

Opacity 0 → 1

TranslateY 20–25px → 0

Scale 0.98 → 1

Durée ~0.5–0.6s

Stagger :

80–100ms entre chaque card

Résultat attendu :
→ Sensation “projet premium”, pas un simple fade brutal.

3️⃣ Hover Desktop sur Cards (raffinement)

Au hover d’une card :

Légère élévation (translateY -6 à -8px)

Ombre plus marquée

Image zoom subtil (1 → 1.05)

Badge “Populaire” micro pop (scale 0.96 → 1)

Important :

Pas de rotation excessive

Pas d’effet 3D agressif

Doit rester élégant et food premium

4️⃣ CTA “Explorer tout le Menu”
Au scroll

Fade-in + légère montée (comme header)

Au hover (desktop uniquement)

L’icône flèche se déplace légèrement vers la droite (4–6px)

Animation spring douce

Pas de rebond exagéré

📱 MOBILE — CAROUSEL EMBLA

Tu gardes Embla tel quel.
On améliore uniquement le ressenti visuel.

1️⃣ Emphase Slide Active (très important)

Basé sur selectedIndex.

Slide active :

Scale = 1

Opacity = 1

Slides non actives :

Scale ≈ 0.94

Opacity ≈ 0.7–0.75

Transition :

Spring douce

Pas de snap brutal

Résultat :
→ Effet “Apple-like”, sensation app native.

2️⃣ Dots Navigation

Les dots doivent être animés, pas juste changés.

Dot active :

Largeur plus grande

Opacity 1

Dot inactive :

Petite largeur

Opacity réduite

Transition :

Spring rapide mais douce

Aucune latence visible

3️⃣ Feedback pendant le drag (facultatif mais premium)

Quand l’utilisateur commence à drag :

Slide active scale légèrement à 0.98

Quand il relâche → revient à 1

Très subtil.
Ne doit pas se remarquer consciemment.

🎛️ ORGANISATION TECHNIQUE ATTENDUE

Créer un fichier dédié type :

animations/menuSection.ts

Contenant :

fadeUp

containerStagger

cardReveal

ctaReveal

mobileSlideEmphasis

dotTransition

arrowHover

Structure cohérente avec celle utilisée pour la Hero.

⚙️ PERFORMANCE & UX

Obligatoire :

Respect prefers-reduced-motion

Ne pas utiliser blur lourd sur mobile

Utiliser uniquement transform + opacity

Ne pas modifier layout existant

Aucun shift de mise en page

🎯 RÉSULTAT FINAL ATTENDU

Desktop :

Section élégante

Rythme maîtrisé

Sensation haut de gamme

Mobile :

Carousel vivant

Slide active mise en valeur

Interaction fluide

Aucun effet “gadget”