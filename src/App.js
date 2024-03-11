import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const[useEffectcounter,setUseEffectCounter] = useState(0)
  const[logado,SetLogado]= useState(false);

  useEffect(()=>{
    console.log("use effect foi chamado");
    setUseEffectCounter(useEffectcounter + 1)

  }, [logado])

  const Logar = () =>{
    SetLogado(true);
  }

  const Deslogar = () =>{
    SetLogado(false);
  }
  
  return (
    <div className="App">
       <h1> useEffect foi chamado {useEffectcounter} vezes</h1>

       {logado ? <p> Logado</p> : <p> Deslogado</p>}
       <button onClick={Logar}> Logar</button>
       <button onClick={Deslogar}> Deslogar</button>
   
    </div>
  );
}

export default App;
