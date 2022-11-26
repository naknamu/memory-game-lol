import React, { useState } from "react";
import Card from "./components/card";
import aatrox from "../src/images/aatrox.jpeg";
import ahri from "../src/images/ahri.jpeg";

const App = () => {

  let imageArray = [aatrox, ahri];

  const [character, setCharacter] = useState(imageArray[0]);

  const handleClickCard = (e) => {

    let randomNumber = Math.floor(Math.random() * 2);

    console.log(randomNumber);

    if (randomNumber === 0) {
      // console.log('ahri');
      setCharacter(imageArray[0]);
    } else {
      // console.log('aatrox');
      setCharacter(imageArray[1]);
    }
  }




  return ( 
    <div className="App">
      <header>
        <div id="hero">Memory Game</div>
        <div>Score: 0</div>
        <div>High Score: 0</div>
      </header>
      <div className="card-container">
      
        <Card handleClickCard={handleClickCard} character={character}/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <footer>
        ©naknamu
      </footer>

    </div>
   );
}
 
export default App;
