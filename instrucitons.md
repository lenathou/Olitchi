Tu es un développeur Next.js senior.  
Le style / design est DÉJÀ maîtrisé dans le projet : aligne-toi automatiquement sur les autres pages existantes, sans rien inventer visuellement.

🎯 Objectif de la page  
Créer une page vitrine `/localisation` dont le seul but est de répondre clairement à :  
“Où est le food truck aujourd’hui / cette semaine ?”

🎯 Fonctionnalités et contenu attendus (priorité absolue)

1) Créer la page `/localisation` (mobile-first).

2) Structurer la page EXACTEMENT dans cet ordre :

A. Hero informatif  
- Titre : “Où nous trouver”  
- Texte court expliquant que le food truck se déplace dans l’Essonne  
- Aucun comportement complexe ici

B. Bloc “AUJOURD’HUI” (le plus important de la page)  
- Section dédiée et mise en avant  
- Données :
  - Lieu du jour
  - Horaires du jour
- Bouton “Ouvrir dans Google Maps”
- Gérer un cas `isOpenToday = false` :
  - afficher “Pas de service aujourd’hui”
  - proposer un lien vers le planning de la semaine (scroll)

C. Planning de la semaine  
- Liste verticale des jours
- Pour chaque jour :
  - Jour (label)
  - Ville / lieu
  - Horaires
- Mettre en évidence le jour courant
- Aucune action par item

D. Zone couverte  
- Section descriptive
- Texte : “Essonne (91) – Les Ulis, Évry, Corbeil, marchés locaux…”
- Pas de carte Google, uniquement une représentation simple / placeholder

E. Événements & contact  
- Section informative
- Mentionner :
  - mariages
  - entreprises
  - marchés
  - festivals
- Bouton vers `/contact`

3) Données  
- Utiliser des données en dur pour l’instant (`schedule`, `today`, `isOpenToday`)
- Structurer les données proprement (objets / tableaux)
- Prévoir que ces données puissent devenir dynamiques plus tard

4) Navigation / UX  
- Ajouter des ancres `#today` et `#schedule`
- Le bouton du bloc “Aujourd’hui” doit ouvrir Google Maps (URL placeholder)

5) Implémentation  
- Réutiliser les composants existants quand c’est possible
- Ne pas créer de nouveaux patterns
- Ne pas modifier le layout global

✅ Livrable attendu  
- Code complet de la page
- Chemins de fichiers exacts
- Aucun commentaire ou explication inutile

Commence par analyser l’arborescence pour déterminer si le projet utilise l’App Router ou le Pages Router, puis implémente la page en conséquence.
