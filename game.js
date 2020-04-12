// array with valid choices
const CHOICES = ['rock', 'paper', 'scissors']; 

let computerChoice;

// function to be called by the form on the html
const submit = function () { 
    /* randomly choose one of the 3 valid choices and assign it to the @computerChoice variable
     * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     */
    computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)]; 
}
