import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>Gerenciar Times</h2>
            <div className="card-container">
                <Link to="/times/cadastrar" className="card">
                    <div>Registrar Jogador</div>
                </Link>
                <Link to="/times" className="card">
                    <div>Lista de Jogadores</div>
                </Link>
                <Link to="/times/alterar" className="card">
                    <div>Editar Jogador</div>
                </Link>
            </div>
        </div>
    );
}
