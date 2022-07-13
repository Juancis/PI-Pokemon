import * as types from '../actions/types'

const initialState = {
    pokemons: [],
    types: [],
    pokemonDetail: {},
    loading: true,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_ALL_POKEMONS:
            return {
                ...state, pokemons: action.payload,
                loading: false
            }
        case types.GET_POKEMON_BY_NAME:
            return {
                ...state, pokemons: [action.payload]
            }
        case types.GET_POKEMON_DETAIL:
            return {
                ...state, pokemonDetail: action.payload,
                loading: false
            }
        case types.GET_ALL_TYPES:
            return {
                ...state, types: action.payload
            }
        case types.CLEAR_PAGE:
            return {
                ...state, pokemonDetail: {}
            }
        case types.SET_LOADING:
            return{
                ...state, loading: true
            }
        case types.DETAIL_ERROR:
            return{
                ...state, pokemonDetail: 'error',
                loading: false
                }   
            default:
                return {...state}
    }
}

export default rootReducer