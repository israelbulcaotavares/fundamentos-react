import './App.css'
import React from "react";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Card from "./components/layout/Card";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento/>
         
      </Card>
      <Card titulo="#02 - Fragmento">
        <ComParametro
          titulo="Situação do aluno" 
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeira Componente"> 
      <Primeiro />
      </Card>
        
      </div>

     

    </div>
  );
};
