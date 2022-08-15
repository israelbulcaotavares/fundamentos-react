import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => {
  return (
    <div id="app">
      <h1>Fundamentos React 2 (Arrow)</h1>
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
