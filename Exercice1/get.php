<?php
// Définition d'un tableau associatif contenant les propriétés de la réponse
$response = array(
    "type" => "success", // Propriété "type" avec la valeur "success"
    "data" => "vous allez être redirigé", // Propriété "data" avec la valeur "vous allez être redirigé"
    "url" => "https://google.fr" // Propriété "url" avec la valeur "https://google.fr"
);


header('Content-Type: application/json');
// Cette ligne de code définit l'en-tête de la réponse HTTP pour indiquer au navigateur que le contenu de la réponse est au format JSON

// Encodage du tableau associatif en format JSON et envoi de la réponse au client
echo json_encode($response);
?>