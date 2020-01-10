// fighters array, each fighter is an object
function fightersArray(){
    'qui-gon':{
        name: 'Qui-Gon Jinn',
        // Generate a random health between 150 and 200
        health: Math.round(Math.random() * 50) + 150,
        // Generate a random hit strength between 15 and 20
        strength: Math.round(Math.random() * 5) + 15,
    },
    'boba-fett':{
        name: 'Boba Fett',
        health: Math.round(Math.random() * 50) + 150,
        strength: Math.round(Math.random() * 5) + 15,
    },
    'darth-maul':{
        name: 'Darth Maul',
        health: Math.round(Math.random() * 50) + 150,
        strength: Math.round(Math.random() * 5) + 15,
    },
    'darth-vader':{
        name: 'Darth Vader',
        health: Math.round(Math.random() * 50) + 150,
        strength: Math.round(Math.random() * 5) + 15,
    },
}