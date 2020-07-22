import React from "react";

export default function ChoiceButtons(props) {

    return (
    <div>
        
        <button className="btn" onClick={() => props.onPlayerChoose("rock")}>Rock</button>
        <button className="btn" onClick={() => props.onPlayerChoose("paper")}>Paper</button>
        <button className="btn" onClick={() => props.onPlayerChoose("scissors")}>Scissor</button>
        </div>
    );
}