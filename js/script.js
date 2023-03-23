// Info for currently searched pokemon
let pokeData
let $mainName = $('.poke-name')
let $mainSprite = $('.poke-sprite')
let $mainType = $('.poke-type')
let $mainId = $('.poke-id')
let $hp = $('.hp')
let $attack = $('.attack')
let $defense = $('.defense')
let $specialAttack = $('.special-attack')
let $specialDefense = $('.special-defense')
let $speed = $('.speed')
// info for party member 1
let $sprite1 = $('#sprite1')
let $name1 = $('#name1')
let $type1 = $('#type1')
// info for party member 2
let $sprite2 = $('#sprite2')
let $name2 = $('#name2')
let $type2 = $('#type2')
// info for party member 3
let $sprite3 = $('#sprite3')
let $name3 = $('#name3')
let $type3 = $('#type3')
// info for party member 4
let $sprite4 = $('#sprite4')
let $name4 = $('#name4')
let $type4 = $('#type4')
// info for party member 5
let $sprite5 = $('#sprite5')
let $name5 = $('#name5')
let $type5 = $('#type5')
// info for party member 6
let $sprite6 = $('#sprite6')
let $name6 = $('#name6')
let $type6 = $('#type6')

const $input = $('input[type="text"]')

$('form').on('submit', handleGetData)
// Call to API
function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/${userInput}/`
      }).then(
        (data) => {
            pokeData = data
            console.log(pokeData);
            showPokemon()
            $('.error-msg').css('display', 'none')
        },
        (error) => {
         console.log('bad request', error);
         $('.error-msg').css('display', 'flex')
        }
    )
}
// Function to get a random pokemon
function getRandomPokemon(min, max) {
    min = Math.ceil(1);
    max = Math.floor(1010);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

$('.get-random').click(handleGetRandomData)

function handleGetRandomData(event) {
    event.preventDefault();
    let randomPokemon = getRandomPokemon();
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`
      }).then(
        (data) => {
            pokeData = data
            console.log(pokeData);
            showPokemon()
            $('.error-msg').css('display', 'none')
        },
        (error) => {
         console.log('bad request', error);
         $('.error-msg').css('display', 'flex')
        }
    )
}



// Function that displays searched pokemons info
function showPokemon() {
    let newSprite = pokeData.sprites.front_default
    $mainName.text(pokeData.name)
    $mainSprite.attr('src', `${newSprite}`)
    $mainType.text(`Type: ${(pokeData.types[0].type.name)}`)
    $mainId.text(`ID Number: ${(pokeData.id)}`)
    $hp.text(`HP: ${(pokeData.stats[0].base_stat)}`)
    $attack.text(`Attack: ${(pokeData.stats[1].base_stat)}`)
    $defense.text(`Defense: ${(pokeData.stats[2].base_stat)}`)
    $specialAttack.text(`Special Attack: ${(pokeData.stats[3].base_stat)}`)
    $specialDefense.text(`Special Defense: ${(pokeData.stats[4].base_stat)}`)
    $speed.text(`Speed: ${(pokeData.stats[5].base_stat)}`)
    console.log(newSprite);
}
// Adding pokemon to party
function addToParty1() {
    let newPartyMember = pokeData
    console.log(newPartyMember);
    $sprite1.attr('src', `${(newPartyMember.sprites.front_default)}`)
    $name1.text(pokeData.name)
    $('.party-btn1').css('display', 'none')
    $('.rmv-btn1').css('display', '')
}
$('.party-btn1').on('click', addToParty1)

function addToParty2() {
    let newPartyMember = pokeData
    console.log(newPartyMember);
    $sprite2.attr('src', `${(newPartyMember.sprites.front_default)}`)
    $name2.text(pokeData.name)
    $('.party-btn2').css('display', 'none')
}
$('.party-btn2').on('click', addToParty2)

function addToParty3() {
    let newPartyMember = pokeData
    console.log(newPartyMember);
    $sprite3.attr('src', `${(newPartyMember.sprites.front_default)}`)
    $name3.text(pokeData.name)
    $('.party-btn3').css('display', 'none')
}
$('.party-btn3').on('click', addToParty3)

function addToParty4() {
    let newPartyMember = pokeData
    console.log(newPartyMember);
    $sprite4.attr('src', `${(newPartyMember.sprites.front_default)}`)
    $name4.text(pokeData.name)
    $('.party-btn4').css('display', 'none')
}
$('.party-btn4').on('click', addToParty4)

function addToParty5() {
    let newPartyMember = pokeData
    console.log(newPartyMember);
    $sprite5.attr('src', `${(newPartyMember.sprites.front_default)}`)
    $name5.text(pokeData.name)
    $('.party-btn5').css('display', 'none')
}
$('.party-btn5').on('click', addToParty5)

function addToParty6() {
    let newPartyMember = pokeData
    console.log(newPartyMember);
    $sprite6.attr('src', `${(newPartyMember.sprites.front_default)}`)
    $name6.text(pokeData.name)
    $('.party-btn6').css('display', 'none')
}
$('.party-btn6').on('click', addToParty6)

// Removing pokemon from party
function removeFromParty1() {
    $sprite1.attr('src', '')
    $name1.text('')
    $('.rmv-btn1').css('display', 'none')
    $('.party-btn1').css('display', '')
}
$('.rmv-btn1').click(removeFromParty1)

function removeFromParty2() {
    $sprite2.attr('src', '')
    $name2.text('')
    $('.rmv-btn2').css('display', 'none')
    $('.party-btn2').css('display', '')
}
$('.rmv-btn2').click(removeFromParty2)

function removeFromParty3() {
    $sprite3.attr('src', '')
    $name3.text('')
    $('.rmv-btn3').css('display', 'none')
    $('.party-btn3').css('display', '')
}
$('.rmv-btn3').click(removeFromParty3)

function removeFromParty4() {
    $sprite4.attr('src', '')
    $name4.text('')
    $('.rmv-btn4').css('display', 'none')
    $('.party-btn4').css('display', '')
}
$('.rmv-btn4').click(removeFromParty4)

function removeFromParty5() {
    $sprite5.attr('src', '')
    $name5.text('')
    $('.rmv-btn5').css('display', 'none')
    $('.party-btn5').css('display', '')
}
$('.rmv-btn5').click(removeFromParty5)

function removeFromParty6() {
    $sprite6.attr('src', '')
    $name6.text('')
    $('.rmv-btn6').css('display', 'none')
    $('.party-btn6').css('display', '')
}
$('.rmv-btn6').click(removeFromParty6)
