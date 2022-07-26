import axios from "axios";
import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_BY_NAME,
  CLEAR_PAGE,
  GET_ALL_TYPES,
  SET_LOADING,
  DETAIL_ERROR

} from "../actions/types";
const URL = process.env.REACT_APP_SERVER + '/pokemons'


export const getAllPokemons = () => {
    return async function (dispatch) {
        dispatch({type: SET_LOADING})
        const {data} = await axios.get(URL);
        return dispatch({type: GET_ALL_POKEMONS, payload: data })
    }
}

export const getPokemonDetail = (id) => {
    return async function (dispatch){
        dispatch({type: SET_LOADING})
        try{
            const {data} = await axios.get(`${URL}/${id}`);
            return dispatch({type: GET_POKEMON_DETAIL, payload: data})
        }catch(e){
            return dispatch({type: DETAIL_ERROR})

        }

    }
}

export const getPokemonByName = (name) => {
    return async function (dispatch) {
       try{
        const {data} = await axios.get(`${URL}?name=${name}`)
        return dispatch({type: GET_POKEMON_BY_NAME, payload: data}) 
       }catch(e){
        return e.response.data
       }  
    }
}

export const createPokemon = (data) => {
    return async function() {
        try {
            return await axios.post(URL, data).catch()
        }catch(e){
            return e.response.data
        }
    }
}

export const clearPage = () => {
    return function (dispatch){
        return dispatch({type: CLEAR_PAGE})
    }
}

export const getAllTypes = () => { 
    return async function (dispatch){
        const {data} = await axios.get(process.env.REACT_APP_SERVER + '/types')
        return dispatch({type: GET_ALL_TYPES, payload:data})


    }
}