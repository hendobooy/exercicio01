import React, { useState, useEffect } from 'react';

const RelogioDigital = () => {
  const [hora, setHora] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const horaString = hora.toLocaleTimeString('pt-BR', { hour12: false });
  return (
    <div className="relogio-digital">
      <h3>Hora Atual</h3>
      <div className="tempo">{horaString}</div>
    </div>
  );
};

export default RelogioDigital;
