import Heading from "./Heading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      {/* ROUTES ISKE BAHAR VO CHEEZE RAKHEGE JO HAR PAGE PR SHOW  
       KRWANI H */}
      <Routes>
        {/* <Route path="/" element={<Heading />} /> */}
        {/* so jb jb heading pr click hoga toh yeh open hojega 
         path */}
      </Routes>
    </Router>
  );
}

export default App;
