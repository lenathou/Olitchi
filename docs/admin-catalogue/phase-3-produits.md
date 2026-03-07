# Phase 3 : CRUD Admin des Produits

## Ce qui a été fait
L'objectif central était de permettre l'administration dynamique des produits du catalogue depuis l'interface sécurisée.

- **Composant UI Mutualisé (`ProductForm.tsx`)** : Création d'un formulaire robuste et stylisé avec `react-hook-form`, validation par `zod` et composants `shadcn/ui`, capable de créer OU mettre à jour un produit.
- **Génération Sécurisée de Slug** : Développement d'un algorithme garantissant l'unicité des URLs produits (`slugify` couplé à un test d'existence avec incrément "-1", "-2", etc. sur la base de données).
- **Tris (`sortOrder`)** : Prise en charge d'un placement arbitraire, ou calcul automatique pour placer un produit en fin de liste si `0` est saisi.
- **Server Actions Protégées** : Fonctions `createProductAction`, `updateProductAction`, `deleteProductAction` dans `src/lib/server/admin/products.ts`, toutes gardées par `requireAdmin()`.
- **Bouton de Suppression** : Création d'un `DeleteProductButton` affichant une Modale (Dialog) de confirmation stricte avant suppression en base.
- **Pages Admin** :
  - Liste exhaustive `/admin/produits` avec indicateurs de statut.
  - Page de création `/admin/produits/nouveau`.
  - Page d'édition `/admin/produits/[id]/modifier`.

## Comment tester
1. Connectez-vous à l'administration et rendez-vous dans le menu **Produits**.
2. **Création** : Cliquez sur *Ajouter un produit*. Laissez son ordre à 0, ne mettez pas de catégorie (ceci sera testé en Partie 5) ou mettez-en une si vous avez déjà exécuté les phases suivantes.
3. **Modification** : Depuis la liste, cliquez sur l'icône de stylo d'un produit. Changez son nom et observez qu'une fois validé, la liste est bien à jour (son Slug est répercuté proprement dans la DB s'il est unique).
4. **Visibilité** : Cochez/Décochez *Produit disponible* dans le formulaire d'un produit, sauvegardez, puis allez sur la Homepage ou la page `/menu` publiques : le produit doit apparaître ou disparaître instantanément.
5. **Suppression** : En cliquant sur la poubelle, la modale d'alerte s'ouvre. Confirmez, et vérifiez la disparition du produit, tant dans la liste admin que sur la carte publique.
