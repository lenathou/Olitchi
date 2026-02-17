Oui Nath, je viens de parcourir le zip et je peux te faire un **mini audit “perf animations”** très concret, avec **les fichiers concernés** et ce que je ferais en priorité.

---

## Priorité 1 — Hero : trop d’images en `priority` + animations continues multiples

### 1) Trop de `priority` sur la Hero

Dans `src/components/homepage/HeroSection.tsx`, tu as `priority` sur **beaucoup** d’images (fond + atiéké + bokit + accras + brochettes, en mobile ET desktop).

**Pourquoi c’est un problème**

* `priority` force un chargement prioritaire : ça peut saturer le réseau au premier rendu
* Résultat : animations moins fluides au chargement + LCP parfois moins bon

**Recommandation**

* **Garde `priority` uniquement sur l’image réellement LCP** (souvent le fond OU l’élément central le plus visible)
* Le reste doit être lazy (donc sans priority), surtout les 3 images du bas.

---

### 2) Animation “floating” sur trop d’éléments

Toujours dans `HeroSection.tsx`, tu as du floating en boucle (repeat infini) sur :

* Atiéké (mobile + desktop)
* Bokit (mobile)
* * le trio du bas en desktop (bokit/accras/brochettes)

**Pourquoi c’est un problème**
Une animation infinie = coût permanent CPU/GPU + batterie, même si l’utilisateur ne regarde plus la Hero (scroll).

**Recommandation**

* **Ne garde qu’1 seul élément en floating** (idéalement l’atiéké en desktop, et rien ou 1 seul en mobile)
* Le reste : juste reveal + hover.
* Bonus premium : **couper les animations infinies dès que la Hero sort du viewport** (gain énorme sur mobile).

---

### 3) Blur “filter” sur le décor (coûteux)

Dans `src/lib/animations/hero-animations.ts`, `decorFadeIn` anime `filter: blur(10px) -> 0`.

**Pourquoi**
Le blur sur un gros élément (fond full-screen) est cher.

**Recommandation**

* Sur mobile : **pas de blur** (opacity + scale uniquement)
* Sur desktop : si tu veux garder l’effet, fais-le **plus court** ou limite-le à un overlay léger, pas sur l’image entière.

---

## Priorité 2 — Scroll listener du Header : à lisser

Dans `src/components/layout/Header.tsx`, tu écoutes `scroll` et tu fais `setIsScrolled` directement.

**Pourquoi**
Sur certains devices, ça peut déclencher beaucoup de re-renders et impacter la fluidité (surtout avec animations en même temps).

**Recommandation**

* Lisser via une logique type “raf” / throttle léger
* Mettre le listener en `passive: true`
* Et surtout : éviter de setState si la valeur ne change pas (ex: déjà scrolled, ne pas re-set).

---

## Priorité 3 — Nettoyage Framer Motion inutile (bundle + clarté)

### MobileNavPremium : imports/variants inutilisés

Dans `src/components/layout/MobileNavPremium.tsx` :

* `AnimatePresence` est importé mais (dans le fichier actuel) il n’est pas utilisé
* `overlayVariants` est défini mais pas utilisé

**Recommandation**

* Supprimer les imports/variants morts → petit gain bundle, surtout utile quand tu veux garder le projet clean.

---

## Priorité 4 — MenuSection : c’est très propre, mais 2 petits points

Dans `src/components/homepage/MenuSection.tsx`, la logique est bien optimisée (selectedIndex only + drag feedback = parfait).

**Deux micro reco**

1. **Dots** : actuellement `className="bg-primary"` même quand inactive. Tu relies l’inactivité via opacity/width. Ça marche, mais tu peux réduire le “flash” visuel en donnant une vraie couleur inactive (muted) et garder l’animation pour la taille/opacity.
2. **Drag events Embla** : tu écoutes `pointerDown` / `pointerUp`. C’est bien, mais surveille juste que ça ne déclenche pas trop de re-renders si tu ajoutes plus tard d’autres états dépendants.

---

## Priorité 5 — Page Menu : animations CSS “fantômes” (à clarifier)

Dans `src/components/menu/ModernProductCard.tsx`, tu poses `style={{ animationDelay: ... }}` sur les cards, mais je n’ai pas vu de `@keyframes` correspondant dans `globals.css` / UI.

**Pourquoi**

* Si aucune animation CSS n’existe : c’est juste du style inutile
* Si tu avais prévu une animation CSS : il manque la définition

**Recommandation**

* Soit tu retires ce `animationDelay`
* Soit tu assumes une animation et tu la définis clairement (mais dans une logique perf, je préférerais soit Framer Motion ciblé, soit rien).

---

# Ce que je ferais maintenant (ordre d’exécution recommandé)

1. **Hero : réduire `priority` à 1 image max**
2. **Hero : limiter floating à 1 élément** + couper hors viewport
3. **Hero : retirer blur filter sur mobile**
4. **Header : lisser l’event scroll**
5. **Clean MobileNavPremium : enlever imports/variants non utilisés**
6. **ModernProductCard : virer l’animationDelay inutile (ou ajouter l’animation manquante)**

---

Si tu veux, je peux te faire une **checklist “à cocher”** ultra courte (style audit), avec pour chaque point : *fichier → quoi changer → comment tester rapidement sur mobile*.
