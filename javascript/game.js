// Generate a random health between 150 and 200
function characterHealth() {

    var health = Math.round(Math.random() * 50) + 150;
    return health;
}

// Generate a random hit strength between 15 and 20
function characterStrength() {

    var strength = Math.round(Math.random() * 5) + 15;
    return strength;
}

// fighters array, each fighter is an object
function fightersArray() {

    // return key to make array data available during fightersArray function call
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

// assign fighterArray references 
function fighterValues() {

    // a variable that call the fighters array function to act as a simple array 
    let index = Object.keys(fightersArray);

    for (let i = 0; i < index.length; i++) {
        // itterare through the index array 

        // set variables to grab the character and index reference 

        // pass the info of the indexed fighter to the fightersToken function
    }
}

// create fighter tokens using jQuery's and append to stage-one's fighters div
// chosen fighter and fighter index are passed in parameters
function fighterToken(index, fighter) {

    // class is given to the div since there are multiple tokens
    let tokenDiv = $('<div class="token">');

    // create token elements to go into the div
    let tokenImg = $('<img alt="head shot"').attr('src', /*figure out how to call the image here*/);
    let tokenHP = $('<div class="token-label">').text(fightersArray.health); //calling the array here isnt bringing up the text
    let tokenName = $('<div class="token-label">').text(fightersArray.health);// figure out how to call the array info from here

    // append token elements to tokenDiv
    tokenDiv.append(tokenName).append(tokenImg).append(tokenHP);
}







// start game after page loads
$(document).ready(function(){

    //click event to select fighter
    //of all the fighters, clicking on a fighter's token selects the fighter
    $('#allFighters').click('.token', function(){
        let fighter = $(this);

        // move the the fighter seleceted by the click event to the userFighter ID div
        $('#userFighter').append(this);

        // move unselected fighters to stage-two div
    })

    // click event for the attack button

    // click event for the strong attack button

    // click event for reset button





})

