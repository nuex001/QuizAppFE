import React, { useState } from "react";
import "../../assets/css/home.css";
import Calendar from "../layouts/home/Calendar";
import Quizsec from "../layouts/home/Quizsec";
import Points from "../layouts/home/Points";
import Navbar from "../layouts/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  const [currentLink, setCurrentLink] = useState("cal");
  return (
    <>
      <Navbar setCurrentLink={setCurrentLink}/>
      <div className="home">
        <ToastContainer />
        <div className={`box ${currentLink === "cal" ? "active" : ""}`}>
          <Calendar />
        </div>
        <div className={`box quiz ${currentLink === "quiz" ? "active" : ""}`}>
          <Quizsec />
        </div>
        <div className={`box points ${currentLink === "points" ? "active" : ""}`}>
          <Points />
        </div>
      </div>
    </>
  );
}

export default Home;
