import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import "./Quiz.css";
import Questions from "./Questions";

const Quiz = ({ name, score, question, setQuestion, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(question);
    setOptions(
      question &&
        handleShuffle([
          question[currQues]?.correct_answer,
          ...question[currQues]?.incorrect_answers,
        ])
    );
  }, [question, currQues]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome {name}</span>
      {question ? (
        <>
          <div className="quizInfo">
            <span>{question[currQues].category}</span>
            <span>Score : {score}</span>
          </div>

          <Questions
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={question}
            options={options}
            correct={question[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
