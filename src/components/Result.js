import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css"
const Result = ({ name, score }) => {
  const history = useNavigate();
  useEffect(() => {
    if (!name) {
      history("/");
    }
  }, [name, history]);
  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "Center", marginTop: 20 }}
        href="/"
      >Go to Home Page</Button>
    </div>
  );
};

export default Result;
