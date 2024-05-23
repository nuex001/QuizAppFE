import React, { useEffect, useState } from "react";
import { GiSevenPointedStar } from "react-icons/gi";
import axios from "axios";

function Points() {
  const [data, setData] = useState(null);
  const fetchUser = async () => {
    try {
      const res = await axios.get("https://quizappbe.onrender.com/api/user/");
      // console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <div className="wallet">
        <h2>Wallet address</h2>
      </div>
      <h1>My Pionts</h1>
      <GiSevenPointedStar className="icon" />
      <h4>{data && data.point}</h4>
      <button onClick={fetchUser}>Refresh Pionts</button>
    </>
  );
}

export default Points;
