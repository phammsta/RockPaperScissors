import './App.css';
import ChoiceCard from "./components/ChoiceCard"
import ChoiceButtons from "./components/ChoiceButtons";
import { CHOICES, getRoundOutcome } from "./utils";
import React, {useState} from 'react'; //function
// import React, { Component } from 'react'; //class


function App() {

    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [previousWinner, setPreviousWinner] = useState(null);
    const [gameHistory, setGameHistory] = useState([]);
    


    const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES[playerChoice]
    const newComputerChoice = CHOICES[compChoice]

    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    if (result === "Victory!") {
        setPreviousWinner("You");
      } else if (result === "Defeat!") {
        setPreviousWinner("Computer");
      } else {
        setPreviousWinner("Tie");
      }
      gameHistory.push(result);
      setGameHistory(gameHistory);
    
    };

    return (
        <div className="App">
            <ChoiceCard title="You" previousWinner={previousWinner}  imgURL={playerChoice && playerChoice.url}/>
            
            <div className="threebuttons">
            <ChoiceButtons onPlayerChoose={onPlayerChoose}/>
            <br></br>
            <div>History:
            {gameHistory.map(result => {return <li>{result}</li>;})}
            </div>
            </div>
            
            <ChoiceCard title="Computer" previousWinner={previousWinner} imgURL={computerChoice && computerChoice.url}/>
        </div>
    );
    

}


export default App;



// export default class App extends Component {
// constructor(){
//   super()
//   this.state = {
//     winnerPerson:false
//   }
// }
  
// callHey = () =>{
//       console.log("ayayaya")
//       this.setState({winner:!this.state.winner})
//   }

//   render() {
//     return (
    
//         <div className="App">
//             <ChoiceCard title="You" winner={this.state.winner} imgURL={choices.rock}/>
//             <button className="btn" onClick={this.callHey}>hey!</button>
//              <ChoiceCard title="Computer" winner={true} imgURL={choices.paper}/>
//       </div>
//     )
//   }
// }
