import React, { useState, useEffect } from "react";
import { createPokemon, getAllTypes } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "../styles/CreatePage.css";
import icons, { getColor } from "../utils/icons";
import { isUrl } from "../utils";

const CreatePokemons = () => {
  const dispatch = useDispatch();
  const typesState = useSelector((state) => state.types);
  const [created, setCreated] = useState("");
  const [error, setError] = useState(false);
  let id = 0;

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    image: '',
  });


  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (type) => {
    if (input.types.some((elem) => elem === type)) {
      setInput({
        ...input,
        types: input.types.filter((elem) => elem !== type),
      });
    } else {
      if (input.types.length === 2)
        return alert("You can't add more than two types");
      setInput({
        ...input,
        types: [...input.types, type],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(input.image){
      if(!isUrl(input.image)){
        return alert('Has to be a valid image URL')
    }
    }
    if(input.height >= 200 || input.weight >= 200 || input.hp >= 200){
      return alert('Life, Height and Weight must be less than 200')
    }
 

    setError(await dispatch(createPokemon(input)));
    if (error.error) {
      setInput({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
        image: '',
      });
      return error.error;
    }

    setCreated(input);

    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
      image: '',
    });
  };

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  return (
    <div className="divContainCreate">
      <div className="divFormCreate">
        <form className="formCreate" onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <div className="formOne">
              <label>
                <label className="labelCreate">
                  <div>
                    Name<span style={{ color: "red" }}>*</span>:
                  </div>
                  <input
                    className="inputCreate"
                    name="name"
                    type="text"
                    value={input.name}
                  
                    onChange={handleChange}
                  />
                </label>

                <br />
                <label className="labelCreate">
                  Life:
                  <input
                    className="inputCreate"
                    name="hp"
                    type="number"
                    value={input.hp}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label className="labelCreate">
                  Height:
                  <input
                    className="inputCreate"
                    name="height"
                    type="number"
                    value={input.height}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label className="labelCreate">
                  Weight:
                  <input
                    className="inputCreate"
                    name="weight"
                    type="number"
                    value={input.weight}
                    onChange={handleChange}
                  />
                </label>
                <br/>
                <label className="labelCreate">
                    Image URL: 
                  <input
                    className="inputCreate"
                    name="image"
                    type="text"
                    value={input.image}
                    onChange={handleChange}
                  />
                  </label>
                <br />
                <label className="labelCreateRange">
                  <span style={{ width: "61px" }}> Attack: </span>
                  <input
                    className="inputOption"
                    name="attack"
                    type="range"
                    min="0"
                    max="200"
                    value={input.attack}
                    onChange={handleChange}
                  />
                  <span style={{ width: "26px" }}>
                    {input.attack ? input.attack : 100}
                  </span>
                </label>
                <br />
                <label className="labelCreateRange">
                  <span style={{ width: "61px" }}> Defense: </span>
                  <input
                    className="inputOption"
                    name="defense"
                    type="range"
                    min="0"
                    max="200"
                    value={input.defense}
                    onChange={handleChange}
                  />
                  <span style={{ width: "26px" }}>
                    {input.defense ? input.defense : 100}
                  </span>
                </label>
                <br />
                <label className="labelCreateRange">
                  <span style={{ width: "61px" }}>Speed: </span>
                  <input
                    className="inputOption"
                    name="speed"
                    type="range"
                    min="0"
                    max="200"
                    value={input.speed}
                    onChange={handleChange}
                  />
                  <span style={{ width: "26px" }}>
                    {input.speed ? input.speed : 100}
                  </span>
                </label>
                <br />
              </label>
            </div>
          </div>

          <div className="formThree">
            <br />
            <button className="buttonFormThree" disabled={input.name.length === 0} type="submit">
              Create Pokemon!
            </button>
            <div className={error.error ? "buttonError" : "buttonCreated"}>
              {error.error ? (
                <span> ❌ {error.error} </span>
              ) : created ? (
                <span> The pokemon was succesfully created! ✔️</span>
              ) : null}
            </div>
          </div>
        </form>

        <div className="formTwo">
          <label className="labelFormTwo">
            <span style={{ paddingBottom: "10px" }}> Select Type: </span>
            <div className="gridPokemonsTypes">
              {typesState.map((t) => (
                <div key={t + id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    key={id++}
                    className={
                      input.types.some((type) => type === t.name)
                        ? "typesAllPokemons selectedType"
                        : "typesAllPokemons"
                    }
                    style={{ background: getColor(t.name) }}
                    onClick={() => handleClick(t.name)}
                  >
                    {t.name === "unknown" ? (
                      <p style={{ color: "white", fontSize: "12px" }}>???</p>
                    ) : t.name === 'shadow' ? <p style={{ color: "white", fontSize: "12px" }}>🌀</p> : (
                      <img
                        style={{ width: "60%" }}
                        alt={id}
                        src={icons[t.name]}
                      />
                    )}
                  </div>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>

            <div></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CreatePokemons;
