# Ajax & jQuery

## Structurer vos exercices comme des projets
- Organisez vos exercices de manière à ce qu'ils ressemblent à des projets autonomes.
- Utilisez une structure de répertoires cohérente et bien organisée.
- Séparez le code en fichiers distincts si nécessaire.
- Suivez les meilleures pratiques de développement pour maintenir un code propre et facilement maintenable.

## Nommer vos variables en anglais
- Il est recommandé de nommer vos variables en anglais pour garantir la cohérence et la compréhension du code.
- Utilisez des noms de variables significatifs qui décrivent leur fonction ou leur contenu.

## Exercice 1:
Créez une page HTML qui contient un bouton.
Au clic sur ce bouton, exécutez une requête GET jQuery vers get.php qui renvoie un objet avec les propriétés suivantes : type = "success", data = "vous allez être redirigé" et url = "https://google.fr". Ensuite, affichez les données dans la console.

## Exercice 2:
Recréez l'exercice précédent, puis ajoutez un champ de saisie (input) pour faire transiter une adresse e-mail via une requête POST. Traitez cette adresse e-mail dans post.php. Le script post.php doit renvoyer un objet avec les propriétés type, data et url. Enfin, affichez le type dans une alerte, le message de redirection via la data sur le DOM, masquez le formulaire et redirigez l'utilisateur vers l'URL spécifiée après 5 secondes.

## Exercice 3:
Recréez l'exercice précédent en utilisant la méthode ajax de jQuery pour effectuer les requêtes asynchrones.
