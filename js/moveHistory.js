const move_history = []; // Tableau existant

export function displayMoveHistory() {
    // Créer un élément d'interface s'il n'existe pas déjà
    let historyElement = document.getElementById('move-history');
    
    if (!historyElement) {
        historyElement = document.createElement('div');
        historyElement.id = 'move-history';
        historyElement.style.position = 'fixed';
        historyElement.style.top = '0';
        historyElement.style.left = '50%';
        historyElement.style.transform = 'translateX(-50%)';
        historyElement.style.backgroundColor = 'rgba(0,0,0,0.5)';
        historyElement.style.color = 'white';
        historyElement.style.padding = '5px';
        historyElement.style.width = '100%';
        historyElement.style.textAlign = 'center';
        historyElement.style.fontSize = '36px';
        historyElement.style.zIndex = '1000';
        document.body.appendChild(historyElement);
    }
    
    // Mettre à jour le contenu
    historyElement.innerHTML = move_history.join(' ');

    // Basculer la visibilité si déjà existant
    historyElement.style.display = 
        historyElement.style.display === 'none' ? 'block' : 'block';
}

document.addEventListener('keydown', function(event) {
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
        case 'X': //melange le cube
            move_history.length = 0;
            break;
        
        // Annulation de la dernière rotation
        case 'u':
            move_history.pop();
            break;
    }

    displayMoveHistory();
});

export function toggleMoveHistory(action) {
    const historyElement = document.getElementById("move-history");

    if (!historyElement) return;

    if (action === "show") {
        historyElement.style.display = "block";
    } else if (action === "hide") {
        historyElement.style.display = "none";
    }
}