# Phase 2 : Authentification Admin et Protection

## Ce qui a été fait
La deuxième phase a permis de verrouiller l'accès de l'espace administration aux seuls utilisateurs autorisés, en implémentant une vraie logique de gestion de session.

- **Modèle de données** : Ajout des modèles `User` et `Session` dans Prisma pour stocker les administrateurs et leurs sessions actives. Les mots de passe sont hashés via `bcryptjs`.
- **Logique d'Authentification (`src/lib/auth/session.ts`)** : 
  - Stockage des tokens de session hashés en base de données pour plus de sécurité (seul le cookie navigateur connaît le token brut).
  - Implémentation de fonctions robustes : `createSession`, `validateSessionToken`, et `invalidateSession`.
- **Protection des Routes (`requireAdmin()`)** : Création d'un utilitaire `requireAdmin` (`src/lib/auth/permissions.ts`) qui peut être appelé de n'importe où côté serveur (Server Actions, Pages) pour vérifier la session. S'il n'y a pas de session active, le système redirige automatiquement l'utilisateur vers `/admin/login`.
- **Middleware** : Un middleware léger a été ajouté pour bloquer au plus tôt l'accès aux routes `/admin/*` (sauf `/login`) si aucun cookie de session n'est détecté.
- **Server Actions de Login/Logout** : Implémentation complète de la connexion et de la déconnexion dans `src/lib/server/auth.ts`.
- **Script de Seeding** : Création initiale de `prisma/seed.ts` pour générer le premier compte administrateur.

## Comment tester
1. Modifiez manuellement l'URL vers `http://localhost:3000/admin`. Le système doit vous renvoyer instantanément sur `/admin/login`.
2. Connectez-vous avec les identifiants administrateurs :
   - Émail : `admin@olitchi91.fr`
   - Clé : `admin123!`
3. Une fois connecté, vous atterrissez sur le dashboard. Vérifiez que la navigation dans les pages du dashboard fonctionne.
4. Fermez l'onglet, rouvrez-le et naviguez vers `/admin` : votre session doit être mémorisée grâce au cookie encrypté.
5. Utilisez le bouton "Déconnexion" en bas à gauche de la sidebar. Vous devriez être redirigé vers la page de login, et si vous tentez un "Retour en arrière" avec le navigateur, `/admin` vous bloquera de nouveau.
