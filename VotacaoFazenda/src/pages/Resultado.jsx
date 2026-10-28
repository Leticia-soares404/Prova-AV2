import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlacarItem from '../components/PlacarItem';
import {
  obterVotos,
  calcularTotalVotos,
  calcularResultado,
  zerarVotos,
} from '../services/votacaoService';

const Resultado = () => {
  const [votos, setVotos] = useState(() => obterVotos());

  const total = calcularTotalVotos(votos);
  const resultado = calcularResultado(votos);

  const handleZerar = () => {
    if (window.confirm('Apagar todos os votos?')) {
      zerarVotos();
      setVotos({});
    }
  };

  return (
    <main className="conteudo">
      <section className="titulo-pagina">
        <h1>Parcial da eliminação</h1>
        <p className="contador">
          <span className="contador-numero">{total}</span> votos computados
        </p>
      </section>

      {total === 0 ? (
        <section className="sem-votos">
          <p>Nenhum voto ainda. Escolha quem sai da roça para ver a parcial.</p>
          <Link to="/votacao" className="botao botao-principal">Ir para a votação</Link>
        </section>
      ) : (
        <section>
          <ol className="placar">
            {resultado.map((p, indice) => (
              <PlacarItem key={p.id} participante={p} lider={indice === 0} />
            ))}
          </ol>

          <button type="button" className="botao botao-zerar" onClick={handleZerar}>
            Zerar votação
          </button>
        </section>
      )}
    </main>
  );
};

export default Resultado;
