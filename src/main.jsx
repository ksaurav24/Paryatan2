import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourPage from "./Components/TourPage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tour/:slug" element={<TourPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
