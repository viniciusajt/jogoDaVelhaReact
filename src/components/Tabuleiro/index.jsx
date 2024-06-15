import { useEffect, useState } from "react";
import './index.css'

function Tabuleiro(){
    let novoTurno = 0
    const [win, setWin] = useState(false)
    const [velha, setVelha] = useState(false)
    const [turno, setTurno] = useState(0)
    const [jogadas, setJogadas] = useState([
            '', '', '',
            '', '', '',
            '', '', ''
        ]);

        useEffect(()=>{
            switchTurnId();
            winCondition();
        }, [jogadas, velha])

    function playerClick(i){
        if(jogadas[i] == '' && win == false && velha == false){
            if(turno==0 || turno%2==0){
                let novasJogadas = [...jogadas]
                novasJogadas[i] = 'X'
                setJogadas(novasJogadas)
                novoTurno = turno
                novoTurno++
            }
            if(turno!=0 && turno%2!=0){
                let novasJogadas = [...jogadas]
                novasJogadas[i] = 'O'
                setJogadas(novasJogadas)
                novoTurno = turno
                novoTurno++
                
             }
            console.log(velha);
            console.log(jogadas);
            setTurno(novoTurno);
        }
        }

        function switchTurnId(){
            if(turno==0 || turno%2==0){
                turnId.innerHTML = 'Vez de X';   
                }
            if(turno!=0 && turno%2!=0){
                turnId.innerHTML = 'Vez de O';    
                }
        }

        function winCondition(){
            if(jogadas[0] == 'X' && jogadas[1] == 'X' && jogadas[2] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[3] == 'X' && jogadas[4] == 'X' && jogadas[5] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[6] == 'X' && jogadas[7] == 'X' && jogadas[8] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[0] == 'X' && jogadas[3] == 'X' && jogadas[6] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[1] == 'X' && jogadas[4] == 'X' && jogadas[7] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[2] == 'X' && jogadas[5] == 'X' && jogadas[8] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                setWin(true);
               //createResetButton();
            }
            else if(jogadas[0] == 'X' && jogadas[4] == 'X' && jogadas[8] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[2] == 'X' && jogadas[4] == 'X' && jogadas[6] == 'X'){
                turnId.innerHTML = 'Vitória de X'
                setWin(true);
                //createResetButton();
            }

            /*-------------------------------------------------*/

            else if(jogadas[0] == 'O' && jogadas[1] == 'O' && jogadas[2] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[3] == 'O' && jogadas[4] == 'O' && jogadas[5] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[6] == 'O' && jogadas[7] == 'O' && jogadas[8] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[0] == 'O' && jogadas[3] == 'O' && jogadas[6] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[1] == 'O' && jogadas[4] == 'O' && jogadas[7] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                setWin(true);
                //createResetButton();
            }
            else if(jogadas[2] == 'O' && jogadas[5] == 'O' && jogadas[8] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                setWin(true);
               // createResetButton();
            }
            else if(jogadas[0] == 'O' && jogadas[4] == 'O' && jogadas[8] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                setWin(true);
               // createResetButton();
            }
            else if(jogadas[2] == 'O' && jogadas[4] == 'O' && jogadas[6] == 'O'){
                turnId.innerHTML = 'Vitória de O'
                setWin(true);
               // createResetButton();
            }
            else{
                setVelha(true);
                for( let i = 0; i < 9; i++){
                    if(jogadas[i] == ''){
                        setVelha(false);
                    }
                }
                if(velha == true){
                    turnId.innerHTML = 'Velha!';
                   // createResetButton();
                } 
            }
        }

        function resetGame(){
            window.location.reload();
        }
    
    return(
        <>
            <h2>Jogo da Velha</h2>
            <div id="game">
            {
                jogadas.map((item, i)=>(
                    <button className="buttonGame" onClick={()=>{playerClick(i)}}>{item}</button>
                ))
            } 
            </div>
            <h2 id="turnId">Vez de </h2>

            {(velha || win) && (
                    <button type= "button" className="resetButton" onClick={()=>{resetGame()}}>Reiniciar</button>
            )}
            
        </>
    )
}
export default Tabuleiro