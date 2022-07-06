import CreatePokemons from "../components/CreatePokemons"
import NavBar from "./NavBar"
import "../styles/CreatePage.css"

const CreatePage = () => {

    return(
        <div >
            <div className="divNavbar">
            <NavBar/>
            </div>
            <div>
            <CreatePokemons/>
            </div>
        

        </div>
    )
}

export default CreatePage