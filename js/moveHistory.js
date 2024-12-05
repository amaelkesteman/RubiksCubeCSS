let move_history = []; // création du tableau

export function displayMoveHistory() {
    // Créer un élément d'interface s'il n'existe pas déjà
    let historyElement = document.getElementById('move-history');
    
    if (!historyElement) {
        historyElement = document.createElement('div');
        historyElement.id = 'move-history';
        historyElement.style.position = 'fixed';
        historyElement.style.top = '10px';
        historyElement.style.right = '10px';
        historyElement.style.backgroundColor = 'rgba(0,0,0,0.7)';
        historyElement.style.color = 'white';
        historyElement.style.padding = '10px';
        historyElement.style.borderRadius = '5px';
        historyElement.style.maxWidth = '200px';
        document.body.appendChild(historyElement);
    }

    // Inverser la liste pour afficher les derniers mouvements en premier
    const displayHistory = [...move_history].reverse();
    
    // Mettre à jour le contenu
    historyElement.innerHTML = `
        <h3>Move History</h3>
        <ul>
            ${displayHistory.map(move => `<li>${move}</li>`).join('')}
        </ul>
        <p>Total moves: ${move_history.length}</p>
    `;

    // Basculer la visibilité si déjà existant
    historyElement.style.display = 
        historyElement.style.display === 'none' ? 'block' : 'block';
}

export function addToMoveHistory(key) {
    move_history.push(key);
}

export function resetMoveHistory() {
    move_history = [];
}

export function undoLastMove() {
    move_history.pop();
}