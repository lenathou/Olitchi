Tu travailles sur le projet actuel Olitchi, que tu connais déjà dans son état réel.

Le bloc catalogue admin est déjà en place et consolidé.
Le panier invité côté client est également déjà implémenté.

Nous ouvrons maintenant la première phase du bloc “checkout click and collect”.

Décision produit importante :
Je ne veux toujours PAS imposer d’authentification utilisateur.
Le checkout doit rester en mode invité (guest checkout), pour limiter la friction.
En revanche, à terme, la commande devra être considérée comme réellement valide uniquement après paiement confirmé.
Mais ce paiement ne fait PAS encore partie de cette phase.

Objectif principal de cette phase :
implémenter proprement le socle de commande click and collect en mode invité, avec :
- une page checkout invitée
- un formulaire client minimal
- une vraie validation serveur
- une relecture des produits en base
- un recalcul serveur du total
- une création de commande en base avec statut initial PENDING_PAYMENT

Important :
Cette phase prépare le paiement, mais ne l’implémente pas encore.

Périmètre strict de cette phase :
- ajout des modèles Prisma nécessaires pour les commandes
- page checkout invitée
- validation Zod du formulaire checkout
- création de commande en base
- création des lignes de commande en base
- statut initial PENDING_PAYMENT
- structure prête pour brancher un provider de paiement en phase suivante

Ne PAS implémenter maintenant :
- paiement Stripe / PayPal réel
- webhook de paiement
- passage à PAID
- authentification user
- espace compte client
- historique client
- emails automatiques
- dashboard admin commandes complet
- logique avancée de créneaux
- promo codes
- fidélité

1. Audit préalable
Avant de coder, commence par analyser :
- la structure actuelle du panier invité
- le type exact des items stockés côté client
- la structure Prisma actuelle
- le meilleur emplacement pour la page checkout invitée
- la cohérence avec les pages publiques existantes

Je veux que tu adaptes la solution au projet réel,
sans refonte inutile du panier déjà en place.

2. Modèle de données commande
Je veux un socle Prisma propre pour la commande.

Merci de proposer et implémenter un modèle clair au minimum avec :

- un modèle Order
- un modèle OrderItem
- un enum OrderStatus
- si pertinent, un enum PaymentStatus

Objectif métier :
une commande peut exister avant paiement, mais elle doit être marquée clairement comme en attente de paiement.

Attendus minimaux pour Order :
- id
- status (avec au moins PENDING_PAYMENT)
- customerName
- customerPhone
- customerEmail
- notes optionnel
- pickupAt optionnel si tu juges pertinent dès maintenant
- totalAmount
- createdAt
- updatedAt

Attendus minimaux pour OrderItem :
- id
- orderId
- productId
- productNameSnapshot
- unitPriceSnapshot
- quantity
- lineTotal

Important :
je veux des snapshots de nom et de prix dans OrderItem.
Le but est de figer la commande même si le catalogue change plus tard.

Si tu ajoutes des champs liés au futur paiement (ex. paymentProvider, paymentStatus, checkoutSessionId), ils doivent rester sobres et justifiés par la phase suivante, sans surcharger inutilement cette phase.

3. Validation métier serveur
Point très important :
le serveur ne doit jamais faire confiance aveuglément aux données du panier client.

Je veux une vraie validation serveur qui :
- reprend les items du panier envoyés depuis le checkout
- recharge les produits concernés depuis la base
- vérifie qu’ils existent
- vérifie qu’ils sont encore disponibles
- vérifie que les quantités sont valides
- recalcule les sous-totaux
- recalcule le total global réel

Si un produit est invalide, supprimé, indisponible, ou si le panier est vide :
- refuser proprement la création de commande
- renvoyer une erreur claire côté UI

Important :
le total en base doit venir du serveur, pas du front.

4. Page checkout invitée
Créer une vraie page checkout invitée, par exemple :
- /commande
ou
- /checkout

Adapte au projet réel, mais garde une route claire.

La page doit afficher :
- le résumé du panier
- le total
- un formulaire client simple

Champs attendus au minimum :
- nom
- téléphone
- email
- notes optionnel

Le tout doit être mobile-friendly, cohérent avec le style actuel, et rester simple.

Je ne veux pas de surdesign.
Je veux un checkout clair, rapide, crédible.

5. Formulaire et validation
Utiliser une validation propre, cohérente avec le reste du projet :
- Zod
- typage strict
- pas de any

Je veux une validation à la fois :
- côté formulaire
- côté serveur

Merci de gérer proprement :
- champs requis
- format email
- téléphone raisonnable
- panier vide
- erreurs serveur lisibles

6. Création de commande
Quand le formulaire est valide et que le panier serveur est cohérent :
- créer une Order en base avec statut PENDING_PAYMENT
- créer les OrderItem associés
- stocker les snapshots produit/prix
- totalAmount doit être le total recalculé côté serveur

Important :
à cette phase, la commande n’est pas encore payée.
Elle doit simplement exister comme base métier fiable pour la future phase paiement.

Je veux que cette création soit proprement centralisée dans une couche serveur lisible.

Exemple d’esprit attendu si adapté au repo réel :
- src/lib/server/orders/
- src/lib/validations/checkout.ts
- éventuellement une action serveur dédiée

7. Intégration avec le panier existant
Depuis la page /panier actuelle :
- le bouton “Continuer vers la commande” doit mener vers la page checkout
- le checkout doit consommer les données du panier invité existant
- sans casser le store Zustand actuel
- sans refonte du panier

Je veux une intégration simple et cohérente.

8. UX attendue
Le checkout doit gérer proprement :
- panier vide → état explicite
- erreur de validation → message clair
- incohérence produit → message clair invitant à revoir le panier
- succès de création de commande → état clair préparant la future phase paiement

Important :
comme le paiement n’est pas encore branché, il faut une UX intermédiaire propre.
Par exemple :
- création de la commande puis redirection vers une page de confirmation temporaire indiquant que l’étape paiement sera branchée à la phase suivante
ou
- création d’une page “commande enregistrée en attente de paiement” si cela reste cohérent sans induire le client en erreur

Je ne veux pas d’ambiguïté métier :
la commande doit être clairement présentée comme NON validée tant que le paiement n’existe pas encore.

9. Typage strict
Je ne veux pas de any.
Merci de :
- typer les DTO de checkout
- typer les Order / OrderItem côté usage applicatif
- typer les retours serveur
- typer les props des composants créés/modifiés
- éviter les contournements de type

10. Vérifications attendues
Je veux des vérifications concrètes :
- migration Prisma correcte
- build OK
- accès à la page checkout depuis /panier
- validation formulaire OK
- panier vide bloqué proprement
- produit indisponible/invalide refusé côté serveur
- commande créée correctement en base avec statut PENDING_PAYMENT
- OrderItem créés correctement avec snapshots
- aucune régression sur le panier invité existant

11. Compte-rendu final
À la fin, je veux un compte-rendu clair avec :
- le modèle Prisma retenu
- les enums ajoutés
- les fichiers créés / modifiés
- l’architecture retenue pour la création de commande
- le comportement exact de la page checkout
- la stratégie de revalidation serveur du panier
- le flux exact menant à une commande PENDING_PAYMENT
- les points déjà préparés pour la future phase paiement
- la confirmation explicite que cette phase est terminée et prête pour la phase suivante “paiement + validation réelle”

Contraintes de qualité :
- code propre
- architecture maintenable
- cohérence avec la stack actuelle
- pas de sur-ingénierie
- pas de any
- pas de dérive vers l’auth user
- pas de paiement réel dans cette phase
- pas de régression sur le public ou le panier

Avant d’appliquer les changements :
commence par me présenter brièvement :
1) ton diagnostic sur l’intégration du checkout au panier actuel,
2) le schéma Prisma commande que tu comptes ajouter,
3) les fichiers que tu vas créer / modifier,
puis implémente cette phase méthodiquement.

Important :
la commande créée dans cette phase ne doit jamais être présentée comme définitivement validée côté métier.
Elle doit être clairement identifiée comme en attente de paiement (PENDING_PAYMENT), car la validation réelle n’interviendra qu’à la phase suivante.