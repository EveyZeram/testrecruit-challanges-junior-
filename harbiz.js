// Ejercicio de asignación de clientes a entrenadores teniendo en cuenta la reputación y la disponibilidad de plazas del entrenador.
function assignClients(trainers, clients) {
    // Ordenar los clientes por reputación de mayor a menor
    clients.sort((a, b) => b.reputation - a.reputation);
    
    // Recorrer sobre la lista de clientes
    clients.forEach(client => {
        let assigned = false;
        trainers.forEach(trainer => {
            if (trainer.availability > 0 && (trainer.reputation*=2) >= client.reputation && !assigned) {
                trainer.availability--;
                console.log(`Cliente ${client.name} asignado al entrenador ${trainer.name}`);
                // Marcar como asignado
                assigned = true; 
            }
        });
        if (!assigned) {
            console.log(`No se pudo asignar cliente ${client.name} a ningún entrenador disponible.`);
        }
    });
}

// Lista de Entrenadores
const trainers = [
    { name: 'A', reputation: 4.5, availability: 1 },
    { name: 'B', reputation: 3.2, availability: 4 },
    { name: 'C', reputation: 1.2, availability: 3 },
    { name: 'D', reputation: 3.4, availability: 2 }
];

// Lista de Clientes
const clients = [
    { name: 'q', reputation: 2.6 },
    { name: 'r', reputation: 3.7 },
    { name: 's', reputation: 8.5 },
    { name: 't', reputation: 9.7 },
    { name: 'u', reputation: 2.6 },
    { name: 'v', reputation: 4.7 },
    { name: 'w', reputation: 5.6 },
    { name: 'x', reputation: 3.7 },
    { name: 'y', reputation: 8.1 },
    { name: 'z', reputation: 2.5 }
];

// Llamamos a la función
assignClients(trainers, clients);
