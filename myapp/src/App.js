import Header from "./Components/Header";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      {/* ROUTES ISKE BAHAR VO CHEEZE RAKHEGE JO HAR PAGE PR SHOW  
       KRWANI H */}
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Home />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/product:id" element={<Contact />} />
        {/* Dynamci routing ->  */}
        <Route path="*" element={<PageNotFound />} />
        {/* * -> used to make 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
