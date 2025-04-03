import React from "react";
import "./index.css";
import TabelaProdutos from "./componentes/TabelaProdutos";
import ValoresAleatorios from "./componentes/ValoresAleatorios";
import RelogioDigital from "./componentes/RelogioDigital";
import ProgressBar from "./componentes/ProgressBar";
import Votacao from "./componentes/Votacao";

function App() {
  return (
    <div className="container">
      <div className="quadrante quad1">
        <TabelaProdutos />
        <ValoresAleatorios />
      </div>
      <div className="quadrante quad2">
        <RelogioDigital />
      </div>
      <div className="quadrante quad3">
        <ProgressBar />
      </div>
      <div className="quadrante quad4">
        <Votacao />
      </div>
    </div>
  );
}

export default App;
