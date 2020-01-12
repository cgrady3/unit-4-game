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
            picture: '../css/images/Qui-Gon-Jinn.jpg'
        },
        'boba-fett': {
            name: 'Boba Fett',
            health: characterHealth(),
            strength: characterStrength(),
            picture: '../css/images/boba-fett.jpg'
        },
        'darth-maul': {
            name: 'Darth Maul',
            health: characterHealth(),
            strength: characterStrength(),
            picture: '../css/images/darth-maul.jpeg'
        },
        'darth-vader': {
            name: 'Darth Vader',
            health: characterHealth(),
            strength: characterStrength(),
            picture: '../css/images/darth-vader.jpg'
        },
    }
}
console.log(fightersArray())
console.log(fighterValues())

// assign fighterArray references 
function fighterValues() {

    // a variable that call the fighters array function to act as a simple array 
    let index = Object.keys(fightersArray);

    for (let i = 0; i < index.length; i++) { 
        // set variables to grab the character and index reference 
        let fighterIndex = index[i];
        
        // pass the info of the indexed fighter to the fightersToken function
        let referenceValues = fighterToken(fighterIndex)
    }
}

// create fighter tokens using jQuery's and append to stage-one's fighters div
// chosen fighter and fighter index are passed in parameters
function fighterToken(index) {
console.log('did it')
    // class is given to the div since there are multiple tokens
    let tokenDiv = $('<div class="token">');

    // create token elements to go into the div
    let tokenImg = $('<img alt="head shot"').attr('src', fightersArray[index].picture);
    let tokenHP = $('<div class="token-label">').text(fightersArray[index].health); //calling the array here isnt bringing up the text//need to specify which array index is being called
    let tokenName = $('<div class="token-label">').text(fightersArray[index].health);// figure out how to call the array info from here

    // append token elements to tokenDiv
    tokenDiv.append(tokenName).append(tokenImg).append(tokenHP);
    // append token to the fighters area
    $('#allFighters').append(tokenDiv)
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

