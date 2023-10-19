<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // $_SERVER['REQUEST_METHOD'] est utilisé pour connaître la méthode de requête (par exemple GET, POST, PUT, etc.) 
  $email = $_POST["email"]; // Récupère l'adresse e-mail depuis la requête POST
  
  // tableau associatif contenant les propriétés de la réponse
  $response = array(
    "type" => "success", // Propriété "type" avec la valeur "success"
    "data" => "Vous allez être redirigé sur", // Propriété "data" avec le message de redirection
    "url" => "https://google.fr" // Propriété "url" avec l'URL de redirection
  );

  header('Content-Type: application/json');
  echo json_encode($response);
}
?>