var inquirer = require("inquirer");
//const library = require("./cardLibrary.json");
var basicCard = require("./card.js");
//const ClozeCard = require("./ClozeCard.js")
// const colors = require('colors');
// const fs = require("fs");
var request = require('request');
request('http://www.google.com', function(error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
});

// var drawnCard;
// var playedCard;
// var count = 0;

//create event handler to initially give option to the user to Create new flashcards or use exiting ones.
function openMenu() {
    inquirer.prompt([ //use inquirer to ask question
        {
            type: "list", //type list gives user a list of options
            message: "Please choose a menu option from the list below and select Enter?", //message shown to the user
            choices: ["Create", "Use All", "Random", "Shuffle", "Show All", "Exit"], //options that show in list
            name: "menuOptions" //refrence name of object
        }
    ]).then(function(answer) { //Once inquirer gets answer then...
        // var waitMsg;
        console.log(answer);

        switch (answer.menuOptions) {

            case 'Create':
                console.log("Ok lets make a new flashcard...");
                // waitMsg = setTimeout(createCard, 1000);
                break;

                // case 'Use All':
                //     console.log("OK lets run through the deck...");
                //     waitMsg = setTimeout(askQuestions, 1000);
                //     break;

            case 'Random':
                console.log("OK I'll pick one random card from the deck...");
                //     waitMsg = setTimeout(randomCard, 1000);
                break;

                // case 'Shuffle':
                //     console.log("OK I'll shuffle all the cards in the deck...");
                //     waitMsg = setTimeout(shuffleDeck, 1000);
                //     break;

                // case 'Show All':
                //     console.log("OK I'll print all cards in the deck to your screen...");
                //     waitMsg = setTimeout(showCards, 1000);
                //     break;

                // case 'Exit':
                //     console.log("Thank you for using the Flashcard-Generator")
                //     return;
                //     break;

                // default:
                //     console.log("");
                //     console.log("Sorry I don't understand");
                //     console.log("");
        }

    });

}

openMenu();

// // //If the choice is to create a card then this function will run
function createCard() {
    inquirer.prompt({
        type: "list",
        message: "What type of flashcard do you want to create?",
        choices: ["Basic Card", "Cloze Card"],
        name: "cardType"

    });
};
createCard();