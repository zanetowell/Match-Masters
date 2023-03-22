// Info for currently searched pokemon
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
let $sprite1 = $('.sprite1')
let $name1 = $('.name1')
let $type1 = $('.type1')
// info for party member 2
let $sprite2 = $('.sprite2')
let $name2 = $('.name2')
let $type2 = $('.type2')
// info for party member 3
let $sprite3 = $('.sprite3')
let $name3 = $('.name3')
let $type3 = $('.type3')
// info for party member 4
let $sprite4 = $('.sprite4')
let $name4 = $('.name4')
let $type4 = $('.type4')
// info for party member 5
let $sprite5 = $('.sprite5')
let $name5 = $('.name5')
let $type5 = $('.type5')
// info for party member 6
let $sprite6 = $('.sprite6')
let $name6 = $('.name6')
let $type6 = $('.type6')

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
        },
        (error) => {
         console.log('bad request', error);
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

function addToParty() {
    
}