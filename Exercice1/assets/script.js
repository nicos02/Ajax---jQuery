$(document).ready(function () {
  // Cette fonction s'exécute lorsque le document HTML est complètement chargé
  $("#myButton").click(function () {
    // Cette fonction s'exécute lorsque le bouton avec l'ID "myButton" est cliqué
    $.get("./get.php", function (response) {
      // Cette ligne envoie une requête GET vers le fichier "get.php" et récupère la réponse
      console.log(response); // Cette ligne affiche la réponse dans la console du navigateur
    });
  });
});
