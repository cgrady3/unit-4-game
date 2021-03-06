// make a function a variable so it can be run by loops
var fighters = fightersArray();
var beginGame = initGame();

// a variable that call the fighters array function to act as a simple array 
var index = Object.keys(fighters);

// create play function
function play() {

    // set game to starting parameters
    fightersArray();
    initGame();
}

// create function to initialize the game state 
function initGame() {

    return {
        userFighter: null,
        opponent: null,
        opponentsRemaining: fighters.length - 1,
        strongAttacks: 0,
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

function createToken(fighter, index, type) {

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
        var fighter = fighters[fighterIndex];

        //call createnToken function for the i-th character
        let token = createToken(fighter, fighterIndex);

        // append token to the fighters area
        $('#allFighters').append(token);
    }
}

console.log(fightersArray())

// move user fighter to user fighter section
function selectedFighter(userFighter) {

    for (var i = 0; i < index.length; i++) {

        if (index[i] === userFighter) {

            // set variables to grab the character and index reference 
            var selectedFighterIndex = index[i];
            let selectedUserFighter = fighters[selectedFighterIndex];

            //call createnToken function for the i-th character
            let token = createToken(selectedUserFighter, selectedFighterIndex);

            // append token to the fighters area
            $('#userFighters').append(token);
        }
    }

    $('#allFighters').empty()

    $('#stageTwo').show();

}

// fighters not selected by user move to stage two area
function stageTwoFighters(userFighter) {

    for (var i = 0; i < index.length; i++) {

        if (index[i] !== userFighter) { //figure out how to assign the fighter index to userFighter

            // set variables to grab the character and index reference 
            var opponentIndex = index[i];
            var opponent = fighters[opponentIndex];

            // call createnToken function for the i-th character
            let token = createToken(opponent, opponentIndex);

            token.addClass('opponentToken');

            // append token to the opponent choices area
            $('#opponentChoices').append(token);
        }
    }
}

// move selected opponent to opponent section
function selectOpponent() {
    $('.opponentToken').click(function () {
        console.log(this)
        // assign the opponent their array index number
        let opponent = $(this).attr('data-index');

        // update to game state which enemy has been selected
        beginGame.opponent = fighters[opponent];

        // move chosen opponent to oppenet div
        $('#opposingFighter').append(this);

        $('#opponent').show();

        $('#stageTwo').hide();

        $('#actionButtons').show();

        $('#reset').show();

        setTimeout(function () {
            alert('You May Only Use Your Strong Attacks 3 Times, Choose Wisely')
        }, 10);
    })
}

// start game after page loads
$(document).ready(function () {

    fighterValues();

    $('#fighter').hide();

    $('#stageTwo').hide();

    $('#opponent').hide();

    $('#actionButtons').hide();

    $('#reset').hide();

    //click event to select fighter
    $('.token').click(function () {

        // get the chosen fighters index number
        let userFighter = $(this).attr('data-index');

        // update to game state which enemy has been selected
        beginGame.userFighter = fighters[userFighter];

        // move the selected fighter to the selected fighters section
        selectedFighter(userFighter);

        // update the initial game states chosen fighter
        initGame.userFighter = fighters[userFighter];

        // move the the fighter seleceted by the click event to the userFighter ID div
        $('#userFighter').append(this);

        // determine who the opponents are and move then to the stage two div area
        stageTwoFighters(userFighter);

        // enable selection of opponent fighter
        selectOpponent();

        $('#fighter').show();

        $('#stageOne').hide();

    })

    // click events for the attack buttons
    $('#attack').click(function () {

        let relativeUserHealth = beginGame.userFighter.health - beginGame.opponent.strength;
        let relativeOpponentHealth = beginGame.opponent.health - beginGame.userFighter.strength;
        let userName = beginGame.userFighter.name;
        let opponentName = beginGame.opponent.name;

        // check if user or opponent is alive and can attack
        // if they aren't remove their option to attack
        if (relativeUserHealth <= 0 || relativeOpponentHealth <= 0) {

            $('.HP').hide();
            $('#attack').hide();
            $('#strong-attack').hide();

            // determine who is the winner
            if (relativeUserHealth >= 0 && relativeOpponentHealth <= 0) {
                setTimeout(function () {
                    alert(`${userName} Has Defeated ${opponentName}!`)
                }, 10);

            }
            else if (relativeUserHealth <= 0 && relativeOpponentHealth >= 0) {
                setTimeout(function () {
                    alert(`${opponentName} Has Defeated ${userName}!`)
                }, 10);
            }
            else {
                setTimeout(function () {
                    alert('Both Fighters Have Fallen')
                }, 10);
            }
        }
        // if no one has won or lost yet
        else {

            // fighter and opponent take damage equal to the other's strength
            beginGame.userFighter.health -= beginGame.opponent.strength;
            beginGame.opponent.health -= beginGame.userFighter.strength;

            // update characters health on their token
            $('#userFighter .HP').text(beginGame.userFighter.health);
            $('#opposingFighter .HP').text(beginGame.opponent.health);
        }
    });

    $('#strong-attack').click(function () {

        let relativeUserHealth = beginGame.userFighter.health - beginGame.opponent.strength;
        let relativeOpponentHealth = beginGame.opponent.health - beginGame.userFighter.strength;
        let userName = beginGame.userFighter.name;
        let opponentName = beginGame.opponent.name;

        if (beginGame.userFighter.health - beginGame.opponent.strength <= 0 || beginGame.opponent.health - beginGame.userFighter.strength <= 0) {

            $('.HP').hide();
            $('#strong-attack').hide();
            $('#attack').hide();

            // determine who is the winner
            if (relativeUserHealth >= 0 && relativeOpponentHealth <= 0) {
                setTimeout(function () {
                    alert(`${userName} Has Defeated ${opponentName}!`)
                }, 10);

            }
            else if (relativeUserHealth <= 0 && relativeOpponentHealth >= 0) {
                setTimeout(function () {
                    alert(`${opponentName} Has Defeated ${userName}!`)
                }, 10);
            }
            else {
                setTimeout(function () {
                    alert('Both Fighters Have Fallen')
                }, 10);
            }
        }
        // allow another strong attack use if 3 or less have already been used
        else if (beginGame.strongAttacks <= 2) {

            // fighter take damage equal to the other's strength
            beginGame.userFighter.health -= beginGame.opponent.strength;

            // opponent takes damage equal to 1.1 - 2.1x the user fighters strength
            beginGame.opponent.health -= Math.round(beginGame.userFighter.strength * (Math.random() + 1.1));

            // update characters health on their token
            $('#userFighter .HP').text(beginGame.userFighter.health);
            $('#opposingFighter .HP').text(beginGame.opponent.health);
        }

        if (beginGame.strongAttacks === 2) {
            $('#strong-attack').hide();
        }

        // increase the number of strong attacks used
        beginGame.strongAttacks++;
    })

    // click event for reset button
    $('#reset').click(function () {
        location.reload();
    })

    // function call to start the game
    play();
})

