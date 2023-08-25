import { useState } from 'react';
import styled from 'styled-components';

export default function Numeros(){
    const [clicados, setClicados] = useState({});
    const [showBingo, setShowBingo] = useState(false)
    const numberMock = [
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 
        11, 12, 13, 14, 
        15, 16, 17, 18, 
        19, 20, 21, 22, 
        23, 24, 25, 26, 
        27, 28, 29, 30, 
        31, 32, 33, 34, 
        35, 36, 37, 38, 
        39, 40, 41, 42, 
        43, 44, 45, 46, 
        47, 48, 49, 50, 
        51, 52, 53, 54, 
        55, 56, 57, 58, 
        59, 60, 61, 62, 
        63, 64, 65, 66, 
        67, 68, 69, 70, 
        71, 72, 73, 74, 
        75]


        function click(m) {
            if (clicados[m]) {
                const updatedClicados = { ...clicados };
                updatedClicados[m] = false;
                setClicados(updatedClicados);
            } else {
                const updatedClicados = { ...clicados };
                updatedClicados[m] = true;
                setClicados(updatedClicados);
            }
        }
        function toggleBingo() {
            setShowBingo(!showBingo);
        }

        function resetClicados() {
            setClicados({});
            setShowBingo(false);

        }
    return(
    <div>
        <Margin><Bingo>B</Bingo>
    <Bingo>I</Bingo>
    <Bingo>N</Bingo>
    <Bingo>G</Bingo>
    <Bingo>O</Bingo>
        </Margin>
    
    <Div>
        
        {numberMock.map((m)=>      <Layout
                        onClick={() => click(m)}
                        key={m}
                        clicado={clicados[m]} // Passando o estado de clicado como prop   asdasdasda
                    >
                        {m}
                    </Layout>)}
                   

    
    
    
    </Div>
     <Button onClick={resetClicados}>Reset</Button>
     <Button1 onClick={toggleBingo}>BINGO</Button1>
     {showBingo && <Win>BINGO</Win>}
    </div>)
}

const Win = styled.div`
    position: fixed;
    top: 500px;
    color: red;
    left: 300px;
    font-size: 240px;

`

const Button = styled.button`
    width: 100px;
    margin-top: 100px;
    margin-left: 100px;
    height: 40px;
`
const Button1 = styled.button`
    position: fixed;
    width: 100px;
    top: 620px;
    left:108px;
    height: 40px;
`

const Div = styled.div`
display: grid;
position: fixed;
top: 30px;
width: 90%;
margin-left: 8%;
grid-template-columns: repeat(15, 1fr); /* 25 elementos por linha */
grid-template-rows: repeat(75, auto); /* Até 75 linhas */



`

const Layout = styled.div`
font-size: 50px;
display: flex;
margin-top:20px;
justify-content: center;
align-items: center;
border: 3px solid #CCCCCC;
width: 60px;
height: 60px;
background-color: ${props=>props.clicado?"rgb(103, 219, 161)":"white"} ;
font-weight: bold;

`
//rgb(103, 219, 161)


const Bingo = styled.div`
margin-left: 2%;
font-size: 50px;
display: flex;
flex-direction: column;
margin-top:20px;
justify-content: center;
align-items: center;
border: 3px solid #CCCCCC;
width: 60px;
height: 60px;

`

const Margin = styled.div`
margin-top: 50px;
`