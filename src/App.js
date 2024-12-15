
//              comparison                  //
// ------------------------------------------------ //
//check if two choices are made or not
//compare them if they match or not
//only compare them if we have both the value for choice one and two.
//whaterver the case if they match or dont, invoke the reset function.






import { useEffect, useState } from 'react';
import './App.css';
import { SingleCard } from './components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png" , matched : false },
  { "src": "/img/potion-1.png" , matched : false },
  { "src": "/img/ring-1.png" , matched : false },
  { "src": "/img/scroll-1.png" , matched : false },
  { "src": "/img/shield-1.png" , matched : false },
  { "src": "/img/sword-1.png" , matched : false }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0);
  const [choiceOne , setChoiceOne] = useState(null);
  const [choiceTwo , setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards);
    setTurns(0);
    
  }

  const handleChoice =  (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
   
  }

  useEffect((card) => {
    //compare both
    if(choiceOne && choiceTwo){ // we dont want to compare at first while them being null... 
      
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCard => {
          return prevCard.map(card => {
            if(card.src === choiceOne.src){
              return {...card , matched: true}
            }else {
              return card
            }
          })
        })
        resetTurn(); 
      }else{
        console.log("different");
        resetTurn();
      }
    }
    
  },[choiceOne , choiceTwo])
  
  console.log(cards);


  //reset
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }

  return (
    <div className="App">
      <h1>Match Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
            {cards.map((card) => (
                <SingleCard key={card.id} 
                card={card} 
                handleChoice={handleChoice}
                />
            ))}
        </div>
    </div>
  );
}

export default App;
