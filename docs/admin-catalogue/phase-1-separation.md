# Phase 1 : Séparation Structurelle Public / Admin

## Ce qui a été fait
L'objectif de cette première phase était de créer une fondation propre pour le futur panneau d'administration, sans perturber le site public existant.

- **Création du Layout Admin** : Mise en place d'un layout dédié (`src/app/admin/(dashboard)/layout.tsx`) distinct du layout public. Ce layout inclut une barre de navigation latérale (Sidebar) et un en-tête (Header) spécifiques à l'administration.
- **Création des pages "Placeholder"** :
  - La page de connexion `/admin/login` avec une UI propre (bureau et mobile) prête à recevoir la logique d'authentification.
  - La page d'accueil du dashboard `/admin` avec des cartes statistiques prêtes à être dynamisées.
- **Composants d'UI Admin** : Création de `AdminHeader`, `AdminSidebar`, et `AdminMobileNav` pour garantir une expérience utilisateur fluide et isolée du site vitrine.

## Comment tester
1. Lancez le serveur de développement : `pnpm dev`.
2. Ouvrez votre navigateur et naviguez vers `http://localhost:3000`. Vérifiez que le site public (menu, accueil, localisation) fonctionne sans aucun changement visible et que le layout classique avec son footer est toujours présent.
3. Naviguez vers `http://localhost:3000/admin/login`. Vous devriez voir une page de connexion pure, sans éléments de navigation du site public.
4. Naviguez vers `http://localhost:3000/admin`. Vous devriez voir le layout d'administration avec sa sidebar et son header spécifiques, ainsi que les cartes statistiques. Notez qu'à ce stade, les clics sur les menus de la sidebar ou les boutons de connexion n'ont pas d'effets métiers réels.
