import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateTime() {
  const [id, setId] = useState('');
  const [time, setTime] = useState('');
  const [jogador, setJogador] = useState('');
  const [camisa, setCamisa] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { time, jogador, camisa };

    try {
      const response = await fetch(`http://localhost:5000/times/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Time atualizado com sucesso!');
        navigate("/times");
      } else {
        alert('Erro ao atualizar times.');
      }
    } catch (error) {
      console.error('Erro ao atualizar times:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar time</h2>
      <input
        type="text"
        placeholder="ID do jogador"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do jogador"
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
      <button type="submit">Atualizar time</button>
    </form>
    </div>
  );
}
