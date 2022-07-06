import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByName, getAllPokemons } from "../redux/actions";
import "../styles/HomePage.css";

export default function SearchPokemon({ setFilterByType, setFiltersByCustom, found, notFound }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const pokemon = useSelector((state) => state.pokemons);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFiltersByCustom({pokemons: "all"});
    setFilterByType({type: "" });
    notFound(await dispatch(getPokemonByName(input)));
    setInput("");
  };

  const onClick = () => {
    dispatch(getAllPokemons());
  };

  return (
    <>

      {pokemon.length === 1 ? (
        <button className="showAllButton" onClick={onClick}>
          Show all
        </button>
      ) : null}


      <div style={{ display: "flex", alignItems: "center" }}>
      <div className="pokemonNotFound">
          {found.error ? (
            <span className="pokemonNotFoundLetter">
              The Pokemon was not found.
            </span>
          ) : null}
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="searchInput"
              type="text"
              name="pokemon"
              required
              placeholder="Search..."
              value={input}
              onChange={handleChange}
            />
          </label>

          <button className="buttonSearchBar" type="submit" value={"SEARCH"}>
            Search
          </button>
        </form>

      </div>
    </>
  );
}
