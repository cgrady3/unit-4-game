//global variables
var fighters = fightersArray();

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
            picture: './css/images/Qui-Gon-Jinn.jpg'
        },
        'boba-fett': {
            name: 'Boba Fett',
            health: characterHealth(),
            strength: characterStrength(),
            picture: './css/images/boba-fett.jpg'
        },
        'darth-maul': {
            name: 'Darth Maul',
            health: characterHealth(),
            strength: characterStrength(),
            picture: './css/images/darth-maul.jpeg'
        },
        'darth-vader': {
            name: 'Darth Vader',
            health: characterHealth(),
            strength: characterStrength(),
            picture: './css/images/darth-vader.jpg'
        },
    }
}
console.log(fightersArray())
fighterValues()

// assign fighterArray references 
function fighterValues() {

    // a variable that call the fighters array function to act as a simple array 
    var index = Object.keys(fighters);

    for (var i = 0; i < index.length; i++) {
        // set variables to grab the character and index reference 
        var fighterIndex = index[i];
        var fighter = fighters[fighterIndex]

        // create token elements to go into the div
        var tokenDiv = $('<div class="token">');
        var tokenImg = $('<img alt="head shot">').attr('src', fighter.picture);
        var tokenHP = $('<div class="token-label">').text(fighter.health);
        var tokenName = $('<div class="token-label">').text(fighter.name);

        // append token elements to tokenDiv
        var token = tokenDiv.append(tokenName).append(tokenImg).append(tokenHP);

        // append token to the fighters area
        $('#allFighters').append(token)
    }
}








// start game after page loads
$(document).ready(function () {

    //click event to select fighter
    //of all the fighters, clicking on a fighter's token selects the fighter
    $('#allFighters').click('.token', function () {
        var fighter = $(this);

        // move the the fighter seleceted by the click event to the userFighter ID div
        $('#userFighter').append(this);

        // move unselected fighters to stage-two div
    })

    // click event for the attack button

    // click event for the strong attack button

    // click event for reset button





})

