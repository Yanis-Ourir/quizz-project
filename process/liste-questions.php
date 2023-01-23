<?php
include('connexion.php');

$sqlQuestions = "SELECT * FROM questions WHERE id = ?";
$questionsList = $pdo->prepare($sqlQuestions);
$questionsList->execute();
$questions = $questionsList->fetchAll();
