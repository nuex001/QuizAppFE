import React from "react";
import { GiSevenPointedStar } from "react-icons/gi";
function Points() {
  return (
    <div className="box points" id="points">
      <div className="wallet">
        <h2>Wallet address</h2>
      </div>
      <h1>My Pionts</h1>
      <GiSevenPointedStar className="icon" />
      <h4>200</h4>
      <button>Refresh Pionts</button>
    </div>
  );
}

export default Points;
