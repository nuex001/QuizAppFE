import React from "react";
import "../../assets/css/home.css";
import Calendar from "../layouts/home/Calendar";
import Quizsec from "../layouts/home/Quizsec";
import Points from "../layouts/home/Points";
import Navbar from "../layouts/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="box">
          <Calendar />
        </div>
        <Quizsec />
        <Points />
      </div>
    </>
  );
}

export default Home;
