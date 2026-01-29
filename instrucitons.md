Organise le background du site pour obtenir une continuité visuelle parfaite.

Contraintes :
- Un seul background global (appliqué au body ou au wrapper principal)
- Couleur sable très claire (#FBF5EE ou équivalent)
- Texture sable légère, repeatable, non visible par sections
- Aucune section ne doit avoir son propre background plein
- Pas de rupture visuelle entre la hero et les sections suivantes

Hero :
- L’illustration décorative (palmiers / soleil / nuages) est une image sans fond
- Elle doit être positionnée en absolute au-dessus du background global
- Elle ne doit pas définir le fond de la hero

Sections suivantes :
- Fond transparent
- Séparation uniquement par spacing, layout et cartes
- Les cartes peuvent utiliser un fond translucide (rgba + éventuellement backdrop-filter)

Objectif :
- Donner l’impression d’un décor continu sur toute la page
- Le hero doit sembler être la partie haute du même background que le reste de la page

Ne pas :
- Ajouter plusieurs backgrounds
- Changer la couleur du fond entre sections
- Utiliser des images de fond par section
