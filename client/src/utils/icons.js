import bug from '../image/icons/bug.svg'
import dark from '../image/icons/dark.svg' 
import dragon from '../image/icons/dragon.svg' 
import electric from '../image/icons/electric.svg' 
import fairy from '../image/icons/fairy.svg' 
import fighting from '../image/icons/fighting.svg'  
import fire from '../image/icons/fire.svg' 
import flying from '../image/icons/flying.svg' 
import ghost from '../image/icons/ghost.svg' 
import grass from '../image/icons/grass.svg' 
import ground from '../image/icons/ground.svg' 
import ice from '../image/icons/ice.svg' 
import normal from '../image/icons/normal.svg' 
import poison from '../image/icons/poison.svg' 
import psychic from '../image/icons/psychic.svg' 
import rock from '../image/icons/rock.svg' 
import steel from '../image/icons/steel.svg' 
import water from '../image/icons/water.svg' 



const icons = {
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    poison,
    psychic,
    rock,
    steel,
    water
}

export function getColor(type){
    switch(type){
        case "bug":
            return "#92bc2c"

        case "dark":
            return "#595761"

        case "dragon":
            return "#0c69c8"

        case "electric":
            return "#f2d94e"

        case "fairy":
            return "#ee90e6"

        case "fighting":
            return "#d3425f"

        case "fire":
            return "#fba54c"

        case "flying":
            return "#a1bbec"

        case "ghost":
            return "#5f6dbc"

        case "grass":
            return "#5fbd58"

        case "ground":
            return "#da7c4d"

        case "ice":
            return "#75d0c1"

        case "normal":
            return "#a0a29f"

        case "poison":
            return "#b763cf"

        case "psychic":
            return "#fa8581"

        case "rock":
            return "#c9bb8a"

        case "steel":
            return "#5695a3"

        case "water":
            return "#539ddf"

        case "unknown":
            return "#9e9d99"

        case "shadow":
            return "purple"

        default:
            return "black"
    }
}

export default icons