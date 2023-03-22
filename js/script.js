// let pokeData1, pokeData2, pokeData3, pokeData4, pokeData5, pokeData6
const $matches = 0
const $firstPick = ''
const $secondPick = ''
const $cards = $('.game-cards')
// let pokeData1 = $.map(allPokemon[0], function (value, key) {
//     return key
// })
// const $pokeName1 = $('#name1')
// const $pokeSprite1 = $('#sprite1')
// const $pokemon2 = $('#pokemon2')
// const $pokemon3 = $('#pokemon3')
// const $pokemon4 = $('#pokemon4')
// const $pokemon5 = $('#pokemon5')
// const $pokemon6 = $('#pokemon6')
let allPokemon = []
let myImg 
// let $card1
// let $card2
// let $card3
// let $card4
// let $card5
// let $card6
// let $card7
// let $card8
// let $card9
// let $card10
// let $card11
// let $card12

const displayPokemon = (allPokemon) => {
    allPokemon.sort( _ => Math.random() - 0.5);
    const pokemonHTML = allPokemon.map(allPokemon => {
    return `
            <div class ="card">
                <h2>${allPokemon.name}
            </div>
        `
    }).join('');
    $('.game-cards').innerHTML = pokemonHTML;

}

const $input = $('input[type="text"]')

$('form').on('submit', handleGetData)

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/${userInput}/`
      }).then(
        (data) => {
         allPokemon.push(data)
        //  createPartyMember()
         console.log(allPokemon[0].sprites.front_default);
        },
        (error) => {
         console.log('bad request', error);
        }
    )
}
// function frontToBack() {
//     $(this).removeClass('card-front')
//     $(this).addClass('card-back')
// }
// function backToFront() {
//     $(this).removeClass('card-back')
//     $(this).addClass('card-front')
// }
// $('.card-front').click(function () {
//     console.log($(this));
//     if ($(this)[0].className === 'card-front') {
//         $(this).removeClass('card-front')
//         .addClass('card-back')
//     } 
// })

const clickCard = (e) => {
    const pokemonCard = e.currentTarget
    const pokemonName = pokemonCard.dataset.pokename
}



function render() {
    $pokeName1.text(allPokemon[0].name)
    $pokeSprite1.src(allPokemon[0].sprites.default_front)

}

$('#start-btn').click(function () {
    displayPokemon()
})

function createPartyMember() {
    const $newMember = $(
        `<h4>${allPokemon.shift().name}</h4>
        
        `
    )
    $('#party-pokemon').append($newMember)

}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex
    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -=1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    return array
}

function startGame() {
    let pokemonCards = shuffle(allPokemon)
    $cards.empty()
    $matches = 0

    for (let i = 0; i < pokemonCards.length; i++) {
        $cards.append($`<div class="back-rotated"><img src="${pokemonCards.sprites.front_default}`)
        
    }
    
}