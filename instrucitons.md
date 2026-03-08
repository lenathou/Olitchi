Complément important — Sécurité des données client et hygiène minimale du checkout

Dans cette phase, le checkout invité commence à collecter des données personnelles (nom, email, téléphone, notes éventuelles).
Je veux donc que l’implémentation respecte un minimum de garde-fous techniques et de sobriété dans la collecte.

Merci d’intégrer explicitement les exigences suivantes :

1. Minimisation des données
Ne collecter que les données réellement utiles à la commande click and collect.
Pour cette phase, rester sobre :
- customerName
- customerPhone
- customerEmail
- notes optionnel
- pickupAt uniquement si réellement utile à ce stade

Ne pas ajouter d’autres champs personnels non nécessaires.

2. Validation stricte des entrées
Je veux une validation Zod stricte côté formulaire ET côté serveur pour toutes les données client.

Merci de prévoir au minimum :
- trim des chaînes
- longueurs maximales raisonnables
- email validé proprement
- téléphone validé de manière raisonnable sans complexité excessive
- notes optionnel mais avec longueur max claire
- rejet des payloads vides ou anormalement volumineux

Exemples d’attendus :
- customerName : requis, trim, min raisonnable, max raisonnable
- customerPhone : requis, trim, max raisonnable
- customerEmail : requis, trim, email valide, max raisonnable
- notes : optionnel, trim, max raisonnable

3. Aucune confiance dans le client
Le front ne doit jamais être considéré comme source fiable pour :
- les prix
- les sous-totaux
- le total global
- la disponibilité produit
- l’existence réelle des produits

Le serveur doit recalculer et revalider tout cela au moment de créer la commande.

4. Ne pas exposer inutilement les données client
Je ne veux pas que des données personnelles soient exposées inutilement :
- pas d’affichage excessif de données client dans l’URL
- pas de page publique consultable librement contenant les détails sensibles d’une commande
- pas de fuite d’informations personnelles dans le front public

Si une page intermédiaire de confirmation existe, elle doit rester sobre et ne pas afficher plus d’informations que nécessaire.

5. Logs et erreurs
Éviter de logguer les données personnelles brutes.
Je ne veux pas de console.log ou logs serveur affichant directement :
- email
- téléphone
- notes
- payload complet du checkout

En cas d’erreur, garder des messages utiles mais sobres, sans fuite inutile de données utilisateur.

6. Messages d’erreur côté UI
Les erreurs retournées au client doivent être claires mais non bavardes.
Éviter les messages qui exposent trop de détails internes.
Je veux des messages simples du type :
- panier invalide
- un produit n’est plus disponible
- informations client invalides
- impossible de préparer la commande pour le moment

7. Structure prête pour des protections futures
Sans implémenter tout de suite une usine à gaz, je veux que la structure reste compatible avec l’ajout futur de :
- rate limiting sur la création de commande
- anti-spam / anti-bot léger
- politique de confidentialité / mentions checkout
- conservation contrôlée des données

Ne pas implémenter ces briques maintenant si cela sort du périmètre, mais ne pas structurer le code d’une manière qui les rendrait pénibles à ajouter ensuite.

8. Typage strict et hygiène code
Je ne veux pas de any dans cette phase.
Les DTO, payloads, retours d’action et objets manipulant des données client doivent être proprement typés.

9. Compte-rendu attendu sur cet aspect
Dans le compte-rendu final, je veux un petit point dédié indiquant explicitement :
- quelles données client sont collectées
- quelles validations sont appliquées
- comment le serveur revalide la commande
- quelles précautions ont été prises pour éviter l’exposition inutile de données client
- ce qui reste à prévoir plus tard (rate limiting, mentions légales, etc.) sans l’implémenter maintenant