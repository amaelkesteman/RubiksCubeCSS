const move_history = []; // Tableau existant

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
    
    // Mettre à jour le contenu
    historyElement.innerHTML = `
        <h3>Move History</h3>
        <ul>
            ${move_history.map(move => `<li>${move}</li>`).join('')}
        </ul>
        <p>Total moves: ${move_history.length}</p>
    `;

    // Basculer la visibilité si déjà existant
    historyElement.style.display = 
        historyElement.style.display === 'none' ? 'block' : 'block';
}

node.addEventListener('keydown', function(event) {
    const key = event.key;
    
    switch(key) {
        // Rotations
        case 'r':
        case 'R':
        case 'l':
        case 'L':
        case 't':
        case 'T':
        case 'd':
        case 'D':
        case 'f':
        case 'F':
        case 'b':
        case 'B':
        case 'e':
        case 'E':
        case 'm':
        case 'M':
        case 's':
        case 'S':
            move_history.push(key);
            break;
        
        // Réinitialisation du tableau
        case 'U': //reset le cube
        case 'x': //melange le cube
            move_history.length = 0;
            break;
        
        // Annulation de la dernière rotation
        case 'u':
            move_history.pop();
            break;
    }
});