import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Sign from "./components/pages/Sign";
import Login from "./components/pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign" element={<Sign />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
