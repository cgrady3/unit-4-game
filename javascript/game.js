//global variables
// make a function a variable so it can be run by loops
var fighters = fightersArray();

// a variable that call the fighters array function to act as a simple array 
var index = Object.keys(fighters);
console.log(index)

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

function createToken(fighter) {

    // create token elements to go into the div
    var tokenDiv = $('<div class="token">');
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
        let token = createToken(fighter);

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
            let token = createToken(fighter);

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
            let token = createToken(opponent);

            // append token to the opponent choices area
            $('#opponentChoices').append(token);
        }
    }
}













// start game after page loads
$(document).ready(function () {

    //click event to select fighter
    //of all the fighters, clicking on a fighter's token selects the fighter
    $('#allFighters').click('.token', function () {
        var userFighter = $(this);

        // move the the fighter seleceted by the click event to the userFighter ID div
        $('#userFighter').append(this);

        // move unselected fighters to stage-two div
        stageTwoFighters(this);
    })

    // click event for the attack button

    // click event for the strong attack button

    // click event for reset button





})

