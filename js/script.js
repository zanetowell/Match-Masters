let pokeData1, pokeData2, pokeData3, pokeData4, pokeData5, pokeData6
const userScore = 0
const firstPick = ''
const secondPick = ''

const toggle = document.querySelector('[aria-pressed]');

// toggle.addEventListener('click', (e) => {  
//   let pressed = e.target.getAttribute('aria-pressed') === 'true';
//   e.target.setAttribute('aria-pressed', String(!pressed));
// });

function reveal() {
    `document.getElementById('${clickedBtn}').src='${pokeSprite}'`
}

const $pokemon1 = $
const $pokemon2 = $
const $pokemon3 = $
const $pokemon4 = $
const $pokemon5 = $
const $pokemon6 = $
let allPokemon 
let $card1
let $card2
let $card3
let $card4
let $card5
let $card6
let $card7
let $card8
let $card9
let $card10
let $card11
let $card12

const $input = $('input[type="text"]')

$('form').on('submit', handleGetData)

function handleGetData(event) {
    event.preventDefault();
    // userInput = $input.val();
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/bulbasaur/`
      }).then(
        (data) => {
            console.log(data);
         pokeData1 = data;
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
    // Request for 2nd pokemon
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/charmander/`
      }).then(
        (data) => {
            console.log(data);
         pokeData2 = data;
        },
        (error) => {
         console.log('bad request', error);
        }
    );  
    // 3rd pokemon
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/squirtle/`
      }).then(
        (data) => {
            console.log(data);
         pokeData3 = data;
        },
        (error) => {
         console.log('bad request', error);
        }
    );  
    // 4th pokemon
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/pikachu/`
      }).then(
        (data) => {
            console.log(data);
         pokeData4 = data;
        },
        (error) => {
         console.log('bad request', error);
        }
    );  
    // 5th pokemon
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/ditto/`
      }).then(
        (data) => {
            console.log(data);
         pokeData5 = data;
        },
        (error) => {
         console.log('bad request', error);
        }
    );  
    // 6th pokemon
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/mew/`
      }).then(
        (data) => {
            console.log(data);
         pokeData6 = data;
        },
        (error) => {
         console.log('bad request', error);
        }
    );  allPokemon = {pokeData1, pokeData2, pokeData3, pokeData4, pokeData5, pokeData6}
}
function frontToBack() {
    $(this).removeClass('card-front')
    $(this).addClass('card-back')
}
function backToFront() {
    $(this).removeClass('card-back')
    $(this).addClass('card-front')
}
$('button').click(function () {
    console.log($(this));
    if ($(this)[0].className === 'card-front') {
        $(this).removeClass('card-front')
    } else {
        $(this).addClass('card-front')
    }

})