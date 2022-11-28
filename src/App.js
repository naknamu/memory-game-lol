import React, { useEffect, useState } from "react";
import Card from "./components/card";
import aatrox from "../src/images/aatrox.jpeg";
import ahri from "../src/images/ahri.jpeg";
import alistar from "../src/images/alistar.jpeg";
import ashe from "../src/images/ashe.jpeg";
import blitzcrank from "../src/images/blitzcrank.jpeg";
import leblanc from "../src/images/leblanc.jpeg";
import lucian from "../src/images/lucian.jpeg";
import lulu from "../src/images/lulu.jpeg";
import maokai from "../src/images/maokai.jpeg";
import nautilaus from "../src/images/nautilaus.jpeg";
import yasuo from "../src/images/yasuo.jpeg";
import zed from "../src/images/zed.jpeg";

const App = () => {

  const champions = [
    [aatrox, "Aatrox", 1],
    [ahri, "Ahri", 2],
    [alistar, "Alistar", 3],
    [ashe, "Ashe", 4],
    [blitzcrank, "Blitzcrank", 5],
    [leblanc, "Leblanc", 6],
    [lucian, "Lucian", 7],
    [lulu, "Lulu", 8],
    [maokai, "Maokai", 9],
    [nautilaus, "Nautilaus", 10],
    [yasuo, "Yasuo", 11],
    [zed, "Zed", 12], 
  ];


  const [characters, setCharacters] = useState(champions);
  // const [unique, setUnique] = useState(true);
  const [uniqArray, setUniqArray] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  //shuffles the card one time when components mount on screen
  useEffect(() => {

    setCharacters(shuffleArray(characters));

  }, []);

  //Shuffles the array when a card is clicked
  const handleClickCard = (items) => {
    //shuffles the character array
    setCharacters(shuffleArray(characters));
    //handle the click once logic
    handleClickOnce(items[1]);
    
  }

  //A function that shuffles the input parameter array and returns the new shuffled array
  const shuffleArray = (myArray) => {

    let newArray = [...myArray];

    for (let i = newArray.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = k;
    }

    return newArray;
  }

  //A function that handles clicking of a card once
  const handleClickOnce = (key) => {
    //copy state to local variable
    let newArray = [...uniqArray];
    let newScore = score;
    let newHighScore = highScore;

    newArray.push(key);
    newScore++;

    setUniqArray(newArray);
    // setUnique(true);
    setScore(newScore);

    if (newScore > newHighScore){
      setHighScore(highScore + 1);
    }

    let filteredArray =  uniqArray.filter(
      function(item) {
        if (item === key) {
          console.log('This card has been clicked already!');
          // setUnique(false);
          setUniqArray([]);
          setScore(0);
          setHighScore(highScore);
        }
      }
    )
  }

  return ( 
    <div className="App">
      <header>
        <div id="hero">Memory Game</div>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </header>
      <div className="card-container">

        {characters.map((items, index) => 
          <Card key={characters[index][2]} handleClickCard={() => handleClickCard(items)} character={characters[index][0]} champName={characters[index][1]}/>)}

      </div>
      <footer>
        <p>Copyright © 2022 naknamu</p>
      </footer>

    </div>
   );
}
 
export default App;
