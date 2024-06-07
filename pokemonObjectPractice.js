
let pokemon1 = {
    name: 'Charmander',
    hp: 20,
    fainted: false,
    types: [
        {
            slot: 1,
            info:  {
                detailed: 'Can burn a person',
                weakTo: [
                    ['Ghost','Water'],
                    ['Dragon']
                ], //DRAGON
                type: 'fire',
                emoji: '🔥',
            }
        },
        {
            slot: 2,
            info:  {
                detailed: 'Can shock a person',
                emoji: '⚡',
                weakTo: [['Ground','Rock'],['Flying']],
                type: 'electric', //ELECTRIC
            }
        }
    ],
    moves: [
        {name: 'flamethrower', power: 35, pp: 4},
        {name: 'stomp', power: 20, pp: 10},
        {name: 'bite', power: 18, pp: 15},
        {name: 'tackle', power: 15, pp: 20},
    ],
    faint: function () {
        this.hp = 0;
        this.fainted = true;
        alert(`${this.name} fainted and it has 
        ${this.hp} hp left!!`);
    }
}

let pokemon2 = {
        name: 'Bulbasaur',
        hp: 35,
        fainted: false,
        types: [
            {
                slot: 1,
                info:  {
                    detailed: 'Can burn a person',
                    weakTo: [
                        ['Ghost','Water'],
                        ['Dragon']
                    ], //DRAGON
                    type: 'fire',
                    emoji: '🔥',
                }
            },
            {
                slot: 2,
                info:  {
                    detailed: 'Can shock a person',
                    emoji: '⚡',
                    weakTo: [['Ground','Rock'],['Flying']],
                    type: 'electric', //ELECTRIC
                }
            }
        ],
        moves: [
            {name: 'flamethrower', power: 35, pp: 4},
            {name: 'stomp', power: 20, pp: 10},
            {name: 'bite', power: 18, pp: 15},
            {name: 'tackle', power: 15, pp: 20},
        ],
        faint: function () {
            this.hp = 0;
            this.fainted = true;
            alert(`${this.name} fainted and it has 
            ${this.hp} hp left!!`);
        }
    }







function battlePokemon(atk,def) {

    console.log(atk);

    atk.name = 'Tony the Tiger'
    console.log(def)

    console.log(`The attacking pokemon is ${atk.name}`)
    console.log(`The defending pokemon is ${def.name} and it has ${def.hp} hp lef`);
}


battlePokemon(pokemon1,pokemon2)
