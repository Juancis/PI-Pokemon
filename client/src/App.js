import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";




function App() {
  return (
    <>
      <Routes >
        <Route exact path="/" element={<LandingPage /> } />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<DetailsPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
