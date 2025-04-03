import React, { useState, useEffect } from 'react';

const Votacao = () => {
  const [votesBolsonaro, setVotesBolsonaro] = useState(0);
  const [votesLula, setVotesLula] = useState(0);

  useEffect(() => {
    const storedBolsonaro = localStorage.getItem('votesBolsonaro');
    const storedLula = localStorage.getItem('votesLula');
    if (storedBolsonaro) setVotesBolsonaro(parseInt(storedBolsonaro, 10));
    if (storedLula) setVotesLula(parseInt(storedLula, 10));
  }, []);

  const handleVoteBolsonaro = () => {
    const newVotes = votesBolsonaro + 1;
    setVotesBolsonaro(newVotes);
    localStorage.setItem('votesBolsonaro', newVotes);
  };

  const handleVoteLula = () => {
    const newVotes = votesLula + 1;
    setVotesLula(newVotes);
    localStorage.setItem('votesLula', newVotes);
  };

  return (
    <div className="votacao">
      <h3>Eleição 2022</h3>
      <div className="votacao-buttons">
        <button onClick={handleVoteBolsonaro}>Bolsonaro</button>
        <button onClick={handleVoteLula}>Lula</button>
      </div>
      <div className="votacao-resultados">
        <p>Bolsonaro: {votesBolsonaro}</p>
        <p>Lula: {votesLula}</p>
      </div>
    </div>
  );
};

export default Votacao;
