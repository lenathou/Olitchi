Tu travailles sur le projet actuel Olitchi, que tu connais déjà dans son état réel.

Les phases 1 à 5 ont déjà été intégrées :
- séparation public / admin
- authentification admin
- CRUD produits
- CRUD catégories
- consolidation du catalogue admin

Je veux maintenant une intervention ciblée de stabilisation finale.
Ce n’est PAS une nouvelle phase fonctionnelle.
C’est une passe de correction / harmonisation sur les points encore un peu fragiles avant de passer au prochain vrai chantier du produit.

Objectif :
corriger proprement les derniers points prioritaires du bloc “admin catalogue”, sans dériver vers auth user, panier, commande, paiement, ou refonte design large.

Périmètre strict :
- feedback utilisateur (toasts)
- validation serveur catégories
- harmonisation des retours d’actions serveur
- cohérence sortOrder
- nettoyage de quelques points de qualité de code
- centralisation d’une ou deux constantes techniques si pertinent

Ne PAS implémenter maintenant :
- auth user
- espace client
- panier
- commandes
- paiement
- upload média
- refonte visuelle large
- nouvelles fonctionnalités catalogue non demandées

Je veux que tu commences par auditer rapidement les points suivants dans le code réel, puis que tu appliques uniquement les corrections réellement nécessaires.

1. Toaster / feedback utilisateur
Vérifie si les appels à toast() utilisés dans les composants admin (produits, catégories, suppressions, formulaires) sont réellement reliés à un Toaster monté dans l’application.

Si ce n’est pas le cas :
- monter proprement le composant Toaster au bon endroit global
- sans casser la structure actuelle
- sans duplication

Attendu :
les feedbacks toast doivent fonctionner réellement dans l’espace admin.

2. Validation serveur des catégories
Je veux que le CRUD catégories atteigne le même niveau de robustesse que le CRUD produits.

Vérifie dans la couche serveur catégories si :
- les données sont réellement revalidées côté serveur
- le schéma Zod catégorie est bien utilisé côté serveur
- les erreurs sont capturées proprement

Si nécessaire :
- appliquer une validation serveur stricte via Zod
- harmoniser create / update / delete catégories
- éviter de dépendre uniquement du front

3. Harmonisation des retours d’actions serveur
Je veux une convention cohérente entre produits et catégories pour les Server Actions / helpers serveur.

Vérifie si les actions retournent de manière homogène des objets du type :
- { success: true, ... }
- { success: false, error: "..." }
ou une convention équivalente stable

Si nécessaire :
- harmoniser les retours de la couche catégories avec celle des produits
- garder une structure simple, lisible et maintenable
- éviter les variations inutiles de format selon les actions

4. Cohérence de sortOrder
Je veux que tu vérifies la logique réelle de sortOrder sur produits et catégories.

Points à examiner :
- logique à la création
- logique si la valeur 0 est fournie
- logique d’auto-positionnement en fin de liste
- cohérence entre produits et catégories
- comportement en cas de changement de catégorie pour un produit

Je ne veux pas forcément une refonte lourde.
Je veux une logique claire et cohérente.

Si tu identifies une incohérence mineure mais réelle :
- corrige-la proprement
- ou, si le comportement actuel est volontaire et pertinent, rends-le cohérent et explicite dans le code

Point particulièrement important :
vérifier le cas d’un produit déplacé vers une autre catégorie avec sortOrder = 0.
Si nécessaire, corriger ce comportement pour qu’il reste logique métier.

5. Nettoyage de qualité de code
Je veux un petit nettoyage ciblé, sans refactor large.

À vérifier :
- éventuels any faciles à remplacer proprement
- duplications techniques évidentes
- petites incohérences de nommage dans le bloc auth/catalogue
- constantes dupliquées si elles sont critiques

Point spécifique :
vérifie si le nom du cookie de session admin est dupliqué dans plusieurs fichiers.
Si oui, centralise-le proprement dans une constante partagée adaptée à la structure du projet.

6. Discipline de périmètre
Important :
reste strictement sur ces corrections ciblées.
Ne lance pas un chantier de refactor global.
Ne touche pas à des zones non concernées si ce n’est pas nécessaire.
Ne commence pas le prochain bloc fonctionnel.

7. Vérifications attendues
Je veux des vérifications concrètes après correction :
- les toasts s’affichent réellement
- les actions catégories sont robustes côté serveur
- les retours d’actions sont cohérents
- la logique sortOrder reste stable
- le build passe
- aucune régression visible sur l’admin catalogue
- aucune régression visible sur le public

8. Compte-rendu final
À la fin, je veux un compte-rendu clair avec :
- les points réellement corrigés
- les fichiers modifiés
- les éventuels points audités mais finalement laissés en l’état avec justification
- la confirmation que le bloc admin catalogue est désormais consolidé proprement

Contraintes de qualité :
- intervention ciblée
- pas de sur-ingénierie
- code propre
- cohérence avec la stack actuelle
- pas de dette technique ajoutée
- pas de régression

Avant d’appliquer les changements :
commence par me présenter brièvement :
1) ton audit rapide sur ces points,
2) ce que tu comptes réellement corriger,
3) les fichiers que tu vas modifier,
puis applique les corrections méthodiquement.