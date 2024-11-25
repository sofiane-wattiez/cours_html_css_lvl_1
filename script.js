// Variable pour suivre l'état des scores (affichés ou masqués)
let scoresVisible = false;

// Fonction appelée lors du clic sur le bouton
function revealScores() {
  // Sélectionne uniquement les cellules de la dernière colonne (scores)
  const scoreCells = document.querySelectorAll('.finalists-table tbody tr td:last-child');

  // Si les scores sont masqués, on les affiche
  if (!scoresVisible) {
    scoreCells.forEach(cell => {
      cell.classList.remove('hidden'); // Supprime la classe "hidden" pour afficher les scores
    });
    scoresVisible = true; // Met à jour l'état pour indiquer que les scores sont visibles
  } 
  // Si les scores sont visibles, on les masque à nouveau
  else {
    scoreCells.forEach(cell => {
      cell.classList.add('hidden'); // Ajoute la classe "hidden" pour masquer les scores
    });
    scoresVisible = false; // Met à jour l'état pour indiquer que les scores sont masqués
  }
}
