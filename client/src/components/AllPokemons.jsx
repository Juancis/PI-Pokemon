import psyduck from "../image/psyduck.png";
import icons, { getColor } from "../utils/icons";
export default function AllPokemons({ name, image, types, id, attack }) {
  let keyAlt = 0
  return (

    <>
      <h3>{name.toUpperCase()}</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          textDecoration: "none",
        }}
      >
        <img
          style={{ height: isNaN(id) ? "90px" : "inherit" }}
          src={image === "default" ? psyduck : image}
          alt={`${id + name}`}
        />
      </div>
      <div>
        <strong>
          <span>⚔️: {attack}</span>
        </strong>
      </div>
      <div className="typeFlex">
        {types.map((t) => (
          <div
            key={keyAlt++}          
            className="typesAllPokemons"
            style={{ background: getColor(t) }}
          >
            {t === "unknown" ? (
              <p style={{ color: "white", fontSize: "12px" }}>???</p>
            ) : t === "shadow" ? (
              <p style={{ color: "white", fontSize: "12px" }}>🌀</p>
            ) : (
              <img style={{ width: "60%" }} alt={name + id} src={icons[t]} />
            )}{" "}
          </div>
        ))}
      </div>
    </>
  );
}
