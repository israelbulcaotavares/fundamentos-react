import React from "react";

import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

export default () => {
  return (
    <div id="app">
      <h1>Fundamentos React 2 (Arrow)</h1>
      <Aleatorio min={1} max={60}/>
      <Fragmento />

      <ComParametro
        titulo="Situação do aluno"
        subtitulo="Muito legal!"
        aluno="Pedro"
        nota={9.3}
      />

      <Primeiro />
    </div>
  );
};
