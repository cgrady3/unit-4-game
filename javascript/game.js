//global variables
// make a function a variable so it can be run by loops
var fighters = fightersArray();
var beginGame = initGame();

// a variable that call the fighters array function to act as a simple array 
var index = Object.keys(fighters);
console.log(index)

// create function to initialize the game state 
function initGame() {

    return {
        userFighter: null,
        opponent: null,
        opponentsRemaining: fighters.length - 1,
        strongAttacks: null,
    }

}

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

// fighters array, each fighter is an object (object literal)
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

function createToken(fighter, index) {

    // create token elements to go into the div
    var tokenDiv = $('<div class="token" data-index = '`${index}`'>');
    var tokenImg = $('<img alt="head shot">').attr('src', fighter.picture);
    var tokenHP = $('<div class="token-label">').text(fighter.health);
    var tokenName = $('<div class="token-label">').text(fighter.name);

    // append token elements to tokenDiv
    let token = tokenDiv.append(tokenName).append(tokenImg).append(tokenHP);

    return token;
}

// assign fighters their object array index and creat token 
function fighterValues() {

    for (var i = 0; i < index.length; i++) {

        // set variables to grab the character and index reference 
        var fighterIndex = index[i];
        var fighter = fighters[fighterIndex]

        //call createnToken function for the i-th character
        let token = createToken(fighter, fighterIndex);

        // append token to the fighters area
        $('#allFighters').append(token);
    }
}

// move user fighter to user fighter section
function selectedFighter(userFighter) {

    for (var i = 0; i < index.length; i++) {

        if (index[i] === userFighter) {

            // set variables to grab the character and index reference 
            var seclectedFighterIndex = index[i];
            var userFighter = fighters[fighterIndex]

            //call createnToken function for the i-th character
            let token = createToken(userfighter, seclectedFighterIndex);

            // append token to the fighters area
            $('#userFighters').append(token);
        }
    }
}

// fighters not selected by user move to stage two area
function stageTwoFighters(userFighter) {

    for (var i = 0; i < index.length; i++) {

        if (index[i] !== userFighter) { //figure out how to assign the fighter index to userFighter

            // set variables to grab the character and index reference 
            var opponentIndex = index[i];
            var opponent = fighters[opponentIndex]

            //call createnToken function for the i-th character
            let token = createToken(opponent, opponentIndex);

            // append token to the opponent choices area
            $('#opponentChoices').append(token);
        }
    }
}

// move selected opponent to opponent section
// this function should run every time a stage two fighter is clicked
// until choosable opponents are null
function selectOpponent() {
    $('.opponentChoices').click(function () {

        //update to game state which enemy has been selected
        let opponent = $(this).attr('data-index'); // figure out how to identify selected player here
        initGame.opponent = fighters[opponent];

        // move chosen opponent to oppenet div
        $('.opposingFighter').append(this);
    })
}

// attack function
function attack() {

    // fighter and opponent take damage equal to the other's strength
    initGame.userFighter.health -= initGame.opponent.strength
    initGame.opponent.health -= initGame.userFighter.strength
}

// strong attack function
function strongAttack() {

    // allow another strong attack use if 3 or less have already been used
    if (strongAttacks <= 3) {

        // opponent takes damage equal to 1.1 - 2.1x the user fighters strength
        initGame.opponent.health -= initGame.userFighter.strength * (Math.random + 1.1)
    }

    // increase the number of strong attacks used
    strongAttacks++;
}

// boolean return functions to check game play status's











// start game after page loads
$(document).ready(function () {

    //click event to select fighter
    //of all the fighters, clicking on a fighter's token selects the fighter
    $('#allFighters').click('.token', function () {
        var userFighter = $(this);
        console.log(userFighter);

        // move the the fighter seleceted by the click event to the userFighter ID div
        $('#userFighter').append(this);

        // move unselected fighters to stage-two div
        stageTwoFighters(this);

        // remove tokens from
    })

    // click events for the attack buttons
    $('.attack').click(attack());
    $('.strong-attack').click(strongAttack())

    // click event for reset button
    $('.reset').click(function () {
        $('#userFighter').empty();
        $('#opponentChoices').empty();
        $('#opposingFighter').empty();
        fighterValues();
    })





    play();
})

