function characterHealth() {
    // Generate a random health between 150 and 200
    var health = Math.round(Math.random() * 50) + 150;
    return health;
}

function characterStrength() {
    // Generate a random hit strength between 15 and 20
    var strength = Math.round(Math.random() * 5) + 15;
    return strength;
}

// fighters array, each fighter is an object


function fightersArray() {
    
    // using return key to make array data available during fightersArray function call
    return {
        'qui-gon': {
            name: 'Qui-Gon Jinn',
            health: characterHealth(),
            strength: characterStrength(),
        },
        'boba-fett': {
            name: 'Boba Fett',
            health: characterHealth(),
            strength: characterStrength(),
        },
        'darth-maul': {
            name: 'Darth Maul',
            health: characterHealth(),
            strength: characterStrength(),
        },
        'darth-vader': {
            name: 'Darth Vader',
            health: characterHealth(),
            strength: characterStrength(),
        },
    }
}
console.log(fightersArray())

// create fighter tokens using jQuery's and append to stage-one's fighters div

// set character stats 
function fighterValues() {
    // a variable that call the fighters array function to act as a simple array 
    let index = Object.keys(fightersArray);

    for (let i = 0; i < index.length; i++) {
        // itterare through the index array 

        // set variables to grab the character and index reference 

        // pass the info of the indexed fighter to the stage-one's fighters div
    }
}

