$(document).ready(function() {
  // $(document).ready(), vous vous assurez que votre code JavaScript s'exécute uniquement lorsque le DOM est prêt à être manipulé
  $("#myForm").submit(function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    var email = $("#email").val(); // Récupère la valeur de l'adresse e-mail

    $.post("post.php", { email: email }, function(response) {
      var message = response.type + "\n" + response.data + "\n" + response.url;
      alert(message); // Affiche le type, la data et l'url dans une alerte
      
      $("#message").text(response.data);// Affiche le message de redirection sur le DOM
      $("#message2").text(response.url); // Affiche le message de l'url sur le DOM
      $("#myForm").hide(); // Fait disparaître le formulaire

      setTimeout(function() {
        // La méthode globale setTimeout() permet de définir un minuteur de 5 secondes
        window.location.href = response.url; // Redirige l'utilisateur après 5 secondes
      }, 5000);
    });
  });
});