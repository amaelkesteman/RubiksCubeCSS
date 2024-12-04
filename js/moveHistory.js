const move_history = []; // création du tableau.

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