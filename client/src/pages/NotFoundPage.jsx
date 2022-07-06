import { Link } from "react-router-dom";
import notfoundpage from "../image/notfoundpage1.jpg";
import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div
      className="divNotFoundPage"
      style={{ backgroundImage: `url(${notfoundpage})` , }}
    >
    
        <div className="centernfp">
            
          <h3 style={{ margin: 0 }} className="letterNotFoundPage">
            404 //  NOT FOUND PAGE
          </h3> 
        </div>

        <div className="bottomnfp">
          <Link style={{ textDecoration: "none" }} to="/home">
            <h6 className="letterNotFoundPage">RETURN TO HOME PAGE</h6>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <h6 className="letterNotFoundPage">RETURN TO LANDING PAGE</h6>
          </Link>
        </div>
 
    </div>
  );
};

export default NotFoundPage;
