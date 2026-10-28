import { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticipanteCard from '../components/ParticipanteCard';
import { listarNaRoca, listarForaDaRoca, registrarVoto } from '../services/votacaoService';

const naRoca = listarNaRoca();
const foraDaRoca = listarForaDaRoca();

const Votacao = () => {
  const [ultimoVoto, setUltimoVoto] = useState(null);
  const [votosNaSessao, setVotosNaSessao] = useState(0);

  const handleVotar = (participante) => {
    registrarVoto(participante.id);
    setUltimoVoto(participante);
    setVotosNaSessao((anterior) => anterior + 1);
  };

  const vezes = votosNaSessao === 1 ? '1 vez' : `${votosNaSessao} vezes`;

  return (
    <main className="conteudo">
      <section className="titulo-pagina">
        <h1>Quem você quer eliminar?</h1>
        <p>Cada clique conta um voto para tirar o peão da fazenda.</p>
      </section>

      {ultimoVoto !== null && (
        <aside className="aviso-voto" aria-live="polite">
          <span>
            Voto registrado para eliminar <strong>{ultimoVoto.nome}</strong>. Você já votou {vezes}.
          </span>
          <Link to="/resultado" className="aviso-link">Ver resultado</Link>
        </aside>
      )}

      <section aria-label="Participantes na roça" className="grade-roca">
        {naRoca.map((p) => (
          <ParticipanteCard
            key={p.id}
            participante={p}
            onVotar={handleVotar}
          />
        ))}
      </section>

      <section className="bloco-peoes">
        <h2>Demais peões</h2>
        <p>Fora da roça nesta semana, não podem receber votos.</p>

        <div className="grade-peoes">
          {foraDaRoca.map((p) => (
            <ParticipanteCard key={p.id} participante={p} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Votacao;
