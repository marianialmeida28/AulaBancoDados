import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateTimes() {
  const [Time, setTime] = useState('');
  const [Jogador, setJogador] = useState('');
  const [camisa, setCamisa] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoTimes = { time, jogador, camisa };

    try {
      const response = await fetch('http://localhost:5000/times', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoTimes),
      });
      if (response.ok) {
        alert('Time criado com sucesso!');
        setAluno('');
        setTurma('');
        setCurso('');
        navigate("/Times");
      } else {
        alert('Erro ao criar time.');
      }
    } catch (error) {
      console.error('Erro ao criar time:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Criar Times</h2>
      <input
        type="text"
        placeholder="Nome do Jogador"
        value={jogador}
        onChange={(e) => setJogador(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Camisa"
        value={camisa}
        onChange={(e) => setCamisa(e.target.value)}
        required
      />
      <button type="submit">Criar Time</button>
    </form>
    </div>
  );
}
