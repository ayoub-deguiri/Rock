import { useState } from "react"
import rock from '../assets/rock.png'
import paper from '../assets/paper.png'
import scissors from '../assets/scissors.png'
export default function Game()
{
    const [playermove,setplayermove] = useState(rock);
    const [computerMove,setcomputerMove] = useState(rock);
    const [winer,setwinner] = useState();

    const Tab =[rock,paper,scissors]
    const test = (X) => {
            // Shake animation by adding a CSS class
            document.querySelector(".player-choice").classList.add("shake");
            document.querySelector(".computer-choice").classList.add("shake");

        setTimeout(() => {

                    // Remove the shake animation class after a delay
                    document.querySelector(".player-choice").classList.remove("shake");
                    document.querySelector(".computer-choice").classList.remove("shake");

                 // Convert the value to a number
                    const selectedMove = parseInt(X, 10);
                    // Update the playermove state based on the selected move
                    setplayermove(Tab[selectedMove]);

                    // Generate a random computer move
                    const randomIndex = Math.floor(Math.random() * 3);
                    setcomputerMove(Tab[randomIndex]);
                
                    // Check the win (you should implement your win logic here)

                    if (selectedMove === randomIndex) {
                        alert('It\'s a tie!');
                    } 
                    else if(
                        // my  win/lose logic 
                        (selectedMove === 0 && randomIndex === 2) || // Player chooses Rock, Computer chooses Scissors
                        (selectedMove === 1 && randomIndex === 0) || // Player chooses Paper, Computer chooses Rock
                        (selectedMove === 2 && randomIndex === 1) // Player chooses Scissors, Computer chooses Paper
                    )
                    {
                        alert(' u  win woooow')
                    }
                    else{
                        alert(' u  lose ohhhh')
                    }


        }, 500)
       
    
        
    }
    return(
        <>
            <div className="bord">
                
               <div className="players"> 
                    <div className="player-1">
                        <label>  computer  </label>
                        <img src={computerMove}   className="computer-choice"/>
                    </div>
               
                    <div className="player-2">
                        <label htmlFor="player"> player                
                        </label>
                        <img src={playermove}  className="player-choice" />
                    </div>
                </div>

                <div className="Choix">
                    <button onClick={()=>test(0)} value={0}>
                        <img src={rock} alt="" />
                        <span>Rock</span>
                    </button>
                    <button onClick={()=>test(1)}  value={1}>
                    <img src={paper} alt="" />
                        <span>paper</span>
                    </button>
                    <button onClick={()=>test(2)}   value={2}>
                    <img src={scissors} alt="" />
                        <span>scissors</span>
                    </button>
                    
                </div>

               

            </div>
                    <div className="container" style={{marginTop:'5rem'}}>
                            <h3 className="title has-text-centered"> made with love | Ayoub Deguiri</h3>
                    </div>
        </>
    )
}


