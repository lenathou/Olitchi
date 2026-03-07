Tu travailles sur le projet actuel Olitchi, que tu connais déjà dans son état réel.

Les phases précédentes ont déjà été réalisées :
- Phase 1 : séparation structurelle public / admin
- Phase 2 : authentification admin et protection réelle de l’espace /admin
- Phase 3 : CRUD admin des produits
- Phase 4 : CRUD admin des catégories

Nous passons maintenant à la PHASE 5.

Objectif principal de la phase 5 :
stabiliser, fiabiliser et finaliser le bloc “catalogue admin” afin qu’il soit réellement exploitable, cohérent et prêt pour la suite du projet.

Important :
Cette phase n’a pas pour but d’ajouter un nouveau grand module.
Elle sert à consolider tout ce qui concerne l’administration du catalogue :
- produits
- catégories
- cohérence du menu public lié à ces données
- gestion des cas limites
- qualité générale de l’expérience admin

Le cap reste le même :
un admin doit pouvoir gérer le catalogue proprement et sans comportement fragile.

Périmètre strict de la PHASE 5 :
- revue complète du flux admin catalogue
- stabilisation des CRUD produits et catégories
- harmonisation validation / messages / erreurs
- sécurisation des cas limites métier
- vérification de la cohérence avec le front public
- nettoyage léger de l’espace admin catalogue si nécessaire

Ne PAS implémenter maintenant :
- panier
- commande
- paiement
- espace client user
- upload média avancé
- gestion avancée de stock
- variantes produit complexes
- analytics
- refonte visuelle large du dashboard
- nouvelles fonctionnalités hors catalogue

1. Audit global préalable
Avant de coder, commence par faire un audit clair de l’existant sur :
- le CRUD admin des produits
- le CRUD admin des catégories
- leurs validations respectives
- la gestion des slugs
- la gestion des suppressions
- la cohérence des routes et pages admin
- la consommation des produits/catégories côté public

Je veux que tu identifies précisément :
- ce qui est déjà propre
- ce qui est fragile
- ce qui manque pour considérer le catalogue admin comme “terminé proprement”
- les éventuelles incohérences entre produits, catégories et front public

2. Objectif fonctionnel concret
À l’issue de cette phase, je veux que le bloc catalogue admin permette de façon fiable :
- de créer, modifier, supprimer des produits
- de créer, modifier, supprimer des catégories dans des conditions sûres
- de gérer correctement les champs utiles (nom, slug, description, prix, imagePath, sortOrder, isAvailable, emoji si applicable, catégorie)
- de refléter correctement les changements côté public
- d’éviter les erreurs métier évidentes ou les comportements incohérents

3. Cas limites à revoir impérativement
Merci de vérifier et corriger proprement, si nécessaire, les points suivants :

Produits :
- collision de slug à la création
- collision de slug à la mise à jour / renommage
- gestion cohérente de sortOrder
- gestion propre de isAvailable
- validation du prix
- comportement avec imagePath vide ou absent
- comportement si aucune catégorie n’existe
- suppression produit avec feedback clair

Catégories :
- collision de slug
- gestion cohérente de sortOrder
- suppression refusée si des produits y sont rattachés
- message clair si suppression impossible
- cohérence du champ emoji
- comportement si aucune catégorie n’existe

Global :
- états vides propres sur les pages admin
- messages d’erreur cohérents
- retours succès cohérents
- gestion correcte des redirections après création/édition/suppression
- absence de régression sur le site public

4. Cohérence base de données / règles métier
Je veux que tu vérifies si les règles métier importantes sont suffisamment garanties :
- au niveau applicatif
- et, si pertinent, au niveau Prisma / DB

Point particulièrement important :
si une règle critique repose encore uniquement sur un garde-fou fragile alors qu’une contrainte plus sûre peut être mise en place proprement, signale-le et corrige-le si cela reste dans le périmètre raisonnable de la phase 5.

Exemple typique :
- suppression de catégorie contenant des produits
- unicité / stabilité des slugs
- comportements relationnels dangereux

Attention :
ne lance pas une refonte Prisma inutile.
Je veux uniquement les ajustements réellement utiles à la stabilisation du catalogue.

5. Harmonisation architecture / code
Je veux que tu profites de cette phase pour harmoniser proprement le bloc catalogue admin :
- conventions de validation identiques entre produits et catégories
- conventions de server actions cohérentes
- conventions de nommage cohérentes
- logique serveur centralisée
- éviter les duplications inutiles
- éviter les divergences entre CRUD produit et CRUD catégorie

Important :
pas de grand refactor cosmétique.
Seulement les ajustements utiles pour une base propre et maintenable.

6. Vérification du front public
Je veux une vérification explicite de l’impact côté public :
- affichage des catégories
- affichage des produits
- tri / ordre d’affichage si utilisé
- respect de isAvailable si ce champ influence le menu public
- absence de plantage si certaines données sont vides ou nouvellement créées depuis l’admin

Si des ajustements mineurs sont nécessaires côté public pour garder la cohérence avec les données administrées, tu peux les faire.
Mais reste strictement dans le périmètre catalogue.

7. UX admin minimale mais propre
Merci d’harmoniser si nécessaire :
- états vides
- messages d’erreur
- confirmations de suppression
- toasts / feedback utilisateur
- boutons retour / annulation si cela manque clairement

Je ne veux pas une refonte design.
Je veux juste une expérience admin propre, cohérente et non fragile.

8. Vérifications attendues
Je veux des vérifications concrètes de bout en bout :

Produits :
- création
- édition
- suppression
- changement de disponibilité
- comportement du slug
- comportement du sortOrder

Catégories :
- création
- édition
- suppression d’une catégorie vide
- refus de suppression d’une catégorie liée à des produits
- comportement du slug
- comportement du sortOrder

Front public :
- cohérence de l’affichage après modifications admin
- absence de régression

Technique :
- build OK
- cohérence Prisma si ajustement nécessaire
- pas d’erreurs runtime évidentes
- pas de régression sur l’auth admin

9. Compte-rendu final
À la fin, je veux un compte-rendu clair comprenant :
- l’audit initial
- les fragilités identifiées
- les corrections réellement appliquées
- les éventuels ajustements Prisma réalisés ou explicitement non nécessaires
- les fichiers modifiés/créés
- les cas limites désormais correctement gérés
- les éventuels points restants mais non bloquants
- la confirmation explicite que le bloc “catalogue admin” est stabilisé et prêt pour la suite du projet

Contraintes de qualité :
- code propre
- architecture maintenable
- cohérence avec la stack actuelle
- pas de bricolage temporaire
- pas de fonctionnalité hors périmètre
- pas de régression sur la partie publique

Avant d’appliquer les changements :
commence par me présenter brièvement :
1) ton audit du bloc catalogue admin actuel,
2) les fragilités ou incohérences que tu comptes corriger,
3) les fichiers que tu vas modifier,
puis exécute la phase 5 méthodiquement.