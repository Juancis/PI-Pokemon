import CreatePokemons from "../components/CreatePokemons"
import NavBar from "./NavBar"
import "../styles/CreatePage.css"

const CreatePage = () => {

    return(
        <div style={{ minHeight: '100vh' }}>
            <div className="divNavbar">
            <NavBar/>
            </div>
            <CreatePokemons/>       
        </div>
    )
}

export default CreatePage