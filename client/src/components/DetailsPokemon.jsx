import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { clearPage, getPokemonDetail } from "../redux/actions";
import "../styles/DetailsPage.css";
import psyduck from '../image/psyduck.png'
import Loading from "./Loading";

const DetailsPokemon = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { pokemonDetail: pokemon, loading } = useSelector((state) => state);

  useEffect(()=> {
    if(pokemon === 'error'){
      navigate('/error')
    }
    }, [pokemon, navigate])

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => {dispatch(clearPage())};
   
  }, [dispatch, id]);
  if(!pokemon.types) return <Loading />
  
  return (
    <>
      {loading ? <Loading /> : (
        <>
          <div className="featuresDetails">
            <ul>
              <h3 style={{ margin: 0 }}>Stats: </h3>
              ❤️Life <div className="liDetail"> {pokemon.hp}</div>
              ⚔️Attack<div className="liDetail"> {pokemon.attack}</div>
              🛡️Defense<div className="liDetail"> {pokemon.defense}</div>
              💨Speed <div className="liDetail"> {pokemon.speed}</div>
              📏Height <div className="liDetail"> {pokemon.height}</div>
              ⚖️Weight <div className="liDetail">{pokemon.weight}</div>
              Types: {" "}
              <div className="typeDetail"> {pokemon.types.slice(0, 2).join(", ").toUpperCase()}</div>
            </ul>
          </div>

          <div className="divDetails">
            <div className={ isNaN(id) ? "divDetailsPsyduck" : "divDetailsContainer"} >
              <h1 className={isNaN(id) ? "titleDetailsPsyduck" : "titleDetails"}>
                {`${pokemon.name?.toUpperCase()} ${
                  isNaN(id) ? "#Custom" : 
                  id.length === 1
                    ? `#00${id}`
                    : id.length === 2
                    ? `#0${id}`
                    : `#${id}`
                }  `}
              </h1>
              <img
                className={pokemon.image === 'default' ? "imageDetailsPsyduck" : "imageDetails"}
                src={pokemon.image === 'default' ? psyduck : pokemon.image}
                alt={`${pokemon.id}`}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailsPokemon;
