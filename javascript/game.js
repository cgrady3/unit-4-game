// global variables
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
    var tokenDiv = $('<div class="token" data-index = "' + index + '">');
    var tokenImg = $('<img alt="head shot">').attr('src', fighter.picture);
    var tokenHP = $('<div class="token-label HP">').text(fighter.health);
    var tokenName = $('<div class="token-label name">').text(fighter.name);

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

            // call createnToken function for the i-th character
            let token = createToken(opponent, opponentIndex);

            // append token to the opponent choices area
            $('#opponentChoices').append(token);
        }
    }
}

// move selected opponent to opponent section
function selectOpponent() {
    $('.opponentChoices').click(function () {

        // assign the opponent their array index number
        let opponent = $(this).attr('data-index');

        // update to game state which enemy has been selected
        initGame.opponent = fighters[opponent];

        // move chosen opponent to oppenet div
        $('#opposingFighter').append(this);
    })
}

// attack function
function attackBtn() {

    // fighter and opponent take damage equal to the other's strength
    initGame.userFighter.health -= initGame.opponent.strength
    initGame.opponent.health -= initGame.userFighter.strength

    // update characters health on their token
    $('#userFighter .HP').text(initGame.userFighter.health)
    $('#opposingFighter .HP').text(initGame.opponent.health)

}

// strong attack function
function strongAttackBtn() {

    // allow another strong attack use if 3 or less have already been used
    if (strongAttacks <= 3) {

        // opponent takes damage equal to 1.1 - 2.1x the user fighters strength
        initGame.opponent.health -= initGame.userFighter.strength * (Math.random + 1.1)

        // update characters health on their token
        $('#userFighter .HP').text(initGame.userFighter.health)
        $('#opposingFighter .HP').text(initGame.opponent.health)

    }

    // increase the number of strong attacks used
    strongAttacks++;
}

// boolean return functions to check game play status's
// functions will return either true or false boolean

function isWinner() {

    if (initGame.opponentsRemaining === 0)
        return true;
    else
        return false;
}

function isLoser(){
    if (initGame.health <= 0)
        return true;
    else
        return false;
}

function fighting(){

    // check if game has been won
    if (isWinner()) === true)

    // check if game has been lost
    if (isLoser() === true)

}







// start game after page loads
$(document).ready(function () {

    //click event to select fighter
    $('#allFighters').click('.token', function () {

        // get the chosen fighters index number
        var userFighter = $(this).attr('data-index');

        // update the initial game states chosen fighter
        initGame.userFighter = fighters[userFighter];

        // move the the fighter seleceted by the click event to the userFighter ID div
        $('#userFighter').append(this);

        // determine who the opponents are and move then to the stage two div area
        stageTwoFighters(userFighter);
    })

    // click event to select opponent




    // click events for the attack buttons
    $('.attack').click(attackBtn());
    $('.strong-attack').click(strongAttackBtn())

    // click event for reset button
    $('.reset').click(function () {
        $('#userFighter').empty();
        $('#opponentChoices').empty();
        $('#opposingFighter').empty();
        play();
    })

    // function call to start the game
    play();
})

