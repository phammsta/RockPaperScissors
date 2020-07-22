import React from 'react'
const DEFAULT_IMG =
  "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F026%2F489%2Fcrying.jpg";
  
  export default function ChoiceCard(props) {
    const won = props.title === props.previousWinner;
    let className;
    const hasPreviousGame =
      props.previousWinner === "Computer" || props.previousWinner === "You";
    if (hasPreviousGame) {
      className = won ? "winner" : "loser";
    }
  
    let prompt;
    if (won) {
      prompt = "Won";
      className = won ? "winner" : "loser";
    } else if (props.previousWinner === "Tie") {
      prompt = "Tie";
    } else if (props.previousWinner === null) {
      prompt = "Start";
    } else {
      prompt = "Lose";
    }
  
    return (
      <div className={`choice-card ${className}`}>
        <h1>{props.title}</h1>
        <img src={props.imgURL || DEFAULT_IMG} alt={props.title} />
        <h3>{prompt}</h3>
      </div>
    );
  }