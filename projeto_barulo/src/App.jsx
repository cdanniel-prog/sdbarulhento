import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [soundPlaying, setSoundPlaying] = useState(false);

  // Função para tocar o som
  const playSound = (soundFile) => {
    console.log(`Tentando tocar o som: ${soundFile}`);

    const audio = new Audio(`/sounds/${soundFile}`);

    // Verificando se o áudio está carregado e pronto para tocar
    audio.oncanplaythrough = () => {
      console.log(`Áudio de ${soundFile} carregado e pronto para tocar.`);
      audio.play().catch((err) => console.error('Erro ao tentar tocar o som:', err));
    };

    // Caso o áudio não carregue corretamente
    audio.onerror = (e) => {
      console.error('Erro ao carregar o áudio:', e);
    };

    audio.play().catch((err) => console.error('Erro ao tentar tocar o som:', err));

    setSoundPlaying(true);
    audio.onended = () => setSoundPlaying(false); // Reseta o estado quando o som terminar
  };

  return (
    <div className="App">
      <h1>Projeto Barulhento</h1>
      <div className="buttons-container">
        <button onClick={() => playSound('beep.mp3')}>
          Tocar Beep
        </button>
        <button onClick={() => playSound('boing.mp3')}>
          Tocar Boing
        </button>
        <button onClick={() => playSound('explosion.mp3')}>
          Tocar Explosão
        </button>
      </div>

      <p>{soundPlaying ? 'Som tocando!' : 'Nenhum som tocando'}</p>
    </div>
  );
}

export default App;
