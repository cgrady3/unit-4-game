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

// set character stats 
function fighterValues (){
    // a variable that call the fighters array function to act as a simple array 
    let index = Object.keys(fightersArray);

    for (let i = 0; i < index.length; i++){
    // itterare through the index array 

    // set variables to grab the character and index reference 

    // make a div to hold thte info of the indexed fighter in the stage-one area
    }
}

//