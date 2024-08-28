import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadTimes() {
  const [times, setTimes] = useState([]);


  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const response = await fetch('http://localhost:5000/times');
        const data = await response.json();
        setTimes(data);
      } catch (error) {
        console.error('Erro ao buscar os jogadores:', error);
      }
    };

    fetchTimes();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/times/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setTimes(times.filter((times) => times._id !== id));
        alert('Jogador excluído com sucesso!');
      } else {
        alert('Erro ao excluir jogador.');
      }
    } catch (error) {
      console.error('Erro ao excluir jogador:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Jogadores</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>Código do Jogador</th>
            <th>Time</th>
            <th>Jogador</th>
            <th>Camisa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {times.map((times) => (
            <tr key={times._id}>
              <td>{times._id}</td>
              <td>{times.Time}</td>
              <td>{times.Jogador}</td>
              <td>{times.Camisa}</td>
              <td>
                <button onClick={() => handleDelete(times._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
