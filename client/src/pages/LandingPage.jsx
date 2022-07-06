import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <Link to="/home" className="landingButton">
        <h4 className="homehome">HOME</h4>
      </Link>
    </div>
  );
};

export default LandingPage;
