import React, { useRef, useState } from 'react'
import quizImg from "../../../assets/images/quiz.png"

const Quizsec = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const answers = [
    'Ensuring the confidentiality of transactions',
    'Providing digital signatures for transactions',
    'Linking blocks in a blockchain by generating unique identifiers',
    'Encrypting the data stored in each block'
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="box quiz" id='quiz'>
      <img src={quizImg} alt="Quiz" />
      <h2>What is the primary function of a cryptographic hash function in blockchain technology?</h2>
      <div className="answers">
        {answers.map((answer, index) => (
          <div
            key={index}
            className={`btn ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <span></span> <span> {answer}</span>
          </div>
        ))}
      </div>
      <button>Submit</button>
    </div>
  );
};



export default Quizsec