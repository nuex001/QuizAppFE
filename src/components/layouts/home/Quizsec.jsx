import React, { useEffect, useRef, useState } from "react";
import quizImg from "../../../assets/images/quiz.png";
import axios from "axios";
import { errorMsgs, successMsg } from "../../utils/utils";
import { GiCancel } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";
const Quizsec = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [id, setId] = useState();
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(null);
  const [timer, setTimer] = useState(null);

  const handleClick = (e) => {
    // console.log(e.target.tagName === "SPAN");
    if (e.target.tagName === "SPAN") {
      const idx = e.target.parentNode.getAttribute("data-index");
      const ans = e.target.parentNode.getAttribute("data-ans");
      setActiveIndex(Number(idx));
      setCurrentAnswer(ans);
    } else {
      const idx = e.target.getAttribute("data-index");
      const ans = e.target.getAttribute("data-ans");
      setActiveIndex(Number(idx));
      setCurrentAnswer(ans);
    }
  };

  const fecthquiz = async () => {
    try {
      const res = await axios.get("https://quizappbe.onrender.com/api/quiz/");
      // console.log(res.data.question);
      setId(res.data._id);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitQuiz = async () => {
    // console.log(currentAnswer);
    try {
      const res = await axios.post(`https://quizappbe.onrender.com/api/quiz/`, {
        quizId: id,
        answer: currentAnswer,
      });
      const msg = res.data.msg;
      setFailed(msg.includes("failed"));
      setTimer(
        setTimeout(() => {
          setFailed(null);
        }, 5000)
      );
    } catch (error) {
        // console.log(error);
        if (error.response.data) {
        errorMsgs(error.response.data.err);
      } else {
        errorMsgs("Server Error");
      }
    }
  };

  useEffect(() => {
    fecthquiz();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <img src={quizImg} alt="Quiz" />
      <h2>{data && data.question}</h2>
      {failed !== null &&
        (failed ? (
          <h3 className="bad">
            <GiCancel /> Opps you failed, try again Tomorrow!
          </h3>
        ) : (
          <h3>
            Congratulations, You got it right! <CiCircleCheck />
          </h3>
        ))}

      <div className="questions">
        {data && (
          <>
            <div
              key={0}
              className={`btn ${activeIndex === 0 ? "active" : ""}`}
              onClick={handleClick}
              data-index={0}
              data-ans={"A"}
            >
              <span></span> <span> {data.A}</span>
            </div>
            <div
              key={1}
              className={`btn ${activeIndex === 1 ? "active" : ""}`}
              onClick={handleClick}
              data-index={1}
              data-ans={"B"}
            >
              <span></span> <span> {data.B}</span>
            </div>
            <div
              key={2}
              className={`btn ${activeIndex === 2 ? "active" : ""}`}
              onClick={handleClick}
              data-index={2}
              data-ans={"C"}
            >
              <span></span> <span> {data.C}</span>
            </div>
            <div
              key={3}
              className={`btn ${activeIndex === 3 ? "active" : ""}`}
              onClick={handleClick}
              data-index={3}
              data-ans={"D"}
            >
              <span></span> <span> {data.D}</span>
            </div>
          </>
        )}
      </div>
      <button onClick={submitQuiz}>Submit</button>
    </>
  );
};

export default Quizsec;
