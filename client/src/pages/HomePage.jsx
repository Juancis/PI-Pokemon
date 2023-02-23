import { getAllPokemons, getAllTypes } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AllPokemons from '../components/AllPokemons';
import SearchPokemon from '../components/SearchPokemon';
import { Link } from 'react-router-dom';
import {
  customFilter,
  orderFunction,
  typeFilter,
  pageFunction,
  pageNumbers,
} from '../utils';
import NavBar from './NavBar';
import '../styles/HomePage.css';
import Loading from '../components/Loading';

const HomePage = () => {
  const dispatch = useDispatch();
  const { pokemons, loading, types } = useSelector((state) => state); // OBTENGO ESTADO GLOBAL
  const [pokemonsList, setPokemonsList] = useState([]); // RENDERIZADO
  const [typesList, setTypesList] = useState([]); // CARGO ESTADO LOCAL LISTA DE TYPES
  const [activePage, setActivePage] = useState(1);
  const [numberPage, setNumberPage] = useState([]);
  const [found, notFound] = useState('');
  let id = 0;

  
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [array3, setArray3] = useState([]);
  
  const [filtersByCustom, setFiltersByCustom] = useState({
    pokemons: 'all',
  });
  const [filterByType, setFilterByType] = useState({
    type: '',
  });
  const [order, setOrder] = useState({
    ordenamiento: '',
  });
  
  const handleRadioClick = (e) => {
    // CARGO MI OBJETO POKEMONS // SETEO PRIMER FILTRADO
    setFiltersByCustom({ pokemons: e.target.value });
    setActivePage(1);
  };
  
  const handleChangeFilters = (e) => {
    // CARGO MI OBJETO TYPE // SETEO SEGUNDO FILTRADO
    
    setFilterByType({ type: e.target.value });
    setActivePage(1);
  };
  
  const handleChangeOrder = (e) => {
    // CARGO MI OBJETO ORDER // SETEO TERCER FILTRADO
    setOrder({ ordenamiento: e.target.value });
  };
  
  useEffect(() => {
    // PRIMER FILTRADO BY CUSTOM
    setArray1(customFilter(pokemons, filtersByCustom));
    notFound('');
  }, [filtersByCustom, pokemons]);
  
  useEffect(() => {
    // SEGUNDO FILTRADO BY TYPES
    notFound('');
    setArray2(typeFilter(array1, filterByType));
  }, [array1, filterByType]);
  
  useEffect(() => {
    // TERCER FILTRADO BY ORDER
    setArray3([...orderFunction(array2, order)]);
  }, [array2, order]);
  
  useEffect(() => {
    setPokemonsList(pageFunction(array3, activePage));
    setNumberPage(pageNumbers(array3.length));
  }, [array3, activePage]);
  
  useEffect(() => {
    // CARGO ESTADO GLOBAL
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, [dispatch]);
  
  useEffect(() => {
    // CARGO ESTADO LOCAL
    setTypesList(types);
  }, [types]);
  
  if(!pokemons) return <Loading />
  return (
    <div className="divContainer">
      <div className="divNavbar">
        <NavBar />
        <SearchPokemon
          setFiltersByCustom={setFiltersByCustom}
          setFilterByType={setFilterByType}
          found={found}
          notFound={notFound}
        />
      </div>

      <div className="divFilter">
        <div className="filter">
          <label>
            <input
              type="radio"
              name="filter"
              value="custom"
              onChange={handleRadioClick}
            />
            Custom
          </label>

          <label>
            <input
              type="radio"
              name="filter"
              value="all"
              onChange={handleRadioClick}
            />
            All
          </label>

          <label>
            <input
              type="radio"
              name="filter"
              value="originals"
              onChange={handleRadioClick}
            />
            Original Pokemons
          </label>
        </div>

        <div className="divSelectTypes">
          <label className="labelFilter">
            <select
              className="selectFilter"
              name="filter"
              onChange={handleChangeFilters}
            >
              {typesList.map((t) => (
                <option key={id++}> {t.name} </option>
              ))}
              <option>All</option>
            </select>
            Select one type:
          </label>
        </div>

        <div className="divOrder">
          <form>
            <select
              className="selectOrder"
              name="order"
              onChange={handleChangeOrder}
            >
              <option value="AtoZ">Name: from A to Z</option>
              <option value="ZtoA">Name: from Z to A</option>
              <option value="higher">Attack: higher attack points</option>
              <option value="lower">Attack: lower attack points</option>
            </select>
          </form>
          <span>Order! </span>
        </div>
      </div>

      <div className="divPokemons">
        {loading ? <Loading /> : pokemonsList.length ? (
          pokemonsList.map((p) => (
            <div key={p.id} className="divPokemonCard">
              <div key={p.id} className="pokemonCard">
                <Link to={`/pokemon/${p.id}`} className="pokemonFlex">
                  <AllPokemons
                    name={p.name}
                    image={p.image}
                    types={p.types}
                    attack={p.attack}
                    id={p.id}
                  />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="nopokemons">
            Oops! No Pokemons with this filter :({' '}
          </div>
        )}
      </div>

      {array3.length > 13 && (
        <div className="divPagination">
          <button
            className="pagination"
            onClick={() => setActivePage((activepage) => activepage - 1)}
            hidden={activePage === 1}
          >
            {'<'}
          </button>
          {numberPage.map((p) => (
            <button
              className={
                p === activePage ? 'pagination pagination-active' : 'pagination'
              }
              key={p}
              onClick={() => setActivePage(p)}
            >
              {p}
            </button>
          ))}
          <button
            className="pagination"
            onClick={() => setActivePage((activepage) => activepage + 1)}
            hidden={Math.ceil(array3.length / 12) === activePage}
          >
            {'>'}
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
