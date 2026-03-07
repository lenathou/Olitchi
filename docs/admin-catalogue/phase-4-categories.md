# Phase 4 : Gestion Admin des Catégories (CRUD)

## Ce qui a été fait
Le besoin de cette phase était de permettre l'administration sécurisée des groupements de produits. La complexité majeure résidait dans le blocage explicite d'une suppression dangereuse survenue dans la base de données.

- **Vérification de Schéma Prisma** : Modification vitale de la relation `Product` -> `Category`. Suppression de la logique passive (`onDelete: Cascade`) en faveur d'un mode bloquant (`onDelete: Restrict`). 
- **Composant UI Mutualisé (`CategoryForm.tsx`)** : Similaire aux produits, création d'un formulaire gérant champs textes et validation `zod` de `emoji`, `name`, `sortOrder`.
- **Génération de Slug (Catégories)** : Utilisation de la même mécanique anti-collision puissante développée à l'étape 3.
- **Double-Fixation de Sécurité à la Suppression** : 
  - *Niveau Base de données* : PostGreSQL refusera physiquement toute suppression de catégorie contenant des produits.
  - *Niveau UI Applicatif* : `DeleteCategoryButton` scanne côté serveur le nombre de produits liés et bloque l'affichage de la soumission *"Delete"* avec un message préventif de couleur rouge si la liste n'est pas vide.
- **Pages Admin** :
  - Liste exhaustive `/admin/categories` exposant le bouton "Produits Liés".
  - Page de création `/admin/categories/nouveau`.
  - Page d'édition `/admin/categories/[id]/modifier`.

## Comment tester
1. Rendez-vous sur la page `/admin/categories`.
2. **Création** : Appuyez sur bouton "+" *Nouvelle catégorie*. Indiquez un nom ("Boissons") et un Emoji facultatif ("🥤"). Assignez l'ordre à `0`. Postez le formulaire, et regardez le tableau se mettre à flot.
3. **Modification** : Cliquez sur le stylo de la nouvelle catégorie. Essayez un renommage massif ; son slug restera intact si possible, et tout autre slug entrera en phase d'unicité avec "-1".
4. **Suppression Sécure (Test Ultime)** :
   A. Cherchez une catégorie possédant 0 produit. Cliquez sur la Corbeille de cette ligne. La suppression doit fonctionner immédiatement de façon propre.
   B. Cherchez une catégorie possédant 1 ou plusieurs produits. Cliquez sur sa corbeille : son bouton *Supprimer* final est grisé/désactivé (in-cliquable) et un bandeau rouge s'affiche : *"Attention : Cette catégorie contient X produit(s)."*
5. Liez un Produit à votre catégorie "Boissons" depuis  `/admin/produits`. Revenez sur l'interface `/admin/categories` : Le badge de la colonne "Produits liés" arbore désormais le chiffre *1*.
