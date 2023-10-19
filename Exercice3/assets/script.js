$(document).ready(function () {
  // $(document).ready(), vous vous assurez que votre code JavaScript s'exécute uniquement lorsque le DOM est prêt à être manipulé
  $("#myForm").submit(function (event) {
    //  Evénement en jQuery qui se déclenche lorsque le formulaire avec l'ID myForm avec le paramètre event, qui représente l'événement de soumission du formulaire
    event.preventDefault(); // Empêche le rechargement de la page

    var email = $("#email").val(); // Récupère la valeur de l'adresse e-mail

    $.ajax({
      // $.ajax() est une méthode jQuery utilisée pour effectuer des requêtes HTTP asynchrones et gérer les réponses de manière flexible.
      url: "post.php",
      method: "POST",
      data: { email: email },
      dataType: "json",
      success: function (response) {
        // Cette fonction de rappel est exécutée lorsque la requête AJAX est réussie et que la réponse est reçue du serveur
        // Le paramètre "response" contient la réponse du serveur
        var message = response.type + "\n" + response.data + "\n" + response.url;
        alert(message); // Affiche le type, la data et l'url dans une alerte

        $("#message").text(response.data); // Affiche le message de redirection sur le DOM
        $("#message2").text(response.url); // Affiche le message de l'url sur le DOM
        $("#myForm").hide(); // Fait disparaître le formulaire

        setTimeout(function () {
          window.location.href = response.url; // Redirige l'utilisateur après 5 secondes
        }, 5000);
      },
    });
  });
});
