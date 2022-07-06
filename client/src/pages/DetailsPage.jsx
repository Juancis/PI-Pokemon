import DetailsPokemon from "../components/DetailsPokemon";
import NavBar from "./NavBar";
import "../styles/CreatePage.css"


const DetailPage = () => {
    return (
        <div >
            <div className="divNavbar" style={{margin: 0, padding: 0, paddingTop: '13px',  paddingBottom: '13px'}}>
            <NavBar  />
            </div>
            <div className="divDetailsContains">
            <DetailsPokemon />
            </div>
         
        </div>
    )

}

export default DetailPage;